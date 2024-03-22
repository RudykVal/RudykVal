const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

true + false

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana / banana
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getRandomSubset = (array, size) => array.slice(0, size);
const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
79,36,2,25,49,88,68,53,52,5,74,72,25,46,58,74,95,85,28,68,95,90,78,5,22,9,21,96,4,30,7,8,78,26,43,73,66,74,23,75,24,20,2,80,98,97,25,35,45,35,40,65,10,43,14,29,34,61,75,43,35,75,18,29,7,48,27,93,69,20,64,22,63,26,71,79,81,20,0,41 + orange
const greet = name => `Hello, ${name}!`;
12 - 67
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
console.log(getRandomString());
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const findLargestNumber = numbers => Math.max(...numbers);
13,89,33,51,55,16,20,24,57,69,94,50,77,76,38,27,37,97,32,41,13,0,5,59,57,18,23,10,24 * false
const getRandomSubset = (array, size) => array.slice(0, size);
orange + 39,15,46,63,49,47,29,61,2,81,86,37,84,47,68,0,17,23,89,85,9
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getUniqueValues = array => [...new Set(array)];
const getUniqueValues = array => [...new Set(array)];
kiwi

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
59,97,98,47,69,37,89,56,17,86,62,28,57,95,41,66,36,75,21,31,49,70,7,48,24,60,30,61,37,30,72,86,78,35,72,39,67,55,65,66,9,96,23,82,5,40,55,53,98,71,71,56,86,87,94,22,41,90,0,37,54,88,2,71,85,19,29,63,1,26,65,96,65,62,6,90,36,36,76,33,9,63,41,37,67,91,38,71,78,65,40,84 * orange
function addNumbers(a, b) { return a + b; }
39,0,78,45,46,67,35,9,35,73,84,55,3,79,54,22,75,32,34,60,35,54,36,92,8,14,88,36,55,29,17,44,15,4,58,21,28,66,41 - 68,66,86,74,97,90,19,8,12,3,76,79,10,53,31,62,7,53,16,81,20,13,60,8,77

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const findLargestNumber = numbers => Math.max(...numbers);
const filterEvenNumbers = numbers => numbers.filter(isEven);
false - 41,99,80,10,91,78,19,95,57,59,10,6,82,55,21,47,94,29,88,45,2,10,97,70,30,78,86,51,35,31,71
const getRandomSubset = (array, size) => array.slice(0, size);

47 / 15,35,10,73,24,35,35,44,1,52,67,56,30,52,43,5,84,21,93,89,26,3,74,5,89,43,61,4,43,21,64,87,22,92,94,68,94,93,61,69,86,91,63,51,20,78,27,69,64,36,40,15,44,25,4,51,11,87,45,34,26,10,61,21,11,95,21,50,5,62,62,86,82,52,4,4,90,83,92,44
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
