personCreator.onPersonCreated = function (person) {
    administration.addHomelessPerson(person);
};

apartment.onFloorCreated = function (apartment) {
    administration.addApartment(apartment);
};

apartment.onFloorDeleted = function (apartment) {
    administration.deleteApartment(apartment);
};
apartment.onOccupyApartment = function () {
    administration.removePerson(document.querySelector(".person-list").options[document.querySelector(".person-list").selectedIndex]);
    administration.removeApartment(document.querySelector(".apartments-list").options[document.querySelector(".apartments-list").selectedIndex]);
};
administration.onSelection = function () {
    const personSelected = document.querySelector(".person-list").options[document.querySelector(".person-list").selectedIndex].text;
    const apartmentSelected = document.querySelector(".apartments-list").options[document.querySelector(".apartments-list").selectedIndex].innerText;
    apartment.occupyApartament(personSelected, apartmentSelected);
};
