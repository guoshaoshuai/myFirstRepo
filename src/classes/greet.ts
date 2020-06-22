export class Greeter {
  greeting: string
  constructor(s: string) { this.greeting = s }
  greet() { console.log("hello," + this.greeting) }
}

export class Greeter2 {
  static stardardGreeting = "Hello, there!"
  greeting: string
  greet() {
    if (this.greeting) console.log("Hello, " + this.greeting)
    else console.log(Greeter2.stardardGreeting)
    console.log("master")
  }
}

export class MyAnimal {
  name: string
  constructor(name: string) { this.name = name }
  move(distance = 0) { console.log(`${this.name} moved ${distance}`) }
}

export class Snake extends MyAnimal {
  constructor(name: string) {
    super(name)
  }
  move(distances = 5) {
    console.log("Slithering...")
    super.move(distances)
  }
}

export class Horse extends MyAnimal {
  move(distances = 50) {
    console.log("Galloping...")
    super.move(distances)
  }
}

