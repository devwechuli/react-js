//SPREAD

const arr=[1,2,2,3,4,4,2];

const arr2=[...arr,4];
const arr3=[...arr.filter(num=>num!==2),4,34]
console.log(arr3);

const person={
    name:'Brad',
    age:36
};

const newPerson={
    ...person,
    email:'sd@sds.com'
};
console.log(newPerson);


//DESTRUCTURING

const profile={
    name:'John Doe',
    address:{
        street:'Juja',
        city:'Thika'
    },
    hobbies:['eating','weed']
};

const {name,address}=profile;
console.log(name,address);

const {street}=profile.address;
console.log(street);
