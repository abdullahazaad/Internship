// function name(){
//     console.log("abdullah mahmood");
// }
// name();
// name();
// name();


// function name2(name){
//     console.log("Hello " + name);
// };

// name2("Abdullah Mahmood")
// name2("Huzaifa Aziz");
// name2("Hello Ali");


// function sum(a, b){
//     console.log(a + b);
// };
// sum(10,20);


// function mul(a, b, c){
//     console.log(a * b * c);
// };
// mul(10, 10 , 10);


// function per(a, b ){
//     console.log((a/b) * 100)
// }
// per(1014, 1200);


// function add(a, b){
//     return a + b;
// };
// let result = add(100, 300);
// console.log(result);
// result = add(200, 400);
// console.log(result);


// function calculateTotal(price, quantity){
//     return price * quantity;
// };
// const total = calculateTotal(5000, 3);
// console.log(total);


// function isAdult(age){
//     if(age >= 18){
//         return true;
//     };
//     return false;
// };
// console.log(isAdult(12));


// const add = (a,b) => {
//     return a + b;
// };
// console.log(add(10,20));


// const add = (a, b) => a + b;
// console.log(add(100, 300));


// 🧩 Problem 1 — Greeting Function
// Ek regular function banao jiska naam greet ho.
// Function ek name parameter le.
// Function "Hello [name]" console mein print kare.
// Function ko "Abdullah" ke saath call karo.
// Expected output:
// Hello Abdullah

// function greet(name){
//     console.log("Hello " + name);
// };
// greet("Abdullah Mahmood");



// 🧩 Problem 2 — Addition Function
// Ek regular function banao jiska naam add ho.
// Do parameters lo: a aur b
// Dono numbers ko add karo
// Result ko return karo
// Function ko 10 aur 20 ke saath call karo
// Returned result ko console.log() karo
// Expected output:
// 30


// function add(a, b){
//     return a + b;
// };
// let result = add(10,20);
// console.log(result);



// 🧩 Problem 3 — Multiply Function
// Ek regular function banao jiska naam multiply ho.
// Do parameters lo: a aur b
// Dono numbers ko multiply karo
// Result ko return karo
// Function ko 8 aur 5 ke saath call karo
// Returned result ko console mein print karo
// Expected output:
// 40


// function multiply(a, b){
//     return a * b;
// };
// let result = multiply(8,5);
// console.log(result);



// 🧩 Problem 4 — Discount Calculator
// Ek regular function banao jiska naam calculateDiscount ho.
// Do parameters lo: price aur discount
// Discount amount calculate karo.
// Final price return karo.
// Function ko 1000 price aur 20 discount ke saath call karo.
// Result console mein print karo.
// Expected output:
// 800


// function calculateDiscount(price, discount){
//     let discountAmount =  price * discount / 100;
//     let finalPrice = price - discountAmount;
//     return finalPrice;
// };
// let result = calculateDiscount(1000, 20);
// console.log(result);



// 🧩 Problem 5 — Age Checker
// Ek regular function banao jiska naam isAdult ho.
// Ek parameter age lo.
// Agar age 18 ya usse zyada ho to true return karo.
// Agar age 18 se kam ho to false return karo.
// Function ko 21 ke saath call karo.
// Result ko console mein print karo.
// Expected output:
// true

// function isAdult(age){
//     if(age >= 18){
//         return true;
//     };
//     return false;
// };
// let result = (isAdult(21));
// console.log(result);



// 🧩 Problem 6 — Arrow Function
// Ab regular function nahi.
// Ek arrow function banao jiska naam square ho.
// Ek parameter number lo.
// Number ka square calculate karo.
// Result return karo.
// Function ko 5 ke saath call karo.
// Result console mein print karo.
// Expected output:
// 25


// const square = (number) => {
//     return number * number;
// };
// let result = square(5);
// console.log(result);

// or

// const square2 = number => number * number;
// let result2 = square2(5);
// console.log(result2); 


// 🧩 Problem 7 — Arrow Function + Real-world
// Ek arrow function banao jiska naam:
// calculateTotal
// Parameters:
// price
// quantity
// Function total price return kare.
// Example:
// price = 500
// quantity = 4
// Expected output:
// 2000


// const calculateTotal = (price, quantity) => {
//     return price * quantity;
// };
// let result = calculateTotal(500, 4);
// console.log(result);


// 🧩 Problem 8 — Regular vs Arrow
// Ab dono ko compare karna hai.
// Part 1
// Ek regular function subtract banao jo:
// a aur b parameters le
// a - b return kare
// 20 aur 8 ke saath call karo
// Part 2
// Ek arrow function divide banao jo:
// a aur b parameters le
// a / b return kare
// 20 aur 4 ke saath call karo
// Dono results console mein print karo.
// Expected:
// 12
// 5


// function subtract(a,b){
//     return a - b;
// };
// let result = subtract(20,8);
// console.log(result);

// const divide = (a , b) =>{
//     return a / b;
// };
// let result2 = divide(20,4);
// console.log(result2);


// 🧩 Problem 9 — Arrow Function + Condition 🔥
// Ek arrow function banao jiska naam:
// checkPassword
// Function ek parameter password le.
// Rules:
// Agar password ki length 8 ya usse zyada ho → true return karo.
// Agar length 8 se kam ho → false return karo.
// Function ko "Abdullah123" ke saath call karo aur result console mein print karo.
// Expected output:
// true

// const checkPassword = (password) => {
//     if(password.length >= 8){
//         return true;
//     };
//     return false;
// };
// let result = checkPassword("abdullah123");
// console.log(result);



// 🧩 Problem 10 — Final Function Challenge 🔥
// Ab real-world type problem:
// Ek arrow function banao:
// calculateFinalPrice
// Iske 2 parameters hon:
// price
// discount
// Rules:
// Agar discount 0 se zyada ho:
// final price = price - discount amount
// Agar discount 0 ho:
// original price return karo
// Function ko:
// price = 2000
// discount = 25
// ke saath call karo.
// Expected output
// 1500


// const calculateFinalPrice = (price, discount) => {
//     let discountAmount =  price * discount / 100;
//     let finalPrice = price - discountAmount;
    
//     if(discount > 0){
//         return finalPrice;
//     }
// }
// let result = calculateFinalPrice(2000, 25);
// console.log(result);


