import { AnalogClock, ClockConstructor, ClockInterface, createClock, DigitalClock } from "./class-type"
import { Square } from "./extend"
import { SearchFunc } from "./function"
import { getCounter } from "./hybrid"
import { StringArr } from "./indexable"
import { createSquare } from "./properties"

// const square = createSquare({ color: "blue", name: "coco" } as any)
const square1 = createSquare({ color: "blue", name: "coco" })
console.log(square1)

const func: SearchFunc = function(src, sub) {
  const result = src.search(sub)
  return result > -1
}
console.log(func("aha", "ha"))

// const myArr: StringArr = ["kiki", {name: "chuchu"}]
const myArr: StringArr = [] as any
const name = "kiki"
myArr[name] = { name }
myArr[0] = { breed: "aha", name: "ha" }
console.log(myArr)

// const readonlyArr: ReadonlyStringArr = ["Alice", "Bob"]
// readonlyArr[0] = ""

const clock1 = createClock(DigitalClock, 5, 23)
const clock2 = createClock(AnalogClock, 3, 12)
console.log(clock1.tick(), clock2.tick())

const Clock: ClockConstructor = class Klock implements ClockInterface {
  constructor(h: number, m: number) { console.log(h, m) }
  // tslint:disable-next-line: prefer-function-over-method
  tick() {
    console.log("beep!")
  }
}
console.log(new Clock(3, 4).tick())

// tslint:disable-next-line: no-object-literal-type-assertion
const square2 = {} as Square
square2.color = "blue"
square2.width = 10
square2.penWidth = 20
console.log(square2)

const c = getCounter()
c(10)
c.reset()
c.interval = 5

// const sc: SelectableControl = {  state: 2, select() { console.log("sc") } }
// console.log(sc)
