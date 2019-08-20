// implicit
console.log(`-------------------1`)
function newStudent() {
    return console.log(this.firstName + " " + this.lastName + " " +  this.class);
 
 }
 const student = {
    firstName : "John",
    lastName : "Smith",
    class : 12,
    newStudent: newStudent,
 
 }
 student.newStudent();
 
 // explicit
 console.log(`-------------------2`)
 let person = { newPerson: function (){
    return console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.jop} living in ${this.city}`);
 }
 }
 let person1 = {
    firstName : "John",
    lastName : "Smith",
    age : 41,
    jop : "engineer",
    city : "France",
 }
 person.newPerson.call(person1);
 //
 console.log(`-------------------3`)
 delete student.class;
 console.log(student);
 console.log(`-------------------4`)
 var size = Object.keys(person1).length;
   console.log(size);