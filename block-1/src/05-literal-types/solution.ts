// 1. Literal types
type Direction = "up" | "down" | "left" | "right";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// 2. Function using literal types
function move(direction: Direction, steps: number): void {
  switch (direction) {
    case "up":
      console.log(`Moving up ${steps} steps`);
      break;
    case "down":
      console.log(`Moving down ${steps} steps`);
      break;
    case "left":
      console.log(`Moving left ${steps} steps`);
      break;
    case "right":
      console.log(`Moving right ${steps} steps`);
      break;
  }
}

// 3. Type safe API request
function request(method: HttpMethod, url: string): void {
  console.log(`Making ${method} request to ${url}`);
}

export {};
