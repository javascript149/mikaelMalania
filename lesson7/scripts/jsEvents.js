function clickMeButtonHandler() {
    // const button = document.getElementById("testButton");
    const result = document.getElementById("result");

    result.innerHTML = "Button has been clicked!";

}

function userInputHandler() {
    const userInput = document.getElementById("userInputN1");
    const result = document.getElementById("result");

    if (userInput.value.length <= 3) {
        result.innerHTML = "Opps, username must be at least 4 chars long";
        result.style.color = "red";
    } else {
        result.innerHTML = "";
    };
}