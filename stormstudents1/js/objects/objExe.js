/*
1. Write a program to list the properties of an object. 
E.g.
const student = { 
firstName: "John", 
lastName: "Smith", 
class: 12 };
Expected Output: firstName, lastName, class 
 */
console.log(`----------------1 ------------------`);
const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12 };
    console.log(student);
   // console.log(student.firstName,student.lastName,student.class);
/* 2. Create a person object. Include the person's first and last name, age, job, city etc.
 Then print text by retrieving data from the object e.g.
  "John Smith is a 41 year old engineer living in France".  */
    console.log(`----------------2 ------------------`);
    let  person = { 
        firstName: "John", 
        lastName: "Smith", 
        age: 41 ,
        job:"engineer",
        city:"France",
    };
    console.log(`${person.firstName} ${person.lastName} is a ${person.age} year old ${person.job} living in ${person.city}`)
    /* 
    3. Write a JavaScript program to delete the "class" property 
    (or last property) from the previous object.
    */
    console.log(`----------------3 ------------------`);
    delete student.class;
    console.log(student);
    /* 
    4. Write a program to get the length of a JavaScript object.
    */
   console.log(`----------------4 ------------------`);
   var size = Object.keys(person).length;
   console.log(size);
   /* 
 Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const library = [ 
   {
       author: 'J.K. Rowling',
       title: 'Harry Potter and the Chamber of Secrets',
       readingStatus: true
   },
   {
       author: 'Homer',
       title: 'The Odyssey',
       readingStatus: true
   },
   {
       author: 'Harper Lee',
       title:  'To Kill a Mockingbird', 
       readingStatus: false
   }];
E.g. Output: 
Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
Already read The Odyssey by Homer
You still need to read To Kill a Mockingbird by Harper Lee

    */
   console.log(`----------------5 ------------------`);
   const library = [ 
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        readingStatus: true
    },
    {
        author: 'Homer',
        title: 'The Odyssey',
        readingStatus: true
    },
    {
        author: 'Harper Lee',
        title:  'To Kill a Mockingbird', 
        readingStatus: false
    }];
    var mySize=Object.keys(library).length-1;
    for(let i=0;i<mySize;i++)
    {
    console.log(`Already read ${library[i].title} by ${library[i].author}`);
}
console.log(`You still need ${library[2].title} by ${library[2].author}`);

