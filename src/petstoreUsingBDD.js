"use strict";
class Pet {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Name: " + this.name);
    }
}
class Dog extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log("Bow Bow");
    }
}
class Cat extends Pet {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    meow() {
        console.log("meow meow");
    }
}
class Fish extends Pet {
    constructor(name, species) {
        super(name);
        this.species = species;
    }
    swim() {
        console.log("Swim");
    }
}
class Reptile extends Pet {
    constructor(name, moving) {
        super(name);
        this.moving = moving;
    }
    slithering() {
        console.log("The snake is slithers away");
    }
}
class Bird extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    cuckoo() {
        console.log("cuckoo cuckoo");
    }
}
const myDog = new Dog("Lucky", "Lab");
const myCat = new Cat("Sheeru", "Black");
const myFish = new Fish("Nemo", "Shark");
const myReptile = new Reptile("Iush", "Snake");
const myBird = new Bird("Becky", "Cuckoo");
myDog.displayInfo();
myDog.bark();
myCat.displayInfo();
myCat.meow();
myFish.displayInfo();
myFish.swim();
myReptile.displayInfo();
myReptile.slithering();
myBird.displayInfo();
myBird.cuckoo();
