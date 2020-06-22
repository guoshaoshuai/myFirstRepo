export class PAnimal {
  private name: string
  constructor(name: string) { this.name = name }
  move() { console.log(`${this.name} moved`) }
}

export class Person {
  name: string
  protected age: number
  protected constructor(name: string, age = 3) { this.name = name, this.age = age }
}

export class OnePerson extends Person {
  private sex: string
  constructor(name: string) {
    super(name, 18)
    this.sex = "unknown"
  }
  getSex() { return this.sex }
}

export class Employee extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
}

export class ReadonlyPerson {
  readonly theName: string = "aha"
  constructor(public name: string) { this.theName = name }
}

export class Rhino extends PAnimal {
  constructor() {
    super("Rhino")
  }
}
