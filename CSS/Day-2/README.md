Flexbox — display: flex
Flexbox activate karne ke liye:
.container {
    display: flex;
}
jab ham flex apply karte he to by default cheze row me ajat he.


Important concept 🔥
Flexbox mein 2 axes hoti hain:
Main Axis
──────────────→
Cross Axis
↓


Flexbox — flex-direction
flex-direction decide karta hai ke flex items kis direction mein arrange honge.
4 values:
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;


Flexbox — justify-content 
Ye sabse important Flexbox properties mein se ek hai.
justify-content main axis par items ki positioning/spacing control karta hai.
justify-content main axix yane horizenally cheezo ko manage karta he.
values:
flex-start
center
flex-end
space-between
space-around
space-evenly


Flexbox — align-items 
align-items cross axis par items ki alignment control karta hai.


Flexbox — gap 
gap flex items ke darmiyan spacing control karta hai.


Flexbox — flex-wrap 
flex-wrap decide karta hai ke jab items ke liye ek row mein space kam ho, to woh next line mein jayen ya nahi.


Flexbox — align-content
align-content multiple flex lines/rows ko cross-axis par align karta hai.
⚠️ Important: Ye tabhi visible hota hai jab:
flex-wrap: wrap;
Main values
align-content: flex-start;
align-content: center;
align-content: flex-end;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
align-content: stretch;


align-items
→ items ko cross-axis par align karta hai

align-content
→ multiple flex rows/lines ko cross-axis par align karta hai



Flexbox — align-self 
align-self kisi ek specific flex item ki alignment change karta hai, jabke align-items sab items ko control karta hai.
Values
align-self: auto;
align-self: flex-start;
align-self: center;
align-self: flex-end;
align-self: stretch;



Flexbox — order
order flex items ki visual ordering change karta hai.
Important rule 🔥
Jiski order value chhoti hogi, woh pehle aayega.


Flexbox — flex-grow 
flex-grow decide karta hai ke available extra space mein koi flex item kitna grow karega.


Flexbox — flex-shrink
flex-shrink decide karta hai ke space kam hone par flex item kitna shrink karega.








