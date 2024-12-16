// Define an interface named Vehicle with the specified properties and method
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start: () => void; // Method that returns void
}

// Example usage
const car: Vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  start: () => {
    console.log("Engine started");
  },
};

// Call the start method
car.start();

