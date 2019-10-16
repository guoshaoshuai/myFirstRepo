export interface StringArr {
  [index: string]: Animal
  [index: number]: Dog
}

export class Animal {
  name: string
}

export class Dog extends Animal {
  breed: string
}

export interface NumberDictionary {
  name: string
  length: number
  [index: string]: number | string
}

export interface ReadonlyStringArr {
  readonly [index: number]: string
}
