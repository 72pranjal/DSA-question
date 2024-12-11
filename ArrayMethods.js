let arr = [10,20,30, [20, 30], [40, 60]]

let newArr = arr.reduce((acc, curr) => {
    if(Array.isArray(curr)) {
      return [...acc, ...curr]
    } else {
        return [...acc, curr]
    }
},[])

console.log(newArr)

let repetedNumbers = [10, 20, 30,34,21,12,12,10,12,34,34,34,34]
let uniqueNumbers = repetedNumbers.reduce((acc,curr)=> {
    if(!acc.includes(curr)) {
        acc.push(curr)
    }
    return acc
}, [])
console.log(uniqueNumbers)


let person = [

    { name: 'Alice', age: 25 },

    { name: 'Bob', age: 30 },

    { name: 'Charlie', age: 25 },

    { name: 'Dave', age: 30 },

    { name: 'Dave', age: 30 },

    { name: 'Eve', age: 25 }

  ];