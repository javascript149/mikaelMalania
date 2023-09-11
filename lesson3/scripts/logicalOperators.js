// თუ მაღაზია ღიააა ჩავდივართ მაღაზიაში და ვყიდულობთ პროდუქტს, თუ დაკეტილია ვამბობთ რომ დაკეტილია და ვერ ჩავალთ

// const givenInfoFromUser = prompt('is the shop open?');

// ჯავასკრიპტში ერთი =, ნიშნავს იმას, რომ შენ რაღაც ცვლადს ანიჭებ რაღაც მნიშვნელობას
// == (ორი ტოლია) ნიშნავს იმას რომ შენ რაღაც ტოლიას მარცხნივ არსებულ მნიშვნელობას ადარებ ორმაგი ტოლიას მარჯვნივ არსებულ მნიშნველობას
// === (სამი ტოლია) ნიშნავს იმას, რომ შენ რაღაც ტოლიას მარცხნივ არსებულ მნიშვნელობას ადარებ ორმაგი ტოლიას მარჯვნივ არსებულ მნიშნველობას, 
// მაგრამ განსხვავებით ორი ტოლიასი აქ ორივე შესადარებელი ელემენტი ჯერ იღებს ერთსადაიმავე მნიშნველობის ტიპს და მხოლოდ შემდგომ დარდება ისინი ერთმანეთს.
// ანუ თუ ერთია Int ხოლო მეორეა String, ორივე გადადის მარჯვნივ არსებულ ელემენტის ტიპში და შემდგომ დარდება ისინი ერთმანეთს.

// if ("15" === 'yes') { // შედგება პირობისაგან ()<= აქ რაც იწერება და შედგება მოქმედებისაგან {} <= რაც აქ იწერება.
//     alert("I can go and buy some products")
// } else if (givenInfoFromUser === 'no') {
//     alert("Shop is closed so I can't go to buy anything");
// } else {
//     alert("Opps, I did not understad what you said.")
// }

// let userAge = prompt("Please enter your age: ");

// if (userAge <= 17) { // if იშიფრება როგორც თუ
//     alert("Sorry, you're not allowed to enter!");
// } else if (userAge > 17 ) { // else if იშიფრება როგორც, სხვა შემთხვევაში თუ
//     alert("Yes you can enter the club!");
// } else { // else იშიფრება როგორც, ნებისმიერ სხვა შემთხვევაში
//     alert("Sorry, I don't undestand");
// }

// let isShopOpened = prompt("Is shop opened?");

// if (isShopOpened === "yes") {
//     let isPersonWorking = prompt("Is Ana working there?");
//     if (isPersonWorking === "yes") {
//         alert("Great, now I can go and give this info to my parents");
//     } else if (isPersonWorking === "no") {
//         alert("Opps, she is not working");
//     }
// } else if (isShopOpened === "no") {
//     alert("Opps, shop is closed");
// }

let isShopOpened = true;
let isSunnyOutside = true;

if (isShopOpened === true && isSunnyOutside === true) { // && <= წარმოადგენს "და"-ს
    alert("I can go to shop");
}

let isFoggy = true;
let isRaining = true;

// if (isFoggy === true || isRaining === true || isShopOpened === false) { // || <= წარმოადგენს "ან"-ს.
//     alert("Opps, I guess you should stay for now.")
// } 