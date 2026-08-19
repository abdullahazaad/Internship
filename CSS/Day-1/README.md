Basic structure:
selector {
    property: value;
}
Example:
h1{
    color: blue;
    font-size: 40px;
}
Explanition:
h1              → Selector
color            → Property
blue             → Value
font-size        → Property
40px             → Value


css decleration:
color: blue


Important Terminology:
selector
   ↓
h1
   ↓
declaration block
{
    color: blue;
}
   ↓
property + value


comments in css:
/*This is a multi line commment 
in css */
Example:
/* Main heading styling */
h1 {
    color: blue;
    font-size: 40px;
}



CSS add karne ke 3 methods:
1: Inline CSS
<h1 style="color: blue;">Abdullah Mahmood</h1>

2: Internal CSS
<head>

    <style>
        h1 {
            color: blue;
        }

        p {
            color: gray;
        }
    </style>

</head>

3: External CSS
is ke leye separate file banaye
index.html aur saat me style.css
aur head me title ke neche e link add kare 
<link rel="stylesheet" href="style.css">




Selectors:
1: Universal Selector
page ke all element pe apply hoga.
syntax: 
* {
    property: value;
}
example:
* {
    margin: 0;
    padding: 0;
}
real world me css reset me use hota he.
* {
    box-sizing: border-box;
}

2: Element Selector
is ko type selector be kehte he.
e directly html ke tag name ko target karte he.
is ka effect global hota he.
p {
    color: blue;
}
is se page ke saare p element select hoge.


3: Class selector
kese be html element ko class attribute ke basis par select karte he.
syntax:
.card {
    padding: 20px;
}

4: Id selector 
unique element identify karne ke leye used hote he.
id unique hone chaye
<div id="hero">
#hero{
   background-color: black; 
}


differnce b/t class and id 
class reusebility ke leye used hota he
id uniquness ke leye


real world used of id
<nav>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<href="#projects">Projects</a>
</nav>
<section id="about">
.....
</section>
<section id="skills">
.....
</section>
<section id="projects">
.....
</section>

ID selector ki specificity class selector se higher hoti hai.


5: Grouping Selector
Jab multiple selectors ko same CSS rules deni hon, to unko comma , se group karte hain.
h1, h2, p {
    color: blue;
}


Different Selectors bhi Group Kar Sakte Ho
.hero-title, .section-title, #main-heading {
    font-weight: 700;
}

Grouping vs Descendant
Grouping
.card, .hero, .footer {
    padding: 20px;
}

Descendant
.card p {
    color: gray;
}


6: Descendant Selector
Kisi parent element ke andar maujood kisi specific element ko select karna.
syntax:
parent child {
    property: value;
}
example:
.card p {
    color: gray;
}

7: child selector
Child selector kisi element ke direct child ko select karta hai.
syntax
parent > child {
    property: value;
}


8: Adjacent Sibling Selector +
+ ka matlab:
Kisi element ke immediately next sibling ko select karo.
syntax: 
h2 + p {
    color: blue;
}


9: General Sibling Selector ~
Kisi element ke baad aane wale same parent ke tamam matching siblings ko select karo.
syntax:
h2 ~ p {
    color: blue;
}


<!-- 10: Attribute Exists [attribute]
<input type="text">
<input type="email">
<input type="password">
<input type="text" disabled>

[disabled] {
    opacity: 0.5;
} -->


<!-- Specific Attribute Value [attribute="value"]
<input type="text">
<input type="email">
<input type="password">

input[type="email"] {
    border: 2px solid blue;
} -->

<!-- Multiple Attribute Conditions
input[type="text"][required] {
    border: 2px solid red;
} -->








CSS Colors 
SS mein directly color ka naam use kar sakte ho:
h1 {
    color: red;
}


HEX Colors
HEX color # ke saath likha jata hai:
h1 {
    color: #ff0000;
}


RGB & RGBA

RGB ka matlab:
Red
Green
Blue
syntax:
color: rgb(255, 0, 0);

RGBA
RGBA mein A = Alpha, yani transparency.
color: rgba(255, 0, 0, 0.5);
0   → completely transparent
1   → completely visible
0.5 → 50% transparent


HSL & HSLA

HSL ka matlab:
H → Hue
S → Saturation
L → Lightness


HSLA ka matlab:
HSLA mein A = Alpha/transparency.
background-color: hsla(220, 80%, 50%, 0.5);


opacity & currentColor
opacity:
opacity poore element ki transparency control karta hai.
.card {
    opacity: 0.5;
}
range:
0   → completely transparent
0.5 → 50% visible
1   → completely visible

currentColor
currentColor element ke current color ko reuse karta hai.
.card {
    color: blue;
    border
}


Color Contrast
Color contrast ka matlab hai foreground aur background colors ke darmiyan enough difference hona, taake text easily readable ho.

Poor Contrast
body {
    background-color: #ffffff;
    color: #eeeeee;
}

Good Contrast
body {
    background-color: #0a101e;
    color: #ffffff;
}






Font

Topic 1 — font-family
font-family text ka font/typeface set karta hai.
body {
    font-family: Arial, sans-serif;
}

Topic 2 — font-size
font-size text ka size control karta hai.
h1 {
    font-size: 40px;
}

Common units
px → fixed size
rem → root (html) font-size ke relative
em → parent/current context ke relative


Topic 3 — font-weight
font-weight text ki thickness/boldness control karta hai.
h1 {
    font-weight: 700;
}

Common values:
100 → Thin
200
300 → Light
400 → Normal
500 → Medium
600 → Semi-bold
700 → Bold
800
900 → Extra bold


Topic 4 — font-style
font-style text ka style control karta hai.

Common values:
font-style: normal;
font-style: italic;
font-style: oblique;


Topic 5 — line-height
line-height text ki lines ke darmiyan vertical spacing control karta hai.
p {
    line-height: 1.6;
}


Topic 6 — letter-spacing
letter-spacing letters ke darmiyan horizontal space control karta hai.
h1 {
    letter-spacing: 2px;
}


Topic 7 — text-align
text-align text ki horizontal alignment control karta hai.

text-align: left;
text-align: center;
text-align: right;
text-align: justify;


Topic 8 — text-decoration
text-decoration text par underline, overline, line-through etc. lagane ke liye use hota hai.

text-decoration: underline;


Topic 9 — text-transform
text-transform text ko uppercase/lowercase/capitalized form mein display karta hai.

text-transform: uppercase;


Topic 10 — text-shadow
text-shadow text ke peeche shadow add karta hai.

Syntax
text-shadow: x y blur color;


Topic 11 — white-space & text-overflow
Ye dono long text aur wrapping control karne ke liye useful hain.

white-space
Text line break ka behavior control karta hai.
Common pattern:
white-space: nowrap;


text-overflow
Jab text container se bahar nikal raha ho, usko handle kar sakte hain.
Common pattern:
.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}




Topic 1 — margin
margin element ke bahar ki space hoti hai.
.card {
    margin: 20px;
}

Individual sides
.card {
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 30px;
    margin-left: 10px;
}

4 sides
margin: 10px 20px;
➡️ Top/Bottom = 10px
➡️ Left/Right = 20px


margin: 10px 20px 30px;
➡️ Top = 10px
➡️ Left/Right = 20px
➡️ Bottom = 30px


margin: 10px 20px 30px 40px;
Order:
Top → Right → Bottom → Left



Topic 2 — padding
padding element ke andar ki space hoti hai — content aur border ke darmiyan.
.card {
    padding: 20px;
}

Individual sides
.card {
    padding-top: 20px;
    padding-right: 10px;
    padding-bottom: 30px;
    padding-left: 10px;
}

Shorthand
padding: 20px;
➡️ All sides


padding: 10px 20px;
➡️ Top/Bottom = 10px
➡️ Left/Right = 20px

padding: 10px 20px 30px;
➡️ Top = 10px
➡️ Left/Right = 20px
➡️ Bottom = 30px

padding: 10px 20px 30px 40px;
➡️ Top → Right → Bottom → Left




Topic 3 — CSS Box Model
Har HTML element ko browser ek box ki tarah treat karta hai.

Box Model:

┌─────────────────────────┐
│         Margin          │
│  ┌───────────────────┐  │
│  │      Border       │  │
│  │ ┌───────────────┐ │  │
│  │ │    Padding    │ │  │
│  │ │ ┌───────────┐ │ │  │
│  │ │ │  Content  │ │ │  │
│  │ │ └───────────┘ │ │  │
│  │ └───────────────┘ │  │
│  └───────────────────┘  │
└─────────────────────────┘

Order:
Content
   ↓
Padding
   ↓
Border
   ↓
Margin

.card {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 30px;
}

Yahan:
width → content ki width
padding → content ke around internal space
border → boundary
margin → bahar ki space



Topic 4 — box-sizing
Ye real-world CSS mein bohat important hai.
By default:
box-sizing: content-box;
Iska matlab width mein padding aur border include nahi hote.


border-box 🔥
.card {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}
Ab total width 300px hi rahegi.
Padding aur border isi 300px ke andar calculate honge.


Topic 5 — width & height
width element ki horizontal size aur height vertical size control karta hai.
.card {
    width: 300px;
    height: 200px;
}

Common units

px
Fixed size:
width: 300px;
height: 200px;

%
Parent ke relative:
.card {
    width: 50%;
}
Agar parent 1000px hai → card 500px.

rem
Root font-size ke relative:
width: 20rem;

vw / vh
Viewport ke relative:
width: 50vw;
height: 50vh;

max-width 🔥
Responsive layouts mein bohat important:
.container {
    width: 100%;
    max-width: 1200px;
}
Element 1200px se bara nahi hoga.

min-width
Minimum width:
.card {
    min-width: 200px;
}




Topic 6 — overflow
overflow control karta hai ke jab content element ke available area se bahar nikal jaye to browser kya kare.

Common values
overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;


Topic 7 — border
border element ke around boundary/line create karta hai.
Basic
.card {
    border: 2px solid black;
}
Syntax:
border: width style color;

Individual sides
border-top: 2px solid red;
border-right: 2px solid blue;
border-bottom: 2px solid green;
border-left: 2px solid orange;


Border radius 🔥
Corners round karne ke liye:
.card {
    border-radius: 12px;
}







