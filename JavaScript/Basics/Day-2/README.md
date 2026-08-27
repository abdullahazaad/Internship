1. Function kya hota hai?
Simple words mein:
Function code ka ek reusable block hota hai jo ek specific kaam karta hai.


2. Function ki basic structure
function greet() {
    console.log("Hello Abdullah");
}
greet();

Isko parts mein dekho:
function     → JavaScript keyword
greet        → function ka naam
()           → parameters ke liye
{}           → function ka code
greet()      → function call


3. Function ko baar baar use kar sakte hain
function welcome() {
    console.log("Welcome to our website");
}
welcome();
welcome();
welcome();
Function ka main benefit:
Reusability


4. Function ko data dena — Parameters
Ab maan lo function ko har baar different naam ke saath use karna hai.

function greet(name) {
    console.log("Hello " + name);
}
Ab:
greet("Abdullah");
greet("Ali");
greet("Ahmed");

function greet(name)
mein name ko parameter kehte hain.

Aur:
greet("Abdullah");
mein "Abdullah" ko argument kehte hain.

Simple difference:
Parameter = function banate waqt placeholder
Argument = function call karte waqt actual value


5. Multiple Parameters
Function ko multiple values bhi de sakte ho:
function add(a, b) {
    console.log(a + b);
}
add(10, 20);


6. return — Bohat Important 🔥
Ab tak hum console.log() use kar rahe thay.
Lekin real-world functions mein aksar hume result wapas chahiye hota hai.
Example:
function add(a, b) {
    return a + b;
}
Ab:
const result = add(10, 20);
console.log(result);
Output:
30


7. console.log() vs return
Ye difference bohat important hai.
console.log()
Sirf console mein value show karta hai:
function add(a, b) {
    console.log(a + b);
}

return
Value ko function ke bahar use karne deta hai:
function add(a, b) {
    return a + b;
}
const result = add(10, 20);
console.log(result);

Ab result ko further calculations mein bhi use kar sakte ho:
const result = add(10, 20);
const finalResult = result * 2;
console.log(finalResult);


9. Function with if
Functions ke andar conditions bhi use kar sakte ho:
function isAdult(age) {
    if (age >= 18) {
        return true;
    }

    return false;
}
console.log(isAdult(21));



10. Regular Function
Ab jo syntax hum use kar rahe hain:
function add(a, b) {
    return a + b;
}
Isko regular function ya function declaration kehte hain.
Ye JavaScript ka traditional aur perfectly valid function syntax hai.


11. Arrow Function
Modern JavaScript mein function likhne ka ek shorter way hai:
const add = (a, b) => {
    return a + b;
};


12. Arrow Function ko break karke samjho
const add = (a, b) => {
    return a + b;
};
Parts:
const
 ↓
add
 ↓
(a, b)
 ↓
=>
 ↓
{ return a + b; }

add → function variable/name
(a, b) → parameters
=> → arrow syntax
{ } → function body
return → result


13. Arrow Function ka short version
Agar function sirf ek expression return karta hai:
const add = (a, b) => a + b;



14. Ek parameter ho to
Arrow function mein ek parameter ho to parentheses optional hain:
const square = number => number * number;
Ye bhi valid hai.
Lekin beginners ke liye ye bhi bilkul fine hai:
const square = (number) => number * number;


15. React mein Arrow Functions itni common kyun hain?
Ab tumhare original question ka important part.
React code mein tum frequently dekho ge:
const handleClick = () => {
    console.log("Button clicked");
};

Lekin ek important clarification:
React arrow functions ko mandatory nahi banata.
Tum regular function bhi use kar sakte ho:


Arrow functions popular hain because:
syntax concise hota hai
callbacks mein convenient hain
event handlers mein commonly use hoti hain
modern JavaScript style hai
this ka behavior regular functions se different hota hai



Golden Rule:
Function = ek reusable kaam
Parameter = function ko milne wali input ka naam
Argument = actual input
return = result function ke bahar bhejna
Arrow function = function likhne ka modern/short syntax



