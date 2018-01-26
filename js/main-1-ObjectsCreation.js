// START
console.log("STARTING");
// 1. variables

let person1Name = "Bernat Ferragut";
let person1Age = 99;
function greetPerson1() {
    console.log(person1Name + "is " + person1Age + " years old");
}
greetPerson1();

let person2Name = "Llorenc Ferragut";
let person2Age = 33;
function greetPerson2() {
    console.log(person2Name + "is " + person2Age + " years old");  
}
greetPerson2();


// 2. JS objscts {}
let person1 = {
    name : "Bernat Ferragut",
    age : 43,
    greet : function() {
        console.log(this.name + " is " + this.age + " years old");
    }
};

person1.greet();

let person2 = {
    name : "Llorenc Ferragut",
    age : "36",
    greet : function() {
        console.log(this.name + " is " + this.age + " years old");
    }
};

person2.greet();

// 3. constructor functions

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(this.name + " is " + this.age);
    }
}

let bernat = new Person("Bernat Ferragut", 43);
bernat.greet();

let llorenc = new Person("Llorenc Ferragut", 36);
llorenc.greet();

// 4. classes

