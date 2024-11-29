abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  describe(): string {
    return `This shape has an area of ${this.getArea()} and a perimeter of ${this.getPerimeter()}`;
  }
}

class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  override getArea(): number {
    return this.width * this.height;
  }

  override getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  // Additional method specific to Rectangle
  override describe(): string {
    return `Rectangle ${super.describe()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  override getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  override getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  // Additional method specific to Circle
  override describe(): string {
    return `Circle ${super.describe()}`;
  }
}

// Example usage
const rectangle = new Rectangle(5, 3);
console.log(rectangle.describe());
// Output: "Rectangle This shape has an area of 15 and a perimeter of 16"

const circle = new Circle(3);
console.log(circle.describe());
// Output: "Circle This shape has an area of 28.27... and a perimeter of 18.85..."
//
export {};
