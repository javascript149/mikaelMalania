class Person {
    
    // კონსტრუქტორი წარმოადგენს სპეციალურ ფუნქციას რომელიც გამოიყენება ატრიბუტების ობიექტების ინიციალიზირებისთვის.
    // კონსტრუქტორები უმეტესად გამოიყენება კლასებთან მუშაობისას, რათა მოხდეს მასში საჭირო ობიეწქტებისა თუ კონკრეტული მონაცემების განსაზღვრა
    constructor(birthYear) {
        this.name = 'James';
        this.surname = 'Jackson';
        this.firstName = "Hanna";
        this.myAge = 25;
        this.birthYear = birthYear;
    }

    sayHello() {
        let firstName = "Hanna";
        return `Hello Mr.${name} ${this.surname}`
    }

    walk() {
        return "Hey, I'm walking" + this.firstName
    }

    ageCalculator() {
        return `You are ${2023 - Number(this.birthYear)}`
    }

    areYouOlder() {
        if (2023 - this.birthYear > this.myAge) {
            return 'You are older than me';
        } else {
            return "I'm older than you";
        }
    }

}

let james = new Person(1970);

// console.log(james.sayHello());
// console.log(james.walk());
// console.log(james.ageCalculator());
// console.log(james.areYouOlder());


class Animal {
    constructor(name, species) {
        this.name = name + " => data from the parent <= ";
        this.species = species;
        // console.log(this.name, 'hello');
    }

    makeSoundInParent(typeOfSound) {
        return "Some generic animal sound " + typeOfSound;
    }
}

// შვილობილი კლასი იღებს მონაცემებს მემკვიდრეობით მშობელი
// ცხოველთა (Animal) კლასიდან.
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }

    makeSound() {
        let dataFromParent = super.makeSoundInParent("Barks");
        return "Woof! Woof!" + " " + dataFromParent;
    }

    fetch() {
        return `${this.name} is fetching the ball.`;
    }
}

const dog = new Dog("Buddy", "Golden Retriver");

console.log(dog.name);
console.log(dog.makeSound());
console.log(dog.fetch());
