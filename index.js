// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const testCases = [1, 500000, 1000000, 1000010];
let arr = new Array(1000000).fill(0).map((v, i) => i + 1);
let results = [];


const createResult =  {
    testMethod: 'name',
    getAverage: () => {
      return this.testMethod;
    }
  }

const calculateTime = (func, name) => {
  let result = { testMethod: name };
  testCases.forEach((v, i) => {
    let startTime = performance.now();
    let resp = func(arr, v);
    result[`Case ${i + 1}`] =  Number(performance.now() - startTime).toFixed(4);
  })
  results.push(result);
}

// Array.some
calculateTime((a, val ) => arr.some(v => {
  return v === val
}), 'Array.some');

// Array.includes
calculateTime((a, val ) =>  a.includes(val), 'Array.includes');

// Array.find
calculateTime((a, val) => !!a.find(v => val), 'Array.find');

// Array.indexOf
calculateTime((a, val) => a.indexOf(val) >= 0, 'Array.indexOf');


// Native for loop
calculateTime((a, val) => {
  let isPresent = false;
  for(let i = 0; i < a.length; i++){
    if(a[i] === val){
      isPresent = true;
      break;
    }
  }
  return isPresent;
}, 'Native for loop');

// for of loop
calculateTime((a, val) => {
  let isPresent = false;
  for(const elm of a){
    if(elm === val){
      isPresent = true;
      break;
    }
  }
  return isPresent;
}, 'For of loop');


// For in loop
calculateTime((a, val) => {
  let isPresent = false;
  for(const i in a){
    if(a[i] === val){
      isPresent = true;
      break;
    }
  }
  return isPresent;
}, 'For in loop');


// print results in console
// console.table(results);
let method = createResult.getAverage.bind(createResult);
console.log(createResult.getAverage.bind(method)());


