let isShopOpened = prompt("Is shop opened? ");

switch(isShopOpened) {
    case "yes": // ამ ვარიანტში ქენი ეს else if
        alert("You can go to shop");
        break;
    case "yea":
        alert("You can go to shop");
        break;
    case "no":
        alert("you can't go to the shop");
        break;
    default: // სხვა ყველაფერი თუ არ შესრულდა, ნაგულისხმევია, რომ ეს მოქმედება შესრულდეს else-ის ვარიანტია
        alert("Opps, I did not understand what you wanted to say")
}

let yourAge = 15;

switch(yourAge <= 17) {
    case true:
        alert("You cant go to club")
    case false:
        alert("you can go to club")
} 