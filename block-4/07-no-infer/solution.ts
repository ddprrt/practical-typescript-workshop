function selectElement<T extends string>(list: T[], elem: NoInfer<T>) {
  return list.indexOf(elem);
}

let z = selectElement(["up", "down", "left", "right"], "down");
//@ts-expect-error
let y = selectElement(["up", "down", "left", "right"], "north");

export {};
