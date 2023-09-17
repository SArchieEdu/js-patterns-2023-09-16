class Visitor {
  sum = 0;
  calculateCar(car: Car) {
    this.sum += 123 * car.hp;
  }
  calculateHouse(house: House) {
    this.sum += 567 * house.flatCount;
  }
  calculateSomethingElse(something: any) {}
}

class Car {
  hp: number = 100;

  accept(visitor: Visitor) {
    visitor.calculateCar(this);
  }
}

class House {
  flatCount: number = 4;

  accept(visitor: Visitor) {
    visitor.calculateHouse(this);
  }
}

class Customer {
  house = new House();
  cars = [new Car(), new Car()];

  calculate() {
    const visitor = new Visitor();

    this.house.accept(visitor);
    this.cars.forEach((car) => car.accept(visitor));

    return visitor.sum;
  }
}
