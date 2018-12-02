class Car {
  constructor() {
    this.name = "Ford";
    this.type = "Hatchback";
    this.wheels = 4;
  }
  alertBrand() {
    console.log(this.name);
  }
}

class BMW extends Car {
  constructor() {
    super();
    this.windows = 5;
  }
}

const car = new Car();
const ford = new BMW();
car.alertBrand();
ford.alertBrand();
