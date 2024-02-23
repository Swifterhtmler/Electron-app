let number = "100000"
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

