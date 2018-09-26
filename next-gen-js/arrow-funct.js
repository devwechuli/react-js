const myFunc=()=>{
    return "Hello";
}


const myFunc2=(name)=>{
    return "Hello " + name;
}

const myFunc3=(name,age)=>{
    return "Hello " + name +'and age: '+ age;
}

//compresing the arrow function

const multiply=number=>number*2;

console.log(myFunc3('Paul',24));
console.log(multiply(3));