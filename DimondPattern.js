function printPattern(n) {
    let star = 1;
    let space = parseInt(n/2)
    for(let i=1; i<=n;i++) {
        let row = '';
        for(let j=1; j<=space; j++) {
            row  += '  ';
        } 
        for(let k=1; k<=star;k++) {
            row += '*' + ' ';
        }
        console.log(row)
        if(i <= parseInt(n/2)) {
            star = star +2
            space = space -1
        } else {
            star = star -2
            space = space +1
        }
    }
}
 printPattern(9)