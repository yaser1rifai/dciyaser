/* 

#### 1. Check if a number is within a given range
Write a program that checks if a number is 
within the range of an object's min and max properties. 

Examples: 
* 4, { min: 0, max: 5 }) ➞ true 
* 4, { min: 4, max: 5 }) ➞ true
* 4, { min: 6, max: 10 }) ➞ false
* 5, { min: 5, max: 5 }) ➞ true

* Notes: Assume min <= max is always true. 
*/
console.log(`-------------------1----------------`);
let  number = { 
    min: 0, 
    max:6, 
    };
    let myNumber=7;
    if ((myNumber<=number.max)&&(myNumber>=number.min)){
        console.log(`${myNumber}  is  within the range of an object's min and max properties. `);
    }
    else console.log(`${myNumber}  is not  within the range of an object's min and max properties. `);
/* 
#### 2. Return Keys and Values
Write a program that takes an object and returns the keys 
and values in separate arrays. 

Examples: 
* { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
* {key: true} ➞ ["key"], [true]
 */
console.log(`-------------------2----------------`);
let  myObj = { 
    a: 1, 
    b:2, 
    c:3,
    };
       console.log(Object.keys(myObj), (Object.values(myObj)));
       /*
#### 3. Scrabble 
Write a program that, given an array of scrabble tiles,
 counts the maximum score that a player can earn from the tiles in their hand. 
Example: 
[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
        */ 
       console.log(`-------------------3----------------`);

const player = [
   { tile: "N", score: 1 },
   { tile: "K", score: 5 },
   { tile: "Z", score: 10 },
   { tile: "X", score: 8 },
   { tile: "D", score: 2 },
   { tile: "A", score: 1 },
   { tile: "E", score: 1 }
 ] ;
 var i=0,sum=0;
 for(i=0;i<Object.keys(player).length;i++){
    sum=sum+player[i].score ; 
} 
 
console.log(`The player's maximum score:${sum}`)
/* 
#### 4. Is it an empty object? 
Write a program that returns true if an object is empty, and false if otherwise. 

Examples: 
* {} ➞ true
* {a: 1} ➞ false
*/
console.log(`-------------------4-------------`);
let  myOb = { 
    a: 1, 
    };
    var myOb1 = {}; 
    if(Object.keys(myOb1).length == 0) {
        console.log(`true `);
    } else {
        console.log(`false `);
    }
  
