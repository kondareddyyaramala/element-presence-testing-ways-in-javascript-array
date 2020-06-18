
const testCases = [1, 500000, 1000000, 1000010];
let array = new Array(1000000).fill(0).map((_v, i) => i + 1);

let results = [];

const calculateTime = (func, name) => {
  let result = { testMethod: name };
  let totalTime = 0;
  testCases.forEach((v, i) => {
    let startTime = performance.now();
    let resp = func(array, v);
    const respTime = Number((performance.now() - startTime).toFixed(4));
    result[`Case ${i + 1}`] = respTime;
    totalTime += +respTime;
  })
  result['Average'] = Number((totalTime / 4).toFixed(4));
  results.push(result);
}

// Array.some
calculateTime((a, val) => a.some(v => {
  return v === val
}), 'Array.some');

// Array.includes
calculateTime((a, val) => a.includes(val), 'Array.includes');

// Array.find
calculateTime((a, val) => !!a.find(v => v === val), 'Array.find');

// Array.findIndex
calculateTime((a, val) => a.findIndex(v => v === val) >= 0, 'Array.findIndex');


// Array.indexOf
calculateTime((a, val) => a.indexOf(val) >= 0, 'Array.indexOf');


// Native for loop
calculateTime((a, val) => {
  let isPresent = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === val) {
      isPresent = true;
      break;
    }
  }
  return isPresent;
}, 'Native for loop');

// for...of loop
calculateTime((a, val) => {
  let isPresent = false;
  for (const elm of a) {
    if (elm === val) {
      isPresent = true;
      break;
    }
  }
  return isPresent;
}, 'For...of loop');


// print results in console
console.table(results);



