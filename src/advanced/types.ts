interface First { name: string }
interface Second { age: number }

interface Per extends First, Second {}
const p: Per = {name: "", age: 12}
// const p2: First & Second = {name: "", age: 12}
const p2: Partial<First & Second> = {}

class Person {
  [index: string]: any
  constructor(public name: string) {}
}

interface Logger {
  loo: string
  log(str: string): void
}

class MyLogger implements Logger {
  [index: string]: any
  loo: string
  age: number
  log(str: string) {
    console.log(`log: ${str}, age: ${this.age}`)
  }
}

// function extend2<First1, Second2>(first: First1, second: Second2): First1 & Second2 {
//   const result: Partial<First1 & Second2> = {}
//   for (const prop in first) {
//       if (first.hasOwnProperty(prop)) {
//           (result as First)[prop] = first[prop]
//       }
//   }
//   for (const prop in second) {
//       if (second.hasOwnProperty(prop)) {
//           (result as Second)[prop] = second[prop]
//       }
//   }
//   return result as First & Second
// }

function extend(first: Person, second: MyLogger): Person & MyLogger {
  const result: Partial<First & Second> = {}
  for (const prop in first) {
      if (first.hasOwnProperty(prop)) {
          (result as Person)[prop] = first[prop]
      }
  }
  console.log(JSON.stringify(first))
  console.log(JSON.stringify(second))
  for (const prop in second) {
      if (second.hasOwnProperty(prop)) {
          (result as MyLogger)[prop] = second[prop]
      }
  }
  return result as Person & MyLogger
}
const ll = new MyLogger()
// console.log(Object.getOwnPropertyNames(MyLogger.prototype))
// ll.log("sd")
// console.log(Object.getOwnPropertyNames(Person.prototype))

// const tt = extend(new Person("gss"), MyLogger.prototype)
// tt.log(tt.name)
// console.log(JSON.stringify(tt))
// const looog = new MyLogger()
// console.log(JSON.stringify(looog))

function getOneNuc(uni: Per | Logger) {
  if (isP(uni)) {
    uni.age = 100
    uni.name = "aguo"
  } else {
    uni.log("next the door!")
  }
  return uni
}
function isP(pOrL: Per | Logger): pOrL is Per {
  return (pOrL as Per).name !== undefined
}

const ispp = {name: "gss", age: 12}
const isll = {loo: "boy", log(str: string) { console.log(`${this.loo}, ${str}`) } }
const aaaa = getOneNuc(isll)
// console.log(JSON.stringify(aaaa))
// for (const e in ispp) {
  // console.log(e)
// }
const ps: Person = { name: "sdf" }
// console.log(ps[0])

type Keys = "option1" | "option2"
type Flags = { [K in Keys]: boolean }

class TeGS {
  constructor(public name: string) {}
  // get() { return this.name }
  get a() { return this.name }
  set b(name: string) { this.name = name }
}
const tegs = new TeGS("boy")
// console.log(tegs.a)
tegs.b = "12"
// console.log(tegs.a)

async function getNewA(a: string) {
  return a
}

const sy1 = Symbol("sy")
const sy2 = Symbol("sy")

let obj = {
    [Symbol("sy")]: "value",
    sy1: "12"
}
for (const k in obj) {
  console.log(k)
}
console.log(obj)
