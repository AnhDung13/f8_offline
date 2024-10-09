// Javascript Module
// CommonJS --> NodeJS
// ES6 Module

const { a, b } = require("../module/module1");
console.log(a);
console.log(b);

import so50, { a as a1, b, getMessage, product } from "../module/module2.js";
console.log(a1, b);
getMessage();
console.log(product);
