/* console.log(`-------------------Implicit Binding-------------------------`);
const user = {
  name: 'Tyler',
  age: 27,
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

function greet() {
  // alert(`Hello, my name is ${this.name}`)
  console.log(`Hello, my name is ${user.name}`) // Tyler
}
user.greet();//Hello, my name is Tyler
greet();//Hello, my name is Tyler
 */
console.log(`--------------------1------------------------`);
/* const user = {
  name: 'Tyler',
  age: 27,
  greet() {
   console.log(`Hello, my name is ${this.name}`)
  },
  mother: {
    name: 'Stacey',
    greet() {
     console.log(`Hello, my name is ${this.name}`)
    }
  }
}
user.greet()
user.mother.greet()
 */
console.log(`--------------------Explicit Binding-----------------------`);
/* function greet () {
  console.log(`Hello, my name is ${this.name}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}
greet.call(user) */
console.log(`----------------------------------------------`)
/* 
function greet (l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(user, languages[0], languages[1], languages[2])

//or
greet.apply(user, languages)
 */
function greet (l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"

console.log(`--------------------new Binding----------------`)
function User (name, age) {
  

  this.name = name
  this.age = age
}

const me = new User('Tyler', 27)
console.log(me)
console.log(`-------------------------------Lexical Binding-----------------`)
