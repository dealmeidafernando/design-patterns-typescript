import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('Fusca');
fusca.pickUp('Joao');
fusca.stop();

// import { Car } from './vehicle/car';

// const fusca = new Car('Fusca');
// fusca.pickUp('Joao');
// fusca.stop();

// if you use it more than once.
