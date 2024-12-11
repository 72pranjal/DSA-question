// Merge sort follow the divide and conqure methods

let unSortedArray = [2,3,1,5,7,6,9,8]
 function divide(arr) {
    if(arr.length <=1) return arr
    let mid = Math.floor(arr.length / 2)
    let leftPart = divide(arr.slice(0,mid))
    let rightPart = divide(arr.slice(mid))
    return merged(leftPart, rightPart)
 }
 function merged(left, right) {
    let sortedArray = []
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray, ...left, ...right]
 }
 console.log(divide(unSortedArray))