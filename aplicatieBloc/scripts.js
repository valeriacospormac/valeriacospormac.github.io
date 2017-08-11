function personFactory(name, age) {
	return {
		name: name,
		age: age
	}
}

const personCreator = {
	person: [],
	pushPerson(person){
		this.person.push(person);

		this.onPersonCreated(person);
	},

	onPersonCreated(){}
};

const apartment = {
	createApartment() {
		if(document.querySelectorAll(".floor").length < 5) {
			const divFloor = document.createElement("div");
			document.querySelector(".apartment-floor").appendChild(divFloor);
			divFloor.classList.add("floor");

			let divApartment = document.createElement("div");
			divFloor.appendChild(divApartment);
			divApartment.classList.add("apartment");
			divApartment.innerText = "Apartament ";

			divApartment = document.createElement("div");
			divFloor.appendChild(divApartment);
			divApartment.classList.add("apartment");
			divApartment.innerText = "Apartament ";

		} else {
			alert("Nu mai sunt locuri disponibile pentru a crea apartamente !");
		}

		this.onFloorCreated();
	},
	deleteApartment() {
		const apartmentFloor = document.querySelector(".apartment-floor");
		apartmentFloor.removeChild(apartmentFloor.lastChild);

		this.onFloorDeleted();
	},
	occupyApartament(){},
	onFloorCreated(){},
	onFloorDeleted(){}
};

const adminitration = {
	addPerson(person){},
	addApartment(apartment){},
	removePerson(person){},
	removeApartment(apartment){},
	onSelection(person, apartment){}, 
	homelessPerson: [],
	addHomelessPerson(homelessPerson) {
		this.homelessPerson.push(homelessPerson);
	}
};




document.querySelector(".residents .registration-form").addEventListener("submit", function(event){
	event.preventDefault();

	const name = document.querySelector(".person-name").value;
	const age = document.querySelector(".person-age").value;
	const person = personFactory(name,age);
	personCreator.pushPerson(person);

	const li = document.createElement("li");
	li.innerText = person.name + " cu varsta de " + person.age + " ani";

	const ol = document.querySelector(".residents .resident-list");
	ol.appendChild(li);

	event.target.reset();
});

document.querySelector(".apartments .create").addEventListener("click", function(event){
	apartment.createApartment();
});

document.querySelector(".apartments .delete").addEventListener("click", function(event){
	apartment.deleteApartment();
});

personCreator.onPersonCreated = function(person){
	adminitration.addHomelessPerson(person);
}




/*
 let residents= [];




document.querySelector(".residents .registration-form").addEventListener("submit", function(event){
	event.preventDefault();

	const name = event.target.querySelector(".person-name").value;
	const age = event.target.querySelector(".person-age").value;
	const person = personFactory(name, age);

	residents.push(person);

	const li = document.createElement("li");
	li.innerText = person.name + " cu varsta de " + person.age + " ani";

	const ol = document.querySelector(".residents .resident-list");
	ol.appendChild(li);

	event.target.reset();


	const optionPers = document.createElement("option");
	optionPers.innerText = person.name;
	document.querySelector(".person-list").appendChild(optionPers);

});


let indexAp = 1;
document.querySelector(".apartments .create").addEventListener("click", function(event){
	if(document.querySelectorAll(".floor").length < 5) {
		const divFloor = document.createElement("div");
		document.querySelector(".apartment-floor").appendChild(divFloor);
		divFloor.classList.add("floor");

		let divApartment = document.createElement("div");
		divFloor.appendChild(divApartment);
		divApartment.classList.add("apartment");
		divApartment.innerText = "Apartament " + indexAp++;


		let optionAp = document.createElement("option");
		optionAp.innerText = divApartment.innerText;
		document.querySelector(".apartments-list").appendChild(optionAp);

		divApartment = document.createElement("div");
		divFloor.appendChild(divApartment);
		divApartment.classList.add("apartment");
		divApartment.innerText = "Apartament " + indexAp++;


		optionAp = document.createElement("option");
		optionAp.innerText = divApartment.innerText;
		document.querySelector(".apartments-list").appendChild(optionAp);
	} else {
		alert("Nu mai sunt locuri disponibile pentru a crea apartamente !");
	}



});


document.querySelector(".apartments .delete").addEventListener("click", function(event){
	const apartmentFloor = document.querySelector(".apartment-floor");
	apartmentFloor.removeChild(apartmentFloor.lastChild);
	indexAp = indexAp - 2;

	const apartmentsList = document.querySelector(".apartments-list");
	apartmentsList.removeChild(apartmentsList.lastChild);
	apartmentsList.removeChild(apartmentsList.lastChild);
});*/




