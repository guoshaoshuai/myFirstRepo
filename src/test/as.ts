interface Dog {
    name: string
}

// export interface ClockConstructor {
//     new (h: number, m: number): void
// }

// export type ClockConstructor = new (h: number, m: number) => void

export class Hasky implements Dog {
    name: string
    age?: number
    [varName: string]: any
    constructor(name = "aha") { this.name = name, this.age = 1 }
}
