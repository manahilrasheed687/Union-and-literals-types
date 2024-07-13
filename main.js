#! /usrbin/env node
"use strict";
// // union types 
Object.defineProperty(exports, "__esModule", { value: true });
let mobile = "Sumsung";
mobile = 3343045316;
mobile = true;
mobile = undefined;
let myName;
myName = null;
console.log(myName);
myName = "Zia";
console.log(myName);
//myName = undeifined; // ERROR
//myName = 12;
let myAge;
myAge = 16; // Narrowing
console.log(myAge);
// console.log(myAge.toLowerCase()); // ERROR
myAge = "dONT KNOW"; // Narrowing
console.log(myAge);
console.log(myAge.toString()); // Common to both types
// can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string
//Because of narrowing
// UNION TYPES
let unionType;
unionType = "Manahil rasheed",
    unionType = "Ali",
    unionType = "Red color";
unionType = 10;
unionType = 10000;
unionType = 200000;
// LITERALS TYPES
let literalsType;
literalsType = "Syeda shaanzay",
    literalsType = 20000;
let newAge = Math.random() > 0.6 ? "Khan" : 60;
//newage.tolowerCase(); // Error: Transoilier cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of new age: string
    newAge.toUpperCase(); // can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // ok: string
    : newAge.toFixed(); // ok:number
let age;
age = 90; // ok
age = "died"; //ok
age = "unknown"; //ok
//age //living //error
let zia;
zia = "zia";
zia = "khan";
// You can also define a type alias
// type RawData = boolean | number | string | null | undefined;
let data;
let a = 10000;
let b = "syeda";
let c = false;
let d = 10000;
let e = "syeda";
let f = false;
function setcolor(color) {
    console.log(`color set to ${color}`);
}
;
setcolor("red"); // valid
setcolor("green"); // valid
setcolor("yellow"); // valid
setcolor("blue"); // error
