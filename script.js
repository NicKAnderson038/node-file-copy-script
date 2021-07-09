#!/usr/bin/env node
/* eslint-disable no-undef */
const keys = require("./src/keys.json");
const fse = require("fs-extra");
const SRC_DIR = `./src/ENV/DEV/`;
const DEST_DIR = `./src/ENV/PROD/`;

console.log(keys);
console.log(Object.keys(keys));
process.stdin.setEncoding("utf8");

const runCopy = (srcDir, destDir) => {
  fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
  });
};

Object.keys(keys).forEach(val => {
    if(keys[`${val}`] === 'PROD') {
        runCopy(SRC_DIR + val, DEST_DIR + val)
    }
})

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
