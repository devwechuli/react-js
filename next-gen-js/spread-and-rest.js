const numbers=[1,2,3];
//spread operator
const newNumbers=[...numbers,4,5];

console.log(newNumbers);

const person={
    name:'June',
    Age:22
};

const newPerson={
    ...person,
    gender:'female',
    single:false,
    greeting:function(){
        return 'hello my name is ' + this.name + ' I am ' + this.Age;
    }
}

console.log(newPerson);
console.log(newPerson.greeting());

//rest operator

const filter=(...args)=>{
    return args.filter(el=> el ===1);
}
console.log(filter(1,2,3));
