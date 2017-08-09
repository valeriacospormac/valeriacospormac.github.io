/*left section*/
function person(name, age) {
	return {
		name: name,
		age: age
	}
}

let residents = [];

document.querySelector("#register").addEventListener("click", function(event){
	let yourName = document.querySelector("#name").value;
	let yourAge = document.querySelector("#age").value;
	residents.push(person(yourName, yourAge));
	let list = document.querySelectorAll("li");
	if(residents.length <= list.length) {
		for(i = 0; i < document.querySelectorAll("li").length; i++) {
			document.querySelectorAll("li")[i].innerText = residents[i].name + " cu varsta de " + residents[i].age + " ani";
		}
	} else {
		alert("Nu mai exista locuri disponibile");
	}
});

/*center section*/


/*right section*/