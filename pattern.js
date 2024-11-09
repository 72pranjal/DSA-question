// function getPrimeNumbers(num) {
//     if (num <= 2 || num % 2 !== 0) {
//         console.log(-1);
//         return;
//     }
//     let allPrimes = [];
//     for(let i=2; i<=num / 2; i++) {
//         let j = num - i
//         if(checkPrime(i) && checkPrime(j)) {
//             // if(i<=j) {
//                 console.log(i, j)
//                  return
//             // }
//         }
//     } 
//     console.log(-1)
// }

// function checkPrime(num) {
//   if(num === 2) return true;
//   if(num%2 === 0) return false
//   for(let i= 2; i<= num -1 ; i++) {
//     if( num%i === 0) return false
//   }
//   return true
// }
// console.log(getPrimeNumbers(4))


// let str = 'stole now noch'
// let frequencyArr = new Array(26).fill(0)

// for(let char of str.toLowerCase()) {
//     if(char >= 'a' && char <= 'z') {
//         console.log(char, char.charCodeAt(0))
//         frequencyArr[char.charCodeAt(0) - 97]++
//     }
// }
// console.log(frequencyArr.join(' '))

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// let n = 19;
// let check = Math.ceil(n/2)
// for(let i=1; i<=9; i++) {
//     let row = ''
//     for(let j=1; j<=i;j++) {
//         row += '*' + ' '
//     }
//     console.log(row)
//     if(i > check) {
//         for(let k=check)
//     }
// }
// // for(let i=Math.floor(n/2); i>=1; i--) {
// //     let row = ''
// //     for(let j=1; j<=i;j++) {
// //         row += '*' + ' '
// //     }
// //     console.log(row)
// // }

// Q1: Print this pattern
//      *
//     *
//    *
//   * 
let star = 1
let n =5
for(let i=1; i<=5; i++) {
    let row  = ''
    for(let j=1; j<=n-i; j++) {
        row += ' '
    }
    for(let k=1; k<=star; k++) {
        row += '*'
    }
    console.log(row)
}
let str = 'abiacibibibibi'
let replace = 'bi'
let word = 'zz'
let newStr = str.replaceAll(replace, word)
console.log(newStr)
