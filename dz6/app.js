const a = {x: 1, z: 1}
const b = {x: 2, y: 1}
const c = {x: 2, y: 1, a: 2, z: 1}
const d = {x: 2, y: 1, a: 4, b: 3 }

//! Add objects function
const add = (...arr) => {
    return arr.reduce((acc, el) => {
        for (let key of Object.keys(el)) {
            !acc[key] ? acc[key] = el[key] : acc[key] += el[key]
        }
        return acc
    }, {})
}
console.log(`Add function:`);
console.log(add(a,b,a,b));

//! * Addition function (Intersection)
const intersect = (a,b) => {
    const firstObjectKeys = Object.keys(a);
    return firstObjectKeys.reduce((acc, key) => {
        a[key] === b[key] ? acc = {...acc, [key]: a[key]} : null 
        return acc;
    }, {});
}
console.log(`Intersection function:`);
console.log(intersect(c,d));