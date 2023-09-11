// function sayHello() {
//     return "Hello, World";
// }

// alert(sayHello());

function calculator(number1,action,number2=0) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2;
    }
}

// let number1 = prompt("Enter first number: ");
// let number2 = prompt("Enter second number: ");
// let action = prompt("What should I do with them?");

// alert(calculator(number1,action, number2));

// let hello = () => {
//     return "hello, world";
// }

// alert(hello());

let calculatorArrowVariant = (number1,action,number2) => {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2;
    }
}

// alert(calculatorArrowVariant(5, "+", 9 ))

let color = "yellow";

if (color === "red") {
    alert("I like red");
} else {
    if (color === "yellow") {
        alert("I like it as well");
    } else {
        alert("I don't like it");
    }
}

alert(color === "red" ? "I like it" : color === "yellow" ? "I like it as well" : "I don't like it");