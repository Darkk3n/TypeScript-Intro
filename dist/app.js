"use strict";
// let names: Array<string> = ['Gerardo', 'Aguilar']
// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve('this is done');
//     }, 2000)
// });
// promise.then(data => {
//     data.split
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = (merge({ name: 'Gerardo' }, { age: 32 }));
console.log(mergedObj.age);
console.log(mergedObj.name);
console.log(mergedObj);
//# sourceMappingURL=app.js.map