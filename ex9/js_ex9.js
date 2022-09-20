//Ex:9 JavaScript Objects
//Ex9.1 JavaScript Object .property
const person1 = {
    firstName: "Javascript",
    lastName: "Man",
    age: 30,
    eyeColor: "Brown"};

//Display some data from the object:
document.getElementById("ex9-1").innerHTML = person1.firstName + " " + person1.lastName + " is " + person1.age + " years old and "
 + person1.eyeColor + "eye.";


//9.2 Javascript Objects [property]
//create an object:
const person2 ={
    firstName: "HTML",
    lastName: "Woman",
    age: 26,
    eyeColor: "Blue"};
//Display some data from the object:
document.getElementById("ex9-2").innerHTML = person2["firstName"] + " " + person2["lastName"] + " is " + person2["age"] + " years old and " + person2["eyeColor"] + "eyes.";

//Ex9.3 Javascript Objects Function as a Method
//Create an object:
const person3 = {
    firstName: "",
    lastName: "Boy",
    age: 8,
    eyeColor: "Green",
    fullPerson: function(){
        return this.firstName + " " + this.lastName + " is " + this.age + " years old and " + this.eyeColor + "eyes.";
    }
}

//Display some data from the object:
document.getElementById("ex9-3").innerHTML = person3.fullPerson();