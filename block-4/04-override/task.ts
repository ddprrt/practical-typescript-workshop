// Implement derived shapes that override the base shape's
// area and perimeter calculations

abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  describe(): string {
    return `This shape has an area of ${this.getArea()} and a perimeter of ${this.getPerimeter()}`;
  }
}

// Implement Rectangle and Circle classes that properly override
// the abstract methods from the Shape class

export {};
