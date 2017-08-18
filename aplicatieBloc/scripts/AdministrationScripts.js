const administrationFactory = function () {

    const homelessPersons = [];
    const administration = {
        addHomelessPerson(person) {
            const optionPers = document.createElement("option");
            optionPers.innerText = person.name;
            document.querySelector(".person-list").appendChild(optionPers);
        },
        addApartment(apartament) {
            const optionAp = document.createElement("option");
            optionAp.innerText = apartament.innerText;
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
       /* onSelection() {
            const personSelected = document.querySelector(".person-list").options[document.querySelector(".person-list").selectedIndex].text;
            const apartmentSelected = document.querySelector(".apartments-list").options[document.querySelector(".apartments-list").selectedIndex].innerText;
            apartment.occupyApartament(personSelected, apartmentSelected);
        },*/
        onSelection(){
        },


        addHomelessPerson(homelessPerson) {
            homelessPersons.push(homelessPerson);
            const optionPers = document.createElement("option");
            optionPers.innerText = homelessPerson.name;
            document.querySelector(".person-list").appendChild(optionPers);
        }
    };

    document.querySelector(".movement .movement-form").addEventListener("submit", function (event) {
        event.preventDefault();
        administration.onSelection();
    });
    return administration;
};
const administration = administrationFactory();