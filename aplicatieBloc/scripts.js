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
	indexAp: 1,
	createApartment() {
		if(document.querySelectorAll(".floor").length < 5) {
			const divFloor = document.createElement("div");
			document.querySelector(".apartment-floor").appendChild(divFloor);
			divFloor.classList.add("floor");

			divApartment = document.createElement("div");
			divFloor.appendChild(divApartment);
			divApartment.classList.add("apartment");
			divApartment.innerText = "Apartament " + apartment.indexAp++;
			this.onFloorCreated(divApartment);

			divApartment = document.createElement("div");
			divFloor.appendChild(divApartment);
			divApartment.classList.add("apartment");
			divApartment.innerText = "Apartament " + apartment.indexAp++;
			this.onFloorCreated(divApartment);
		} else {
			alert("Nu mai sunt locuri disponibile pentru a crea apartamente !");
		}
	},
	deleteApartment() {
		if(document.querySelectorAll(".floor").length > 0) {
			const apartmentFloor = document.querySelector(".apartment-floor");
			apartmentFloor.removeChild(apartmentFloor.lastChild);
			apartment.indexAp = apartment.indexAp - 2;
			this.onFloorDeleted(apartmentFloor);
		} else {
			alert("Nu mai sunt etaje disponibile pentru a fi demolate !");
		}
		
	},
	occupyApartament(personSelected, apartmentSelected){
		const apartmentArray = document.querySelectorAll(".apartment");
		for( let i = 0; i < apartmentArray.length; i++) {
			if(apartmentArray[i].innerText === apartmentSelected) {
				apartmentArray[i].innerText = personSelected;
				apartmentArray[i].style.backgroundColor = "white";
				apartmentArray[i].style.color = "black";
				administration.removePerson(personSelected);
				administration.removeApartment(apartmentSelected);
			}
		}

	},
	onFloorCreated(){},
	onFloorDeleted(){}
};

const administration = {
	addHomelessPerson(person){
		const optionPers = document.createElement("option");
		optionPers.innerText = person.name;
		document.querySelector(".person-list").appendChild(optionPers);
	},
	addApartment(apartment){
		const optionAp = document.createElement("option");
		optionAp.innerText = apartment.innerText;
		document.querySelector(".apartments-list").appendChild(optionAp);
	},
	deleteApartment(apartment){
		const apartmentsList = document.querySelector(".apartments-list");
		apartmentsList.removeChild(apartmentsList.lastChild);
		apartmentsList.removeChild(apartmentsList.lastChild);
	},
	removePerson(){
		const persSelected = document.querySelector(".person-list").options[document.querySelector(".person-list").selectedIndex];
		const persDelet = document.querySelector(".person-list").removeChild(persSelected);
	},
	removeApartment(){
		const apSelected = document.querySelector(".apartments-list").options[document.querySelector(".apartments-list").selectedIndex];
		const apDelet = document.querySelector(".apartments-list").removeChild(apSelected);
	},
	onSelection(){
		const personSelected = document.querySelector(".person-list").options[document.querySelector(".person-list").selectedIndex].text;
		const apartmentSelected = document.querySelector(".apartments-list").options[document.querySelector(".apartments-list").selectedIndex].innerText;
		apartment.occupyApartament(personSelected, apartmentSelected);
	}, 
	homelessPerson: [],
	addHomelessPerson(homelessPerson) {
		this.homelessPerson.push(homelessPerson);
		const optionPers = document.createElement("option");
		optionPers.innerText = homelessPerson.name;
		document.querySelector(".person-list").appendChild(optionPers);
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
	administration.addHomelessPerson(person);
};

apartment.onFloorCreated = function(apartment){
	administration.addApartment(apartment);
};

apartment.onFloorDeleted = function(apartment){
	administration.deleteApartment(apartment);
};

document.querySelector(".movement .movement-form").addEventListener("submit", function(event){
	event.preventDefault();
	administration.onSelection();
});