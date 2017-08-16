personCreator.onPersonCreated = function (person) {
    administration.addHomelessPerson(person);
};

apartment.onFloorCreated = function (apartment) {
    administration.addApartment(apartment);
};

apartment.onFloorDeleted = function (apartment) {
    administration.deleteApartment(apartment);
};