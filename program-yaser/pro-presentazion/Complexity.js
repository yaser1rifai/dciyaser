console.log(`-----------------------Complexity   for----------------------------------`);
var end, start;
start = new Date();
//----------------------------------------------
var t=0;
let n=1000
for (var i = 0; i < n; i++)
 {  t++;
}console.log("number of operations= "+t);
//------------------------------------------------
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');

console.log(`-----------------------Complexity   for nested loop----------------------------------`);
var end, start;
start = new Date();
//-----------------------------------
var t=0;
 n=1000
for (var i = 0; i < n; i++){   
     for (var j = 0; j < n; j++)
{   t++;}
}
console.log("number of operations= "+t);
//------------------------------------------
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');

console.log(`-----------------------Complexity   While----------------------------------`);
var end, start; 
start = new Date();
//------------------------------
 n=1000;
var i = 0;
while (i<n) 
{  i++;} 
console.log("number of operations= "+i);
//--------------------------------
end = new Date();

console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');

console.log(`-----------------------Complexity   if else----------------------------------`);
var  end, start;
 start = new Date();
 //--------------------------
var m=160000;
    n=40;
while (m!=n){
if (m > n) {m=m-n;} 
else {    n=n-m;}
}
console.log("The biggest common denominator= "+m)
//--------------------------------------
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');

console.log(`-----------------------Complexity   factorial recursive----------------------------------`);
var  end, start; 
start = new Date();
//---------------------------------------
function factorialize(num) { 
if (num < 0) return -1; 
else if (num == 0) return 1;
 else { return (num * factorialize(num - 1)); } }
console.log( factorialize(100));
//------------------------------------------------
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');

console.log(`-----------------------Complexity   factorial  for----------------------------------`);
var  end, start;
 start = new Date();
 //--------------------------
function factorialize(num) {
 if (num === 0 || num === 1) return 1;
 for (var i = num - 1; i >= 1; i--) { num *= i; } return num; } 
console.log(factorialize(100));
//-------------------------------
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');
console.log(`-----------------------Complexity   factorial while ----------------------------------`);

var  end, start; 
start = new Date();
//------------------------------
function factorialize(num) { 
var result = num;
 if (num === 0 || num === 1) return 1;
 while (num > 1) { num--; result *= num; }
 return result; } 
console.log( factorialize(100));
//---------------------------------
end = new Date();
console.log('Operation took time  O(n)=  ' + (end.getTime() - start.getTime()) + ' msec');