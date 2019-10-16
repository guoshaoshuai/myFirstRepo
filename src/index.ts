import { Hasky } from "./test/as"

Hasky.prototype.level = 2

const kiki = new Hasky("kiki")
kiki.__proto__.level = 3

const chuchu = new Hasky()

console.log(kiki, kiki.level)
console.log(chuchu, chuchu.level)

console.log(kiki.constructor)
console.log(kiki.__proto__.constructor)
console.log(Hasky.prototype.constructor)
console.log(Hasky.prototype)
console.log(Hasky.constructor)
console.log("protoM.prototype: ", protoM.prototype)

console.log(kiki.constructor === kiki.__proto__.constructor)

function protoM() {
    console.log("proto test")
}
