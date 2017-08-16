const administration = {
    addHomelessPerson(person) {
        const optionPers = document.createElement("option");
        optionPers.innerText = person.name;
        document.querySelector(".person-list").appendChild(optionPers);
    },
    addApartment(apartment) {
        const optionAp = document.createElement("option");
        optionAp.innerText = apartment.innerText;
        document.querySelector(".apartments-list").appendChild(optionAp);
    },
    deleteApartment() {
        const apartmentsList = document.querySelector(".apartments-list");
        apartmentsList.removeChild(apartmentsList.lastChild);
        apartmentsList.removeChild(apartmentsList.lastChild);
    },
    removePerson() {
        const persSelected = document.querySelector(".person-list").options[document.querySelector(".person-list").selectedIndex];
        document.querySelector(".person-list").removeChild(persSelected);
    },
    removeApartment() {
        const apSelected = document.querySelector(".apartments-list").options[document.querySelector(".apartments-list").selectedIndex];
        document.querySelector(".apartments-list").removeChild(apSelected);
    },
    onSelection() {
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

document.querySelector(".movement .movement-form").addEventListener("submit", function (event) {
    event.preventDefault();
    administration.onSelection();
});