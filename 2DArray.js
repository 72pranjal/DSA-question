// Q1; take a matrix of 3*4 and calculate the sum of each column sum
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10, 11, 12]
]
for(let i=0; i<matrix[0].length; i++) {
    let sum = 0
    for(let j=0; j<matrix.length; j++) {
       sum += matrix[j][i]
    }
    console.log("sum = ", sum)
}

// Q2: You are given a chessboard of size N x N, where the top left square is black. Each square contains a value. Find the sum of the values of all black squares and all white squares.
// Remember that in a chessboard, black and white squares are alternate.
// 3
// 1 2 3
// 4 5 6
// 7 8 9
let chessBorad = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let blackSum =0;
let whiteSUm = 0;
let n= chessBorad.length
for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
        if((i+j) % 2 == 0) {
            blackSum += chessBorad[i][j]
            console.log(chessBorad[i][j])
        } else {
            whiteSUm += chessBorad[i][j]
        }
    }
}
console.log(blackSum, whiteSUm)

// Q3: Transpose of matrix
let mat = [
    [10,20,30, 100],
    [40,50,60, 200],
    [70,80,90, 300]
]
let transpose = []
for(let i=0; i<mat[0].length; i++) {
    let nums = []
    for(let j=0; j<mat.length; j++) {
        nums.push(mat[j][i])
    }
    transpose.push(nums)
}
console.log(transpose)

// Q4:
let mat1 = [
    [1, 0, 2],
    [1, 3, 0],
    [4, 0, 5]
]
let flag = false
for(let i=0; i<mat1.length; i++) {
    for(let j=0; j<mat1.length; j++) {
        if( i == j && mat1[i][j] > 0) {
            flag = true
        } else if((i+j) % 2 === 0 && mat1[i][j] > 0) {
            flag = true
        } else if((i+j)%2 !== 0 && mat1[i][j] !== 0) {
            flag = false
        }
    }
}
console.log(flag)