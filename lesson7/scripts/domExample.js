const resultWithId = document.getElementById("result");

resultWithId.innerHTML = "Here comes some value from javascript to HTML using the Id selector";

const resultWithClassName = document.getElementsByClassName("resultByClassName");
resultWithClassName[0].style.color = "red";

const resultWithTagName = document.getElementsByTagName("h3");

for (let index = 0; index < resultWithTagName.length; index = index + 1) {
    resultWithTagName[index].innerText = "Hey this changes element by tag name";
}

const resultWithName = document.getElementsByName("result");
resultWithName[0].innerText = "Some result from name";
resultWithName[0].style.backgroundColor = "green";

// ეს წარმოადგენს უნივერსალულ სელექტორს, რომელსაც შეუძლია ელემენტზე ინფორმაცია წამოღოს, როგორც Id-ის მეშვეობით ისე class-ის სახელის მეშვეობით.
const selectByQuery1 = document.querySelector("#someData");
console.log(selectByQuery1);

// ეს წარმოადგენს უნივერსალულ სელექტორს, რომელსაც შეუძლია ელემენტზე ინფორმაცია წამოღოს, როგორც Id-ის მეშვეობით ისე class-ის სახელის მეშვეობით.
const selectByQuery2 = document.querySelector(".someDataBox");

const selectAllByQuery = document.querySelectorAll(".someDataBox")

console.log(selectAllByQuery);








// resultWithTagName[0].innerText = "Hey this changes element by tag name";
// console.log()