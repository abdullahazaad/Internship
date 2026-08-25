CSS Grid — Basic

1. display: grid
Grid activate karne ke liye:
.container {
    display: grid;
}
Isse container grid container ban jata hai.


2. grid-template-columns ⭐⭐⭐⭐⭐
Columns define karta hai.
Example:
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

Result:
┌───────┐ ┌───────┐ ┌───────┐
│   1   │ │   2   │ │   3   │
└───────┘ └───────┘ └───────┘
1fr 1fr 1fr = available space ko 3 equal parts mein divide karo.


3. gap
.container {
    display: grid;
    gap: 20px;
}
Items ke darmiyan spacing.


4. grid-template-rows ⭐⭐⭐⭐
Rows ki size define karta hai.
.container {
    display: grid;
    grid-template-rows: 100px 100px;
}



5. repeat() ⭐⭐⭐⭐⭐
Same value baar-baar likhne ki zarurat nahi.
Instead of:
grid-template-columns: 1fr 1fr 1fr;

likh sakte ho:
grid-template-columns: repeat(3, 1fr);
Meaning:
3 columns
har column = 1fr


6. grid-column
Agar Box 1 ko 2 columns ki jagah deni ho:
.box1 {
    grid-column: span 2;
}
Result:
┌───────────────┐ ┌───────┐
│     Box 1     │ │ Box 2 │
│   2 columns   │ └───────┘
└───────────────┘


justify-items
→ item ko cell ke andar horizontal position

align-items
→ item ko cell ke andar vertical position


justify-content
→ poori grid ko container mein horizontal position

align-content
→ poori grid ko container mein vertical position
