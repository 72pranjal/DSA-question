// Insertion sort steps
// 1: Always start form array second element
// 2: if left side element is greater than right side then perform swoping

// q1: sort the give arrry using insertion  sort
let arr = [8,2,3,5,1,6,7]
function doSorting(arr) {
    for(let i=1; i<arr.length; i++) {
        let curr = arr[i]
        let j= i-1;
        while(j>=0 && arr[j] > curr) {
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = curr
        
    }
    console.log(arr)
}
doSorting(arr)