let number = "12000000000030035000000000000004"
let numberOfZeros = 0

if (number.includes("0")) {
for (let zeros of number) {
if (zeros === "0") {
numberOfZeros++;
}
} 
console.log(numberOfZeros)
} else {
console.log("there arent any zeros")
}