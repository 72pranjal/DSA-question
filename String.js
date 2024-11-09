// // q1: Remove all the duplicate char from the string
// let str = 'adamammgg'
// let newStr = '';
// for (let t of str) {
//     if (newStr.indexOf(t) === -1) {
//         newStr = newStr + t
//     }
// }
// console.log(newStr)

// // q2: Reverse the each word of the string
// let str1 = "Welcome to javascript"
// let spiltWord = str1.split(' ')
// let reversWord = []
// for (let i = 0; i <= spiltWord.length - 1; i++) {
//     let newStr = ''
//     for (let j = spiltWord[i].length - 1; j >= 0; j--) {
//         let st = spiltWord[i]
//         newStr = newStr + st[j]
//     }
//     reversWord.push(newStr)
// }
// console.log(reversWord)
// let newString = reversWord.join(' ')
// console.log(newString)

// // q3: Take a string and remive all the duplicate charcater from string
// function removeDuplicates(str) {
//     let newStr = ''
//     for (let st of str) {
//         if (newStr.indexOf(st) === -1) {
//             newStr = newStr + st
//         }
//     }
//     console.log(newStr)
//     return newStr
// }
// console.log(removeDuplicates("helllo"))

// // q4: How many moves are requird to make strin S to "chips"

// let chpis = "chips"
// let str3 = "chips"
// let moves = 0
// for(let i=0; i<=str3.length-1; i= i+5) {
//     if(str3.length % 5 !== 0) {
//         return moves;
//     }
//     for(let j=0; j<=str3.length -1; j++) {
//         if(str3[i+j] !== chpis[j]) {
//             moves++
//         }
//     }
// }
// console.log("moves",moves)

// // q5: Print continous character 
// // A
// // BC
// // CDE
// // DEFG
// // EFGHI
// // ......
// let n = 24
// for(let i=1; i<=n;i++) {
//     let row = ''
//     for(let j=1; j<=i; j++) {
//         let check = j+i-1
//         check = check > 26 ? check - 26 : check
//         row = row + String.fromCharCode(64 + check)
//     }
//     console.log(row)
// }

// // q6: Move ervery char with 2 postion from actual postion
// let moveString = `abccesjwgwtuyaelwihzzizmvqhxuhkfgunmyfnzkrwqappedofixgupsvzgjnvtpxkwxwwurtxvpndmzoskrdnyqvrldfkpqqlexfthizrxopfpzdlvtxmdtgpnkbgnjoeeyrdzxqhuahdfzvpwnlpwvcuavwuzjmuwnivikrmhdoffzcqmfjietygifqpdrycmneerdliqstrtueivndamzsamaivkvzpqrstlowcddgmagczvukmkhjwpivvdfcagbqtewsqawqxfhnnxxnznqgdyeuwrginrgktxqorcnfkzqzszhxwueifylrsaemzaztvplkukalgmqijpbeklxgvqbmyqydhrmzvbtfgghjlafillafuqeabnhzhfrppcfohzlevetdfgtoxxwxdezlcrhjjtecovivjgdudtvdvyiazgnximjkazuqyozdsbnqxngdziguvhmmsfzivoqsvlzqgpfbhwypjposnwvdxkqxkc`
// let move = 2
// let newMovedStr = ''
// for(let i=0;i<=moveString.length -1; i++) {
//     let position = moveString.charCodeAt(i)
//     if(moveString[i] === 'y') {
//       newMovedStr = newMovedStr + String.fromCharCode(96 + 1)
//     } else if(moveString[i] === 'z') {
//       newMovedStr = newMovedStr + String.fromCharCode(96 + move)
//     }
//      else {
//         newMovedStr = newMovedStr + String.fromCharCode(position +move)
//     }
// }
// // console.log("newMovedStr", newMovedStr)

// // q7: Find all the panagram substring of the actual string
// let actualString = 'abcdefghijklmnopqrstuvwxyzabcd'
// let panagramCount = 0;
// for(let i=0; i<actualString.length;i++) {
//    for(let j=i+1; j<=actualString.length -1; j++) {
//     const str = actualString.substring(i,j)
//     if(isPanagram(str)) {
//         console.log(str)
//         panagramCount++
//     }
// } 
// }
// console.log(panagramCount)
// function isPanagram(str) {
//     // console.log(str);
//     let alphabetSet = new Set()
//     for(let st of str.toLowerCase()) {
//         if(st >= 'a' && st <= 'z') {
//             alphabetSet.add(st)
//         }
//     }
//     // console.log("alphabetSet.size", alphabetSet.size)
//     return alphabetSet.size === 26
// } 

// q8: check a substring of string is distinct or not and retrun the maximum length distinct
let distStr = 'icpcprog'
let strsssssss = []
for(let i=0;i<distStr.length; i++) {
    for(let j=i+1;j<=distStr.length;j++) {
        const subStr = distStr.substring(i,j)
        if(checkdistnict(subStr)) { 
            strsssssss.push(subStr)
        }
    }
}
let longestStr = strsssssss.reduce((max, curr)=>
    curr.length > max.length ? curr : max, ''
)
console.log("longestStr", longestStr, longestStr.length)
function checkdistnict(str) {
    let newStr= ''
    for(let st of str) {
        if(newStr.indexOf(st) === -1) {
            newStr += st
        }
    }
    if(newStr === str && str.length ) {
        return true;
    } else {
        return false
    }
}

// q9: check a string is panagram or not 
// rule a : a string should be start with a
function checkPanagram(str, index=0) {
    if(index === str.length) return true;
     
    // first rule 
    if(index === 0 && str[index] != 'a') return false

    // second rule 
    if(str[index === 'a']) {
        return checkPanagram(str, index + 1) || 
        (index + 2 <= str.length && str[index + 1] === 'b' && str[index + 2] === 'b' && isValidString(str, index + 3));
    }

    //  Rule c: Each "bb" must be followed by 'a' or nothing
    if (str[index] === 'b' && index + 1 < str.length && str[index + 1] === 'b') {
        return isValidString(str, index + 2);
    }

    return false

} 
console.log(checkPanagram('abbaa'))

// q10: get all the armstrong number 1 to 160
function getArmstrong(m,n) {
    let result = ''
	for(let i=m; i<=n; i++) {
	   let countOfDigits = 0
	   let str = i.toString(); // 45
	   countOfDigits = str.length
	   let sumOfdigits = 0;
	   let num =i;
	   while(num>0) {
		let last = num%10
		sumOfdigits = sumOfdigits + last**countOfDigits
		 num= parseInt(num/10)
	   }
	   if(sumOfdigits === i) {
		result += sumOfdigits + " "
	   }
	}
	console.log(result)
}
getArmstrong(1,10)


let arr = [4,1,2,3,5]
console.log(arr.sort())


