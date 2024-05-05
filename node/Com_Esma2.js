/*common js module*/
// const myname = (a, b) => {
//     let c = a + b;
//     return c;
// }
// console.log(myname(5, 5));
// module.exports = myname;

/*ESMAScript module*/
export const myname = (a, b) => {
    let c = a + b;
    return c;
}
export const name = (c, d) => {
    let e = c - d;
    return e;
}
console.log(myname(5, 5));
console.log(name(15, 10));


