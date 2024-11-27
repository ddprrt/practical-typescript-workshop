function selectElement(list: string[], elem: string) {
  return list.indexOf(elem);
}

let z = selectElement(["up", "down", "left", "right"], "down");
let y = selectElement(["up", "down", "left", "right"], "north");
