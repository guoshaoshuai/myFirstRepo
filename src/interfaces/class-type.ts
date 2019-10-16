// interface ClockInterface {
//   currentTime: Date
//   new (hour: number, minute: number)
//   setDate(date: Date): void
// }

// class Clock implements ClockInterface {
//   currentTime: Date
//   constructor(h: number, m: number) { this.setDate(new Date()) }

//   tick() {}
//   setDate(date: Date) {
//     this.currentTime = date
//   }
// }

// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterface
// }


export type ClockConstructor = new (hour: number, minute: number) => ClockInterface

export interface ClockInterface {
  tick(): void
}

// way 1
export function createClock(ctor: ClockConstructor, h: number, m: number): ClockInterface {
  return new ctor(h, m)
}

export class DigitalClock implements ClockInterface {
  // tslint:disable-next-line: prefer-function-over-method
  tick() {
    console.log("beep, beep")
  }
}

export class AnalogClock implements ClockInterface {
  // tslint:disable-next-line: prefer-function-over-method
  tick() {
    console.log("tick tock")
  }
}

// way 2
