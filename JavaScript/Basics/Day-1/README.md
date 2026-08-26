JavaScript Topic 1 — Variables & Scope
1. Variable kya hota hai?
Variable ek naam wala container hai jisme hum koi value store karte hain.

Example:
let name = "Abdullah";

Yahan:
let       → variable banane ka keyword
name      → variable ka naam
=         → value assign karna
"Abdullah" → value



2. JavaScript mein variables kaise banate hain?
JavaScript mein traditionally 3 keywords hain:
var
let
const
Lekin modern JavaScript mein mainly let aur const use karte hain.


3. let
let aisi variable ke liye use hota hai jiski value future mein change ho sakti hai.
let age = 21;
age = 22;
console.log(age);
Output:
22


4. const
Is variable ko dobara kisi doosri value se assign nahi karna.
Example:
const name = "Abdullah";


7. var kya hai?
var JavaScript ka purana way hai.
var name = "Abdullah";
name = "Ali";
console.log(name);



8. Block kya hota hai?
JavaScript mein { } ke andar ka code ek block ho sakta hai.
let block scope he global me e error deta he. var global scope he har jaghah se access hota he. var block scope follow nahi karta.
const bhi block scoped hai


Important rule 🧠
Ye rule yaad rakho:

Outer scope → Inner scope ko access kar sakta hai? ❌ Normally nahi.
Inner scope → Outer scope ko access kar sakta hai? ✅ Haan.



### Variables & Scope — Short Summary

1. **Variable:** Data/value store karne ke liye container hota hai.
2. **`let`:** Jab value future mein change ho sakti ho, `let` use karte hain.
3. **`const`:** Jab variable ko reassign nahi karna ho, `const` use karte hain.
4. **`var`:** Purana keyword hai; modern JavaScript mein generally `let` aur `const` prefer karte hain.
5. **Block Scope:** `let` aur `const` sirf apne `{ }` block ke andar accessible hote hain.
6. **Scope:** Inner scope outer variable ko access kar sakta hai, lekin outer scope inner variable ko normally access nahi kar sakta.
7. **Shadowing:** Inner block mein same naam ka variable banane se inner variable outer variable ko temporarily shadow karta hai.
8. **Golden Rule:** **Pehle `const` use karo; agar value change karni ho to `let` use karo.**
