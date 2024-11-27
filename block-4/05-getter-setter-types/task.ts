class Temperature {
  #celsius: number = 0;
}

const temp = new Temperature();
// @ts-expect-error
temp.temperature = 25; // Takes number
// @ts-expect-error
const display = temp.temperature; // Returns string

export {};
