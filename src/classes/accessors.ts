export class AEmployee {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }


  set fullName(fullName: string) {
    this._fullName = fullName
  }

}
