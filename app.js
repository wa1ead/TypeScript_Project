//Implement a class named Car that implements the Vehicle interface
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car Engine Started");
    };
    return Car;
}());
var car = new Car('Porsche', 'cayan', 2020);
car.start();
