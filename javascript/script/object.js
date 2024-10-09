
let cat = {name: "lucy", color: "golden-brown", age: 3};
let dog = new Object();
dog.breed = "Huskey";
dog.name = "Jackey";
dog.isVaccinated = true;

document.getElementById("paral").innerHTML = "breed" + dog.breed + "<br> isVaccinated:" + dog.isVaccinated

console.log(dog);
delete dog.isVaccinated;
dog.age = 5;



// Create an Object
const person = {
    firstName: "Kalden",
    lastName: "Tamang",
    age: 21,
    fullname: function() {
        return this.firstName + " " + this.lastName;
    }
  };
  document.getElementById("paral").innerHTML = person.fullname();


