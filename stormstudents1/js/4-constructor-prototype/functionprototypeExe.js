//# Constructor & Prototype 

console.log(`-------------#### 1. Hero ----------------------------------------------------------`);
//* Create a constructor function called `Hero` That will accept a variable name as an argument.
//* Use the Hero constructor to create an object myHero with the name 'Link'.
function Hero(name){
this.name=name;
}
let myHero=new Hero("Link");
console.log(myHero);
console.log(`---------------#### 2. Playlist-----------------------------------------------------------------------`)
/* 
Create a constructor function called `Song`. `Song` should take in two arguments, title and artist, 
which should both be added as properties when the `Song` constructor function is used. 
The `Song` function should also have a method called play on its prototype. 
When called, the play function should console.log the name of that specific song preceded by the word 
'Playing:'.

*/
function Song(title,artist){
this.title=title;
this.artist=artist;
}
Song.prototype.play=function(){
    console.log(`'Playing: ${this.title}'`)
}

let song1 = new Song('Time', 'Pink Floyd');
let song2 = new Song('Sweet Life', 'Frank Ocean');
let song3 = new Song('Intro', 'M83');
let song4 = new Song('Bloom', 'ODESZA');
let song5 = new Song('The Less I Know The Better', 'Tame Impala');

song4.play(); //logs 'Playing: Bloom'
song2.play(); //logs 'Playing: Sweet Life'
song3.play(); //logs 'Playing: Intro'

console.log(`-----------------#### 3. Person------------------------------------------------`)
/* 
* Create a constructor function called `Person` That will accept the arguments name and occupation.
* Use Person.prototype to add a method whoAreYou that will return: My name is [the person's name] and I am a [the person's occupation].
* Use the person constructor to create an object person1 with the name Michaelangello and occupation Ninja.
* Use the whoAreYou method to log to the console person1's name and occupation.
*/
function Person(name,occupation){
    this.name=name;
    this.occupation=occupation;
}
Person.prototype.whoAreYou=function(){
console.log(`My name is ${this.name} and I am a ${this.occupation}`)
}
let person1=new Person("Michaelangello","Ninja");
person1.whoAreYou();


//Create a constructor function called arrayString that will take an array as an argument. This constructor will join the array to a single string, and store the string in a variable called str. For example, the following code:
//```javascript
//         let joined = new arrayString(['c','a','t']);
//           console.log(joined);
// will log to the console:{ str: 'cat' }

function arrayString(str){
  return  this.str=str.join('');
}
let joined = new arrayString(['c','a','t']);
console.log(joined); 

console.log(`------------------#### 5.  Calendar App-------------------------`); 
/* 
As part of a calendar app, you will need to create an object that, for any given month, will store all the days in that month.

//* Create a constructor called Day(year, month, day) that will be given a number each for the month, the day and the year.
//* Create a function called getDaysinMonth(year, month) that will be given a number each for the month and the year. This function will return array of Day objects, which will be equal in length to the number of days in the given month.
//For example:
`//``javascript
let daysInJune2016 = getDaysinMonth(2016, 3);
console.log(daysInJune2016)
will log to the console:

[ { month: 6, day: 1, year: 2016 },
  { month: 6, day: 2, year: 2016 },
  { month: 6, day: 3, year: 2016 },
  // ...
  // ...
  // ...
  { month: 6, day: 28, year: 2016 },
  { month: 6, day: 29, year: 2016 },
  { month: 6, day: 30, year: 2016 } ]
```
* hint: create a new Date object and use the getDate method to get the number of days in a given month. 
 */

function Day(year, month){
   this.year=year;
   this.month=month;
    //this.day=day;
}

Day.prototype.getDaysInMonth = function() {
   return new Date(this.year,this.month,0).getDate();
  };
  let myDay=new Day(2016,6);
  let daysInJune2016 =myDay.getDaysInMonth();
  for(let i=1;i<=daysInJune2016;i++){
  console.log(`{Month:${myDay.month},day:${i},year:${myDay.year}}`)
}
  