const apartmentFactory = function () {

    const apartment = {
        indexAp: 1,
        createApartment() {
            if (document.querySelectorAll(".floor").length < 5) {
                const divFloor = document.createElement("div");
                document.querySelector(".apartment-floor").appendChild(divFloor);
                divFloor.classList.add("floor");

                let divApartment = document.createElement("div");
                divFloor.appendChild(divApartment);
                divApartment.classList.add("apartment");
                divApartment.innerText = `Apartament ${apartment.indexAp++}`;
                this.onFloorCreated(divApartment);

                divApartment = document.createElement("div");
                divFloor.appendChild(divApartment);
                divApartment.classList.add("apartment");
                divApartment.innerText = `Apartament ${apartment.indexAp++}`;
                this.onFloorCreated(divApartment);
            } else {
                alert("Nu mai sunt locuri disponibile pentru a crea apartamente !");
            }
        },
        deleteApartment() {
            if (document.querySelectorAll(".floor").length > 0) {
                const apartmentFloor = document.querySelector(".apartment-floor");
                apartmentFloor.removeChild(apartmentFloor.lastChild);
                apartment.indexAp = apartment.indexAp - 2;
                this.onFloorDeleted(apartmentFloor);
            } else {
                alert("Nu mai sunt etaje disponibile pentru a fi demolate !");
            }
        },
        occupyApartament(personSelected, apartmentSelected) {
            const apartmentArray = document.querySelectorAll(".apartment");
            for (let i = 0; i < apartmentArray.length; i++) {
                if (apartmentArray[i].innerText === apartmentSelected) {
                    apartmentArray[i].innerText = personSelected;
                    apartmentArray[i].style.backgroundColor = "white";
                    apartmentArray[i].style.color = "black";
                    /*administration.removePerson(personSelected);
                    administration.removeApartment(apartmentSelected);*/
                    this.onOccupyApartment();
                }
            }
        },
        onFloorCreated() {
        },
        onFloorDeleted() {
        },
        onOccupyApartment() {
        }
    };

    document.querySelector(".apartments .create").addEventListener("click", function () {
        apartment.createApartment();
    });

    document.querySelector(".apartments .delete").addEventListener("click", function () {
        apartment.deleteApartment();
    });

    return apartment;
};
const apartment = apartmentFactory();