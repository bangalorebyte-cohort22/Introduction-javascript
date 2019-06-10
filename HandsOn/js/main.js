// console.log
// console.log("Hello World");
// console.warn("Jithin ");
// console.error('This is an error');

// Variable - Three ways of initializing a variable
// let
// var
// const 

// var name = 'jithin';
// console.log('My name is '+ name)

// console.log(`My name is ${name}`)

// let name = 'jithin';
// console.log(`My name is ${name}`);

// const name_new = 'jithin j kumar';
// console.log(`My name is ${name_new}`)

// name = 'not jithin'
// console.log(`My name is ${name}`);

// name_new ='not jithin j kumar'
// console.log(`My name is ${name_new}`)

// DataTypes

// const name = 'jithin';
// const age = 28;
// const rating = 4.5;
// const isTrainer = true;
// const x = null;
// const y = undefined;
// let z;


// console.log(name)
// console.log(`My name is ${name} and age is ${age}`)

// String Methods
// const s = "hello world"
// console.log(s.toUpperCase().toLowerCase())
// console.log(s.length)
// console.log(s.substring(0,5))
// console.log(s.split(' '))

// Arrays
// const numbers = [1,2,3,4,5,6];
// console.log(numbers);
// numbers.push(7)
// console.log(numbers);
// numbers.unshift(0)
// console.log(numbers);
// numbers.pop()
// console.log(numbers);

// const fruits = ['mango','apple','oranges'];
// fruits.push('grapes');
// console.log(fruits);
// const newFruits = ['tomato','strawberry'];
// const something = fruits.concat(newFruits);
// console.log(Array.isArray(something));
// console.log(something.indexOf('oranges'))
// console.log(something)

// Objects
// const person ={
//     name : 'jithin',
//     age:28,
//     hobbies:['programming','driving'],
//     languages:['python','javascript']
// };
// console.log(Object.keys(person));
// console.log(person.languages[0]);

const todos =[
    {
        id:1,
        text:'learn javascript',
        isComplete:'False'
    },
    {
        id:2,
        text:'submit assignments',
        isComplete:'True'
    },
    {
        id: 3,
        text: 'eat breakfast',
        isComplete: 'True'
    },
    {
        id: 4,
        text: 'complete HandsOn',
        isComplete: 'False'
    }
]
// console.log(todos[0])
// console.log(todos[0].text)
// const newTodo = {
//     id:1,
//     text:'HandsOn javascript',
//     isComplete:'False'
// }

// todos.push(newTodo);
// todos[0].email='john@something.com'
// todos[0].id = '5'
// console.log(todos)

//LOOPS

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// };

// for(let i=0;i<todos.length;i++){
//     console.log(todos[i].text);
// };

//While
// let i=0;
// while(i<todos.length){
//     console.log(todos[i].text);
//     i++;
// };

//For .. of
for(let todo of todos){
    console.log(todo.text)
}


