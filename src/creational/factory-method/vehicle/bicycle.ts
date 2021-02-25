import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} this is searching ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} stopped`);
  }
  // may be different this methods
}