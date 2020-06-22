import { Dog } from "../interfaces/indexable"
import { InterAinmal } from "./abstract"
import { AEmployee } from "./accessors"
import { Greeter, Greeter2, Horse, MyAnimal, Snake } from "./greet"
import { Employee, OnePerson, PAnimal, ReadonlyPerson, Rhino } from "./modifiers"

const greet = new Greeter("kiki")
greet.greet()

const dog = new Dog()
dog.bark()
dog.move(4)

const lily = new Snake("lily")
const nana: MyAnimal = new Horse("Nana")
lily.move()
nana.move(20)

const animal = new PAnimal("animal")
let rhi = new Rhino()
console.log(rhi)
rhi = animal
console.log(rhi)

const p = new OnePerson("woo")
console.log(p)

const emp = new Employee("as", 23)
// const pa = new Person("")
console.log(emp)

const r = new ReadonlyPerson("aha")
console.log(r)

const emp2 = new AEmployee()
emp2.fullName = "LiBa"
console.log(emp2.fullName)

interface ComesFromString {
  name: string
}

type StringConstructable = new(n: string) => ComesFromString

class MadeFromString implements ComesFromString {
  constructor(public name: string) {
      console.log("ctor invoked")
  }
}

function makeObj(n: StringConstructable) {
  return new n("hello!")
}

console.log(makeObj(MadeFromString).name)

const ia: InterAinmal = {
  name: "aa",
  voice: "as",
  makeSound() { console.log(`${this.name} make sound`) },
  move() { console.log("move..") },
  say() { console.log("") }
}
ia.makeSound()

const greeter2 = new Greeter2()
greeter2.greet()

const otherGreeter: typeof Greeter2 = Greeter2
otherGreeter.stardardGreeting = "Hey, there!"
const greeter3 = new otherGreeter()
greeter3.greet()
greeter3.greeting = "here"
greeter3.greet()

// class PP {
//   name: string
//   addr?: Addr
// }

// class Addr {
//   country?: string
//   city?: string
// }

// const per1: PP = { name: "gss" }
// const country = per1.addr?.city
// console.log(country)

const ids: {[id: string]: number} = {}
const arr = [1, 2, 3]

function setId(num: number) {
  ids[num.toString()] = num
}
arr.forEach(setId)
console.log(ids)

arr.push(1, 2)
console.log(arr)
