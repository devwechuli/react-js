//CONST & LET

const name = "John"; //can't change this value and you have to initialize
let sec = "Paul"; //can be changed, block level scope

const person = {
    name: 'John',
    age: 33
};

person.name = "Joshua"; // we can do this because it is an object or an array

//ARROW FUNCTIONS

const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

sayHello("Paul");

const plainHello = () => console.log(`Hello`); //shorter syntax for arrow functions

plainHello();

//FOREACH

let fruits = ["apples", "grapes", "oranges", "mangoes"];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

//MAP

const singleFruit = fruits.map((fruit) => {
    fruit.slice(0, -1);
});
console.log(singleFruit);

//FILTER

const people = [{
        id: 1,
        name: "Karen"
    },
    {
        id: 2,
        name: "Bob"
    },
    {
        id: 3,
        name: "Brenda"
    },
    {
        id: 4,
        name: "June"
    },
    {
        id: 5,
        name: "Lora"
    }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);