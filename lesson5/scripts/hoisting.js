console.log(number);
let number = 10;

console.log(sayHello());
function sayHello() {
    return "Hey my dear friend";
}
var c;

function hoistExample() {
    a = 15;
    let b = 25;
    c = 30;
};

hoistExample();

console.log(a);
// console.log(b);
console.log(c);