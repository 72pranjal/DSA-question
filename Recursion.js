// function check(n) {
//     if(n==0) return
//     console.log(n)
//     check(n-1)
//     console.log(n)
// }
// check(3)


// function checkdata(n) {
//     if(n==0) return

//     return n+checkdata(n-1)
// }
// console.log(checkdata(3))

// function print(n) {
//     if(n===0) return;
// print(n-1)
// console.log(n)
// print(n-1)

// }
// print(3)

// function printNumber(n) {
//     if(n<0) return
//     console.log(n)
//     printNumber(n-1)
// }
// printNumber(5)



function fibonacci(N) {
    if (N <= 0) {
        return 0;
    } else if (N === 1) {
        return 1;
    } else {
        return fibonacci(N - 1) + fibonacci(N - 2);
    }
}

// // Call the function with an example input
console.log(fibonacci(5));


// function power(a, b) {
//     if (b === 0) {
//         return 1;
//     }
//     return a * power(a, b - 1);
// }

// // Call the function with example inputs
// console.log(power(2, 3));

// q1: Print star pattern
// *
// * *
// * * *
// * * * *
// function solve(n, curr = 1) {
//     // Your code here
//     let row = ''
//     if(curr > n) return
//     for(let i=1; i<=curr; i++) {
//       row += '* '
//     }
//     console.log(row)
//     return  solve(n, curr +1)
// }
// solve(4)