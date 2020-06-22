class CompA {
  name: string
}

function greet(p: CompA) {
  console.log(`hello, ${p.name}`)
}

// greet({name: "gss", age: 12})
class CompAA extends CompA {
  age: number
}

let coma: CompA = {name: "as"}
let comaa: CompAA = {name: "sa", age: 12}

