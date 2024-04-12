class Pet {
    name: string;
 
    constructor(name: string) {
        this.name = name;
    }
    displayInfo(): void {
        console.log("Name: " + this.name);
    }
}
class Dog extends Pet {
    breed: string;
 
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
    bark(): void {
        console.log("Bow Bow");
    }
}
 
class Cat extends Pet {
    color: string;
 
    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }
    meow(): void {
        console.log("meow meow");
    }
}
 
class Fish extends Pet {
    species: string;
 
    constructor(name: string, species: string) {
        super(name);
        this.species = species;
    }
    swim(): void {
        console.log("Swim");
    }
}
class Reptile extends Pet {
    moving: string;
 
    constructor(name: string, moving: string) {
        super(name);
        this.moving = moving;
    }
 
    slithering(): void {
        console.log("The snake is slithers away");
    }
}
class Bird extends Pet {
    breed: string;
 
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
    cuckoo(): void {
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