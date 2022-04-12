const a = {x: 1, z: 1}
const b = {x: 2, y: 1}

const x = {x: 2, y:1, b: 8, c: 6}
const y = {x: 2, a: 4, y: 1, b: 8}
const z = {x: 2, y: 1, b: 4}

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
console.log(intersect(x,y));


function intersectKeys(...rest) {
    let first = rest[0];
    rest.sort((a,b) => Object.keys(b).length - Object.keys(a).length)
    rest = rest.splice(1)
    let result = {}
    rest.forEach(el => {
       for (let [key, val] of Object.entries(el)) {
           if (key in first && first[key] == val) {
               result[key] = first[key]
           } else {
               delete(result[key])
           }
       }
    })
    console.log(result);
}

console.log(`Intersection infinity function:`);
intersectKeys(x,y,z)