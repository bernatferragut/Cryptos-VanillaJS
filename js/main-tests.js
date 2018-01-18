// START
console.log("STARTING");
// 1. variables

let person1Name = "Bernat Ferragut";
let person1Age = 43;
function greetPerson1() {
    console.log(person1Name + "is " + person1Age + " years old");
}
greetPerson1();

let person2Name = "Llorenc Ferragut";
let person2Age = 36;
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



// 4. classes