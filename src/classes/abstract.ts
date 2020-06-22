export abstract class AbstractAnimal {
  constructor(public name: string) {}
  abstract makeSound(): void
  move(): void { console.log(`${this.name} abstract move...`) }
}

export class ImplAnimal extends AbstractAnimal {
  constructor(name: string, public voice: string) { super(name) }
  makeSound() { console.log(`${this.voice}...`) }
}

export interface InterAinmal extends ImplAnimal {
  say(): void

}

