"use strict";
let names = ['Gerardo', 'Aguilar'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done');
    }, 2000);
});
promise.then(data => {
    data.split;
});
//# sourceMappingURL=app.js.map