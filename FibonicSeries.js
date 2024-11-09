// function getFibonicSeries(n, a=0, b=1, fab = []) {
//     if(a>=n) {
//         return fab
//     }
//     let next = a+b
//     fab.push(a)
//     return getFibonicSeries(n, b, next, fab)
// }
// console.log(getFibonicSeries(10))

function getFibonicSeries2(n) {
    let fab = [];
    let a =0, b=1;
    while(a<=n) {
        fab.push(a)
        let next = a+b
        a=b
        b =next
    }
    console.log(fab.join(' '))
}
getFibonicSeries2(1)