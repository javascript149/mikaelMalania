// function formHandler() {
    // let firstName = document.getElementById()
// }

function firstNameValidator() {
    let firstName = document.getElementById("firstName").value;
    const firstNameValidationRegEx = /^[A-Za-z]{3,15}$/ig

    let firstNameRes = document.getElementById("firstNameRes")

    if (!firstName.match(firstNameValidationRegEx)) {
        firstNameRes.style.color = "red";
        firstNameRes.innerHTML = "Incorrect Format, blah blah";
    } else {
        firstNameRes.innerHTML = "";
    }
}