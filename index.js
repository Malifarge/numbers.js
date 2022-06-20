
// 01 - Number

const number = 102
const float = 13.9
console.log(number, float);

// 02 - Convert

const basic = 34
const stringified  = basic.toString()
console.log(stringified);

// 03 - Round

const num = 1.5
const rounded = Math.round(num)
console.log(rounded);

// 04 - Arithmétique

const test = 12
const bis = 5

console.log(test+bis);
console.log(test-bis);
console.log(test*bis);
console.log(test/bis);
console.log(test**bis);
console.log(test%bis);

// 05 - Reste division euclidienne



function divisible (numberTest) {
    for (let numberDiv = 1; numberDiv<6; numberDiv ++ ){
        if(numberTest%numberDiv == 0) {
            console.log(`${numberTest} est divisible par ${numberDiv}`);
            numberDiv +=1
        }
        }
    
}


divisible(numberTest = 999)
divisible(numberTest=25)
divisible(numberTest = 190280)
divisible(numberTest = 47)
divisible(numberTest = 691)
