const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const getRandomSubset = (array, size) => array.slice(0, size);

false / apple
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const squareRoot = num => Math.sqrt(num);

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

51,22,91,9,5,79,1,39,67,14,18,84,30,18,34,95,80,0,28,18,57,23,7,46,60 * true

const greet = name => `Hello, ${name}!`;
41 + 14
const removeDuplicates = array => Array.from(new Set(array));
const getUniqueValues = array => [...new Set(array)];
kiwi / 69,30,63,49,96,34,73,4,47,65,87,89,32,91,93,73,24,75,42,34,15
const isEven = num => num % 2 === 0;
console.log(getRandomString());
let array = getRandomArray(); array.forEach(item => console.log(item));
const isEven = num => num % 2 === 0;
95,43,83,98,68,77,25,70,63,39,27,30,69,26,41,24,72,23,28,84,56,18,54,97,16,57 - orange
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
orange - false
const capitalizeString = str => str.toUpperCase();
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
grape + 4,4,52,90,63,8,78,28,53,53,3,74,66,8,90,5,7,65,11,22,41,89,13,1,39,26,49,73,10,80,41,15,77,22
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const formatDate = date => new Date(date).toLocaleDateString();
apple

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
kiwi

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
true * 25
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

77 * orange
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
orange

const removeDuplicates = array => Array.from(new Set(array));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const sum = (a, b) => a + b;
const reverseWords = str => str.split(" ").reverse().join(" ");
const reverseString = str => str.split("").reverse().join("");

