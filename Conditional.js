// q1 check the number is even or odd

let num1 = 20
if(num1 % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

// q2 check the product of two numbers is divisible by 8 or not and check the sum of two numbers is evet or odd

let num2 = 10;
let num3 = 21;
let sum = num2 + num3
let product = num2 * num3

if(product % 8 === 0) {
    console.log("Divisible")
} else {
    console.log("Not divisible")
}
if(sum % 2 === 0) {
    console.log("Sum of two numbers is even")
} else {
    console.log("Sum of two numbers is odd")
}

// q3 check number2 is factor of number 1
let x = 20;
let y = 23;

if(x%y === 0) {
    console.log("Yes")
} else {
    console.log("No")
}

// q4 Check number is desimle or not
let desimle = 10
if(parseInt(desimle) !== desimle) {
    console.log('yes decimle')
} else {
    console.log("not decimle");
    
}

// q5: Take a number and check even or odd, if it is even then check it divisible by 4 or not,
// if it is odd then check it is divisible by 3 or not
let number = 20;
if(number % 2 === 0) {
    console.log("Even")
    if(number % 4 === 0) {
        console.log("Number is divisible by 4");
    } else {
        console.log("Number is not divisible by 4");
    }
} else {
    console.log("Odd");
    if(number % 3 === 0) {
        console.log("Number is divisible by 3");
    } else {
        console.log("Number is not divisible by 3");
    }
}

// q6: Take number and print "Hello" if divisible by 3, print "World" if divisible by 5,
//  print "HelloWorld" if divisible by 3 and 5
let num4 = 15;
if(num4 % 3 === 0 && num4 % 5 === 0) {
    console.log("HelloWorld")
} else if(num4 % 3 === 0) {
    console.log("Hello");
} else if (num4 % 5 === 0) {
    console.log("World");   
}

// q7: Take a number of electricity units consumed and calculate amout to pay bassed on the rules below
// for first rule 50 units, rs: 1/unit
// for next 100 units rs: 2/unit
// for next 200 units rs: 3/unit
// for above 250 units rs: 4/unit
// for  all bills above 150 rupees additional charge of 20% of total bill amount is added
let units = 200;
let bill = 0;
if(units<=50) {
    bill = units*1;
} else if(units > 50 && units<=100) {
    bill = 50*1 + (units - 50)*2
} else if (units > 100 && units <= 200) {
    bill = 50*1 + 100*2 + (units - 150)* 3
} else if(units > 250) {
    bill = 50*1 + 100*2 + 200*3 + (units-200)*4
}
console.log(bill);

if(bill > 150)  {
    bill = bill + (bill*20)/100
}
console.log(bill)