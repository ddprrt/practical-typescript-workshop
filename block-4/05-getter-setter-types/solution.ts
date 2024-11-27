class Temperature {
  #celsius: number = 0;

  get temperature(): string {
    return `${this.#celsius}°C`;
  }

  set temperature(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero is not possible");
    }
    this.#celsius = value;
  }
}

const temp = new Temperature();
temp.temperature = 25; // Takes number
const display = temp.temperature; // Returns string

export {};
