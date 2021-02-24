import { Vehicle } from '../vehicle/vehicle';
// you can have logic
export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}
