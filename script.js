// Complete the js code
function Car(make, model) {//car is a prototype model
	this.make=make;//instances of a car make and model
	this.model=model;
}
Car prototype.getMakeModel=function() {
	return `${this.make}${this.model}`
	
}
function SportsCar(make, model, topSpeed) {
	Car.call(this,make,modal);
	this.topSpeed=topSpeed;
	
}
SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar;

SportsCar.prototype.getToSepeed=function();
return this.toSpeed();

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
