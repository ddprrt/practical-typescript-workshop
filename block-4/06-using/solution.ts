class FileHandler implements Disposable {
  private fileName: string;
  private isOpen: boolean = false;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.isOpen = true;
    console.log(`Opening file: ${fileName}`);
  }

  write(data: string): void {
    if (!this.isOpen) throw new Error("File is closed");
    console.log(`Writing to ${this.fileName}: ${data}`);
  }

  read(): string {
    if (!this.isOpen) throw new Error("File is closed");
    return `Content from ${this.fileName}`;
  }

  [Symbol.dispose](): void {
    if (this.isOpen) {
      console.log(`Closing file: ${this.fileName}`);
      this.isOpen = false;
    }
  }
}

class DatabaseConnection implements Disposable {
  private isConnected: boolean = false;

  constructor(private connectionString: string) {
    this.isConnected = true;
    console.log(`Connected to database: ${connectionString}`);
  }

  query(sql: string): string[] {
    if (!this.isConnected) throw new Error("Connection is closed");
    console.log(`Executing query: ${sql}`);
    return ["result1", "result2"];
  }

  [Symbol.dispose](): void {
    if (this.isConnected) {
      console.log(`Closing database connection: ${this.connectionString}`);
      this.isConnected = false;
    }
  }
}

function processUserData(userId: string): string[] {
  // Multiple resources with automatic cleanup
  using file = new FileHandler(`user-${userId}.txt`);
  using db = new DatabaseConnection("users-db");

  try {
    const userData = db.query(`SELECT * FROM users WHERE id = ${userId}`);
    file.write(JSON.stringify(userData));
    return userData;
  } catch (error) {
    console.error("Error processing user data:", error);
    throw error;
  }
  // Both file and db will be automatically disposed here
}

export {};
