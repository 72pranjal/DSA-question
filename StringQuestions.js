// Q1: Take string lowercase string "abc" and replace its all character by 1
function charReplaceBy1(str) {
  let newStr = ''
  for(let t of str) {
    let integerValue = t.charCodeAt()
    let value = integerValue + 1
    if(value > 122)  {
      newStr += String.fromCharCode(96 + 1)
    } else {
      newStr += String.fromCharCode(value)
    }
  }
  return newStr;

}
let replacedStr = charReplaceBy1("abcyz")
// console.log(replacedStr)

// Q2: Take a string like sentense and print all word in new line
function breakWord(str) {
  str = str + ' '
  let word = ''
  for(let i=0; i<str.length; i++) {
    if(str[i] !== " ") {
      word += str[i]
    } else {
      console.log(word)
      word =""
    }
  }
}
// breakWord("Ram is dancing on the floor")

// Q3: Take string and reverse earch and print it;
function reversedWordStr(str) {
  str = str + ' '
  let newStr = ''
  let word = ''
  for(let i=0; i<str.length; i++) {
    if(str[i] !== ' ') {
      word = str[i] + word
    } else {
      newStr = newStr + word + ' '
      word = ''
    }
  }
  return newStr
}
// console.log(reversedWordStr("Ram is dancing on the floor"))

// Q4: Take a person name as string and retrun their name in dot formate with last word
// Ex = str = 'mohan prakash shrama jha chaudhary' = M.P.S.J. chaudhary

function nameInDotFormate(str) {
 let lastindexofSpace = str.lastIndexOf(' ')
 let lastWord = str.slice(lastindexofSpace+1)
 let restStr = " " + str.slice(0,lastindexofSpace)
 let nameWithDot = ''
 for(let i=0; i<restStr.length; i++) {
  if(restStr[i] === " ") {
    nameWithDot += restStr[i+1].toUpperCase() + '.'
  }
}
return nameWithDot + ' ' +lastWord

}
// console.log(nameInDotFormate('mohan prakash shrama jha chaudhary'))

// Q5: Print nth num number table
function nthTable(n) {
  for(let i=1; i<=10; i++) {
    const table = n+' * '+ i + ' = ' +n*i
    console.log(table)
  }
}
// nthTable(10)

// Q6: Take a number 
// step1: Print sum of digits
// step2 number + reverse of number then find the sum of their digits
// step3 stpe2 + reverse of number then find the sum of their digits
// and return sum of all steps
function sumOfDigits(num) {
  let sum = 0;
  while(num>0) {
    let last = num%10;
    sum += last
    num = parseInt(num/10)
  }
  return sum
}
function reversedNumber(num) {
  let reversed = 0;
  while(num>0) {
    let last = num%10;
    reversed  = reversed*10 + last
    num = parseInt(num/10)
  }
  return reversed
}
function followRules(number) {
  let s1 = sumOfDigits(number)
  let sum1 = number + reversedNumber(number)
  let s2 = sumOfDigits(sum1)
  let sum2 = sum1 + reversedNumber(sum1)
  let s3 = sumOfDigits(sum2)
  return s1 + s2 + s3
} 
console.log(followRules(1234))

