"use strict";
// creating a type in typescript
const user = {
    username: 'x86olioxx',
    email: 'abc@xyz.com',
    name: 'Olotu Praise',
    age: 19,
    website: 'http://www.js.education',
    active: true
};
const User = {
    company: "FlutterWave",
    position: "Developer"
};
const user1 = {
    username: 'x86olioxx',
    email: 'abc@xyz.com',
    name: 'Olotu Praise',
    country: 'Nigeria',
    age: 19,
    website: 'http://www.js.education',
    active: true
};
// Generics
function App(items) {
    return new Array().concat(items);
}
let numArray = App([1, 2, 3, 4]);
let strArray = App(['I', 'love', 'coding']);
console.log(numArray);
