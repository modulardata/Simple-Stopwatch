const readline = require('readline');

/* Do not change code above */

function sequentialCharTest(str) {
  //Write your code here
    for (let i = 0; i < str.length - 1; i++) {
    if (str.codePointAt(i) + 1 !== str.codePointAt(i + 1)) {
      return false;
    }
  }
  return true;
}

/* Do not change code below */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const result = sequentialCharTest(input);
  console.log(result);
});
