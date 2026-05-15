// q1
var globalVar = "I am a var";
let globalLet = "I am a let";
const globalConst = "I am a const";
console.log(globalVar, globalLet, globalConst);

// q2
function testFunctionScope() {
    var funcVar = "Func Var";
    let funcLet = "Func Let";
    const funcConst = "Func Const";
}
testFunctionScope();
try { console.log(funcVar); } catch(e) { console.log("funcVar: " + e.message); }
try { console.log(funcLet); } catch(e) { console.log("funcLet: " + e.message); }
try { console.log(funcConst); } catch(e) { console.log("funcConst: " + e.message); }

// q3
if (true) {
    var blockVar = "Block Var";
    let blockLet = "Block Let";
    const blockConst = "Block Const";
}
console.log(blockVar); 
try { console.log(blockLet); } catch(e) { console.log("blockLet: " + e.message); }
try { console.log(blockConst); } catch(e) { console.log("blockConst: " + e.message); }

// q4
console.log(hoistedVar); 
var hoistedVar = "Hello!";

// q5
try { console.log(hoistedLet); } catch(e) { console.log("hoistedLet: " + e.message); }
let hoistedLet = "Hi let";
try { console.log(hoistedConst); } catch(e) { console.log("hoistedConst: " + e.message); }
const hoistedConst = "Hi const";

// q6
var testRedeclare = 1; var testRedeclare = 2; 

// q7
var assignVar = 10; assignVar = 20;
let assignLet = 10; assignLet = 20;
const assignConst = 10;
try { assignConst = 20; } catch(e) { console.log("assignConst: " + e.message); }

// q8
{
    try { console.log(tdzLet); } catch(e) { console.log("tdzLet TDZ: " + e.message); }
    let tdzLet = "Safe let";
}

// q9
var legacyConfig = { old: true }; 
for (let i = 0; i < 3; i++) { }
const MAX_LIMIT = 100;

// q10
const firstName = "John", lastName = "Doe";
console.log(`${firstName} ${lastName}`);

// q11
const address = `123 Innovation Way
Tech City, CA 94016`;
console.log(address);

// q12
const numA = 15, numB = 25;
console.log(`The sum is ${numA + numB}.`);

// q13
function getProduct(x, y) { return x * y; }
console.log(`Product: ${getProduct(4, 5)}`);

// q14
function simpleTag(strings, ...values) { console.log(strings, values); return "Tagged"; }
simpleTag`Hello ${firstName}!`;

// q15
function uppercaseTag(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "").toUpperCase();
}
console.log(uppercaseTag`hello ${firstName}`);

// q16
const currentHour = 14;
console.log(`Good ${currentHour < 12 ? "morning" : "afternoon"}!`);

// q17
const shoppingList = ["Apples", "Milk"];
console.log(`<ul>\n${shoppingList.map(item => `  <li>${item}</li>`).join('\n')}\n</ul>`);

// q18
console.log(`Use the \` character.`);

// q19
const tableData = [{ id: 1, name: "Item A" }];
console.log(`<table>${tableData.map(r => `<tr><td>${r.id}</td><td>${r.name}</td></tr>`).join('')}</table>`);

// q20
const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// q21
const checkNumber = 7;
console.log(checkNumber % 2 === 0 ? "Even" : "Odd");

// q22
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade);

// q23
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in");

// q24
const isMember = true, purchaseAmount = 120;
const discount = (isMember && purchaseAmount > 100) ? (purchaseAmount * 0.10) : 0;
console.log(discount);

// q25
function maxValue(a, b) { return a > b ? a : b; }
console.log(maxValue(15, 27));

// q26
function greetUser(name) { return (name && name.trim()) ? `Hello, ${name}!` : "Hello, guest!"; }
console.log(greetUser(""), greetUser("Alice"));

// q27
const mixedNumbers = [1, 2, 3, 4];
console.log(mixedNumbers.map(num => num % 2 === 0 ? num * 2 : num * 3));

// q28
const wordsArr = ["hi", "hello", "js", "code"];
console.log(wordsArr.filter(word => word.length > 3));

// q29
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(originalArray === copiedArray);

// q30
const array1 = ['a'], array2 = ['b'];
console.log([...array1, ...array2]);

// q31
const initialNumbers = [2, 3, 4];
console.log([1, ...initialNumbers, 5]);

// q32
const originalObject = { name: "John" };
const copiedObject = { ...originalObject };
console.log(originalObject === copiedObject);

// q33
const object1 = { id: 1, color: "blue" }, object2 = { color: "red" };
console.log({ ...object1, ...object2 });

// q34
const user = { name: "Bob", email: "bob@old.com" };
console.log({ ...user, email: "bob@new.com", address: "123 Main St" });

// q35
function sumThree(a, b, c) { return a + b + c; }
console.log(sumThree(...[10, 20, 30]));

// q36
function combineArrays(...arrays) { return [].concat(...arrays.map(arr => [...arr])); }
console.log(combineArrays([1, 2], [3, 4]));

// q37
function multiply(factor, ...numbers) { return numbers.map(num => num * factor); }
console.log(multiply(2, 1, 2, 3));

// q38
const nestedArray = [[1, 2]];
const shallowCopy = [...nestedArray];
shallowCopy[0][0] = 99;
console.log(nestedArray[0][0]);

// q39
function sumAll(...numbers) { return numbers.reduce((acc, curr) => acc + curr, 0); }
console.log(sumAll(1, 2, 3, 4));

// q40
function averageAll(...numbers) { return numbers.length ? sumAll(...numbers) / numbers.length : 0; }
console.log(averageAll(2, 4, 6, 8));

// q41
const fiveNumbers = [10, 20, 30, 40, 50];
const [first, ...rest] = fiveNumbers;
console.log(first, rest);

// q42
const colors = ["red", "green", "blue", "yellow", "purple"];
const [, , ...remainingColors] = colors;
console.log(remainingColors);

// q43
const personObj = { name: "Alice", age: 28, email: "alice@test.com", address: "123 St" };
const { name: pName, email: pEmail, ...restOfP } = personObj;
console.log(pName, pEmail, restOfP);

// q44
const studentObj = { id: 101, name: "Bob", grades: [90], info: { age: 20, major: "CS" } };
const { id: sId, name: sName, info: { major: sMajor }, ...restOfS } = studentObj;
console.log(sId, sName, sMajor, restOfS);

// q45
function filterEven(...args) { return args.filter(num => num % 2 === 0); }
console.log(filterEven(1, 2, 3, 4, 5, 6));

// q46
function combineAndSort(...arrays) { return [].concat(...arrays).sort((a, b) => a - b); }
console.log(combineAndSort([3, 1], [5, 4]));

// q47
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit, secondFruit, thirdFruit);

// q48
const colorsList = ["red", "green", "blue", "yellow"];
const [primaryColor, , tertiaryColor] = colorsList;
console.log(primaryColor, tertiaryColor);

// q49
const numbersList = [1, 2, 3, 4, 5];
const [firstNum, ...remainingNums] = numbersList;
console.log(firstNum, remainingNums);

// q50
const personSimple = { name: "Charlie", age: 32, city: "NY" };
const { name: simpleName, age: simpleAge, city: simpleCity } = personSimple;
console.log(simpleName, simpleAge, simpleCity);

// q51
const car = { make: "Toyota", model: "Corolla", year: 2022 };
const { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake, carModel, carYear);

// q52
const settingsObj = { theme: "dark" };
const { theme, language = "English" } = settingsObj;
console.log(theme, language);

// q53
const nestedArray2 = [[1, 2], [3, 4], [5, 6]];
const [[a], [b], [c]] = nestedArray2;
console.log(a, b, c);

// q54
const profile = { username: "dev123", details: { email: "dev@test.com", address: "456 Side St" } };
const { username, details: { email: profileEmail, address: profileAddress } } = profile;
console.log(username, profileEmail, profileAddress);

// q55
const mixedData = { id: 55, info: [{ name: "Alice" }, { age: 25 }] };
const { id: dataId, info: [{ name: mixName }, { age: mixAge }] } = mixedData;
console.log(dataId, mixName, mixAge);

// q56
function printCoordinates([x, y]) { console.log(`X: ${x}, Y: ${y}`); }
printCoordinates([10, 20]);

// q57
function displayUser({ name: destructureName, age: destructureAge }) { console.log(`User: ${destructureName}, Age: ${destructureAge}`); }
displayUser({ name: "Emma", age: 24 });

// q58
const book = { title: "The Hobbit", author: "Tolkien", year: 1937 };
console.log(Object.keys(book));

// q59
const studentCountObj = { name: "David", age: 16, grade: "10th", school: "High School" };
console.log(Object.keys(studentCountObj).length);

// q60
const targetProduct = { name: "Laptop", price: 999, category: "Electronics" };
Object.keys(targetProduct).forEach(k => console.log(`${k}: ${targetProduct[k]}`));

// q61
const movie = { title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" };
console.log(Object.values(movie));

// q62
const scores = { math: 90, science: 85, english: 88 };
console.log(Object.values(scores).reduce((acc, s) => acc + s, 0));

// q63
const userObj = { username: "user1", email: "user1@test.com", location: "UK" };
Object.values(userObj).forEach(val => console.log(val));

// q64
const carObj = { make: "Ford", model: "Mustang", year: 1969 };
console.log(Object.entries(carObj));

// q65
const person3 = { firstName: "Jane", lastName: "Smith", age: 40 };
console.log(Object.entries(person3));

// q66
const appSettings = { theme: "light", notifications: true, privacy: "high" };
Object.entries(appSettings).forEach(([k, v]) => console.log(`${k} -> ${v}`));

// q67
const inventory = { apples: 5, bananas: 12, oranges: 8, grapes: 15 };
console.log(Object.keys(inventory).filter(k => inventory[k] > 10));

// q68
const temperatures = { morning: 20, afternoon: 25, evening: 18 };
console.log(Object.fromEntries(Object.entries(temperatures).map(([k, v]) => [k, (v * 9/5) + 32])));

// q69
const roles = { admin: "management", editor: "content", viewer: "guest" };
console.log(Object.fromEntries(Object.entries(roles).map(([k, v]) => [v, k])));

// q70
const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(arr, filterFn, mapFn) { return arr.filter(filterFn).map(mapFn); }
console.log(filterAndMap(sampleNumbers, n => n % 2 !== 0, n => n * n));

// q71
const wordsListArray = ["apple", "banana", "cherry", "date"];
function sortAndReduce(arr, sortFn, reduceFn) { return arr.sort(sortFn).reduce(reduceFn); }
console.log(sortAndReduce(wordsListArray, (a, b) => a.localeCompare(b), (acc, w) => acc + w));

// q72
function greet(name, callback) { callback(`Hello, ${name}!`); }
function printGreeting(msg) { console.log(msg); }
greet("Sophia", printGreeting);

// q73
function fetchData(callback) { setTimeout(() => callback({ data: "Success" }), 10); }
fetchData(d => console.log(d));

// q74
const add = (a, b) => a + b;
console.log(add(3, 5));

// q75
const countingArray = [1, 2, 3, 4, 5];
console.log(countingArray.map(n => n * n));

// q76
function outer() { const x = "Scope Value"; function inner() { console.log(x); } inner(); }
outer();

// q77
function createCounter() { let count = 0; return () => { count++; console.log(count); }; }
const counterA = createCounter(); const counterB = createCounter();
counterA(); counterA(); counterB();

// q78
function greetUserWithDefault(name, message = "Hello") { console.log(`${message}, ${name}!`); }
greetUserWithDefault("Noah");

// q79
function calculateArea(width = 10, height = 5) { return width * height; }
console.log(calculateArea(), calculateArea(20, 10));