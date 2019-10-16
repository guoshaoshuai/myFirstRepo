let shape: Shape = { color: "red" }

export interface Shape {
  color: string
}

export interface Square extends Shape, PenStroke {
  width: number
}

interface PenStroke {
  penWidth: number
}

class Control {
  // private state: any
}

export interface SelectableControl extends Control {
  select(): void
}

export class Button extends Control implements SelectableControl {
  // tslint:disable-next-line: prefer-function-over-method
  select() { console.log("Button select()") }
}

export class TextBox extends Control {
  // tslint:disable-next-line: prefer-function-over-method
  select() { console.log("TextBox select()") }
}

// export class Image implements SelectableControl {

//   // tslint:disable-next-line: prefer-function-over-method
//   select() { console.log("Image select()") }
// }

export function setShape(s: Shape) {
  shape = s
}

export function getShape(): Shape {
  return shape
}
