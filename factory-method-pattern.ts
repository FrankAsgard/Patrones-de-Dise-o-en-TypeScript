// factory-method-pattern.ts

abstract class Vehicle {
  abstract getType(): string;
}

class Car extends Vehicle {
  getType(): string {
    return 'Car';
  }
}

class Bike extends Vehicle {
  getType(): string {
    return 'Bike';
  }
}

abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;
}

class CarFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Car();
  }
}

class BikeFactory extends VehicleFactory {
  createVehicle(): Vehicle {
    return new Bike();
  }
}

// Usage
const carFactory = new CarFactory();
const bikeFactory = new BikeFactory();

const car = carFactory.createVehicle();
const bike = bikeFactory.createVehicle();

console.log(`Created vehicle: ${car.getType()}`);
console.log(`Created vehicle: ${bike.getType()}`);
