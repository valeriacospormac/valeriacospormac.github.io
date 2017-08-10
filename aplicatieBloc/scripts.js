/*left section*/
function personFactory(name, age) {
	return {
		name: name,
		age: age
	}
}

let residents = [];

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
});

/*center section*/
document.querySelector(".apartments .create").addEventListener("click", function(event){
	


	if(document.querySelectorAll(".floor").length < 5) {
		const divFloor = document.createElement("div");
		document.querySelector(".apartment-floor").appendChild(divFloor);
		divFloor.classList.add("floor");

		const divApartment = document.createElement("div");
		divFloor.appendChild(divApartment);
		divApartment.classList.add("apartment");

		const divApartment1 = document.createElement("div");
		divFloor.appendChild(divApartment1);
		divApartment1.classList.add("apartment");
	} else {
		alert("Nu mai sunt locuri disponibile pentru a crea apartamente !");
	}
});

document.querySelector(".apartments .delete").addEventListener("click", function(event){
	document.querySelector(".floor").remove();
});

/*right section*/