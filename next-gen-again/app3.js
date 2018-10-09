//CLASSES

class Person {
    constructor(name, age) {
        console.log('ran');
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
}

const person1 = new Person("June", 22);
const person2 = new Person("Valentine", 25);
console.log(person1.name, person1.age);
console.log(person2.name, person2.age);

console.log(person1.greet());

//SUBCLASSES

class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;

    }
    info(){
        return `${this.name} owes ${this.balance}`;
    }
}
const customer1 = new Customer('Mary', 40, 14000);
console.log(customer1.greet());
console.log(customer1.info());

//MODULES

//webpack is a module bundler, Babel is es6 compiler

//file 1(file.js)

export const name = 'Jeff';
export const nums=[1,2,3];
export default Person;

import {name} from './file1';
import Person from './file1'