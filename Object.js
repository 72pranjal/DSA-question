// let obj = {
//     'full-name' : 'Alex',
//     "age": 23
// }
// let newkey = 'first-name'
// for(let key in obj) {
//     if(key === 'full-name') {
//         obj[newkey] = obj[key]
//         delete obj[key]
//     }
// }
// console.log(obj)

// let person = {
//     name: 'Jhon',
//     age: 23,
//     email: 'jhon@gmail.com'
// }
// let address = {
//     city: 'Noida',
//     state: 'UP',
//     country: 'India'
// }

// let personWithAddress = {}
// for(let key in person) {
//     personWithAddress[key] = person[key]
// }
// for(let key in address) {
//     personWithAddress[key] = address[key]
// }
// // console.log(personWithAddress)



// let cart = {

//     owner: "Abhishek",

//     items: [

//         { name: "Laptop", price: 50000, quantity: 5 },

//         { name: "Mouse", price: 500, quantity: 0 },

//         { name: "USB", price: 300, quantity: 0 },

//         { name: "Keyboard", price: 1000, quantity: 2 },

//         { name: "Monitor", price: 10000, quantity: 10},

       

//     ]

// };

// let items = cart.items
// let totalPrice = 0
// for(let item of items) {
//     totalPrice += item.price * item.quantity
// }
// // console.log(totalPrice)

// // let nonZeroItems = cart.items.filter(item => item.quantity !== 0)
// // cart.items = nonZeroItems
// // console.log(nonZeroItems)
// let l = items.length
// for(let i=0; i<items.length; i++) {
//     if(items[i].quantity === 0) {
//         items.splice(i,1) 
//         i--
//     }
// }
// console.log(items)


// let employees = [

//     { name: "Hannah", department: "Finance" },

//     { name: "Sarah", department: "IT" },

//     { name: "Zryan", department: "Finance" },

//     { name: "Mike", department: "IT" },

//     { name: "Yshley", department: "Finance" },

//     { name: "Jeff", department: "IT" }

//   ];

//   employees.sort(getSorted)
//   function getSorted(a, b) {
//     if(a.department > b.department) {
//         return 1
//     } else if (a.department < b.department) {
//         return -1
//     } else {
//         return 0
//     }
//   }
//   console.log(employees)



let arr = [

    {marks: 10 , details: {name: "abhi", age: 23, subject: "maths"}},

    {marks: 20 , details: {name: "rahul", age: 15, subject: "science"}},

    {marks: 30 , details: {name: "rohit", age: 20, subject: "maths"}},

    {marks: 40 , details: {name: "sachin", age: 17, subject: "science"}},

    {marks: 3 , details: {name: "sachin", age: 17, subject: "sst"}},

    

    {marks: 11 , details: {name: "sachin", age: 17, subject: "maths"}}

]

arr.sort(doSorting)
function doSorting(a,b) {
    if(a.details.subject > b.details.subject) {
        return -1
    } else if(a.details.subject < b.details.subject) {
        return 1
    } else {
        if(a.marks > b.marks) {
            return 1
        } else {
            return -1
        }
    }
}
console.log(arr)