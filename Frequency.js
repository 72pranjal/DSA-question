// function getFrequency(num, n)  {
//     let str = num.toString()
//     let digits = str.split('')
//     console.log(digits)
//     let count = 0
//     for(let i=0; i<=str.length; i++) {
//         if(+str[i] === n) {
//             count++;
//         }
//     }

//     return count
// }

// let frequency = getFrequency(1232411, 1)
// console.log(frequency)

function getPrimeNumber(n) {
    let primeNumbers = []
    for(let i=2; i<=n; i++) {
        if(isPrime(i)) {
            primeNumbers.push(i)
        }
       
    }
    let newArr = []
    for(let j=0;j<=primeNumbers.length -1; j++) {
        if(primeNumbers[j] + primeNumbers[j+1] === n) {
            newArr.push(primeNumbers[j])
            newArr.push(primeNumbers[j+1])
        }
    }
    console.log("newArr", newArr)
    return primeNumbers
} 

let primeNumbers = getPrimeNumber(101)
console.log("primeNumbers", primeNumbers)

function isPrime(num) {
    if(num === 2) return true
    let count  = 0
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            count++
        }
    }
    if(count === 0) {
        return true
    } else {
        return false
    }
}