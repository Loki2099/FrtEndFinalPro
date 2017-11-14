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
		html += "<tr name=\"cars\"><td>" + cars[i].make + "</td><td>" + cars[i].model + "</td><td>" + cars[i].year + "</td><td>$" + cars[i].price + "</td><td>$" + cars[i].tax + "</td><td>$" + cars[i].total + "</td></tr>";
	}

	$("#inventTable tbody").append(html);

	$("#inventSearch").keyup(function(){
		var sbVal = $("#inventSearch").val().toLowerCase();
		if(sbVal === ""){removeAll()}
		else{filterStart(sbVal);}
	});

	$("#inventSearch").focusout(function(){
		if($("#inventSearch").val() === ""){removeAll();}
	});

	function filterStart(sbVal){
		var count = 0;
		var hide = valueTesting(sbVal);
		var tblrow = $("tr[name = 'cars']");
		for(var i = 0; i < hide.length; i++) {
			if(hide[i] === false){
				count++;
				if($(tblrow[i]).hasClass("hidden")){break}
				else{$(tblrow[i]).addClass("hidden");}
			}
			else{removeHide(tblrow[i]);}
		};
		if(count === hide.length) { alert("Notice, no results found for current search value."); }
	};

	function valueTesting(sbVal){
		var hide = Array(cars.length);
		for (var i = 0; i < cars.length; i++) {
			var found = false;
			var car = cars[i];
			if(car.make.toLowerCase().search(sbVal) > -1){found = true}
			if(car.model.toLowerCase().search(sbVal) > -1){found = true}
			if(car.year.search(sbVal) > -1){found = true}
			hide[i] = found;
		};
		return hide;
	};

	function removeAll(){
		var tblRow = $("tr");
		for (var i = 0; i < tblRow.length; i++) {
			removeHide(tblRow[i]);
		}
	};

	function removeHide(tr){
			if($(tr).hasClass("hidden")){$(tr).removeClass("hidden")};
	};
};