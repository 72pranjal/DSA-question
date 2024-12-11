// Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.

// We start with second element of the array as first element in the array is assumed to be sorted.
// Compare second element with the first element and check if the second element is smaller then swap them.
// Move to the third element and compare it with the first two elements and put at its correct position
// Repeat until the entire array is sorted.


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