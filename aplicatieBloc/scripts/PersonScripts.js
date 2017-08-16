const personCreatorFactory = function () {
    const personFactory = (name, age) => ({
        name: name,
        age: age
    });

    const persons = [];

    const personCreator = {
        pushPerson(name, age) {
            const person = personFactory(name, age);
            persons.push(person);

            const li = document.createElement("li");
            li.innerText = person.name + " cu varsta de " + person.age + " ani";

            const ol = document.querySelector(".residents .resident-list");
            ol.appendChild(li);

            this.onPersonCreated(person);
        },
        onPersonCreated() {
        }
    };

    document.querySelector(".residents .registration-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector(".person-name").value;
        const age = document.querySelector(".person-age").value;
        personCreator.pushPerson(name, age);



        event.target.reset();
    });

    return personCreator;
};
const personCreator = personCreatorFactory();

