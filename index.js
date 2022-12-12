const fs = require('fs');

const {calculate} = require('./functions/calculate')

const codeFile = fs.readFileSync("./code.txt", {encoding: "utf8"})

console.log(calculate(codeFile))