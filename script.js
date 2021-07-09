#!/usr/bin/env node
/* eslint-disable no-undef */
const keys = require('./src/keys.json')
const fse = require('fs-extra');
const srcDir = `./src/ENV/DEV`;
const destDir = `./src/ENV/PROD`;

console.log(keys)
console.log(keys.SAMPLE_1)
process.stdin.setEncoding('utf8')
                              
// To copy a folder or file  
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
  if (err) {                 
    console.error(err);      // add if you want to replace existing folder or file with same name
  } else {
    console.log("success!");
  }
});


// process.stdin.on('data', function (chunk) {
//   const input = chunk.trim().split(' ')

//   for (index in input) {
//     const n = input[index]

//     if (isNaN(n)) {
//       console.log(`${n} is not a number!`)
//     } else if (n < 1) {
//       console.log(`${n} is less than 1!`)
//     } else if (n > 100) {
//       console.log(`${n} is greater than 100!`)
//     } else {
//       console.log(`${n} is valid!`)
//     }
//   }

//   process.exit()
// })