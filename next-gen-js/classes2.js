
class Human{
//we get rid of the constructor function

        gender='male';

    printGender=()=>{
        console.log(this.gender);
    }
}


class Person extends Human {

   
    name="Paul";
       


    printMyName=()=>{
        console.log(this.name);
    }
}

const person=new Person();

person.printMyName();
person.printGender();

