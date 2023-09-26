let calcInput = document.getElementById("calculatorInput");
let mathSymbols = ["+", "-", "*", "÷"]

function plusHandler() {
    let currentValue = calcInput.value;
    // for (let symbol of mathSymbols) {
    //     if (!currentValue.includes(symbol)) {
    //     }
    // }
    calcInput.value = calcInput.value + "+";

}

function minusHandler() {
    calcInput.value = calcInput.value + "-";
}

function sevenHandler() {
    calcInput.value = calcInput.value + "7";
}

function eightHandler() {
    calcInput.value = calcInput.value + "8";
}

function nineHandler() {
    calcInput.value = calcInput.value + "9";
}

function equalsHandler() {
    if (calcInput.value.includes("+")) {
        let splitNumbers = calcInput.value.split("+");
        let sum = 0;

        for (let number of splitNumbers) {
            sum = sum + Number(number);
        }
        calcInput.value = sum;
    } else if (calcInput.value.includes("-")) {
        let splitNumbers = calcInput.value.split("-");
        calcInput.value = Number(splitNumbers[0]) - Number(splitNumbers[1]);
    }
}