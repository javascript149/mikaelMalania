let firstName = "Peter";

const person = {
    firstName: "John",
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName}`);
    }
};

person.sayHello();