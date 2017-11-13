$(function(){
	pgLoaded();
});

function pgLoaded(){

	function Car(make, model, year, price){
		this.make = make;
		this.model = model;
		this.year = year;
		this.price = price;
		this.tax = price *.08;
		this.total = this.price + this.tax;
	};

	var cars = Array(5);
	cars[0] = new Car("Ford", "T-Bird", "1964", 56000);
	cars[1] = new Car("Chevrolet", "Camaro", "1969", 65000);
	cars[2] = new Car("Hummer", "H1", "1993", 62600);
	cars[3] = new Car("Mercedes-Benz", "G63 6X6", "2013", 515000);
	cars[4] = new Car("Ford", "Granada", "1977", 5500);

	var html = "";
	for(var i = 0; i < cars.length; i++) {
		html += "<tr><td>" + cars[i].make + "</td><td>" + cars[i].model + "</td><td>" + cars[i].year + "</td><td>" + cars[i].price + "</td><td>" + cars[i].tax + "</td><td>" + cars[i].total + "</td></tr>";
	}

	$("#inventTable tbody").append(html);
};