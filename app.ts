// Define an interface named Vehicle with the specified properties and method
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start: () => void; // Method that returns void
}

//Implement a class named Car that implements the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year
  }

  start(): void {
    console.log("Car Engine Started");
  }
}
