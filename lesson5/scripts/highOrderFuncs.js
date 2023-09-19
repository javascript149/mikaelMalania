// const numbers = [((((1+2)+3)+4)+5)];
const numbers = [1,2,3,4,5];

// map ფუნქცია იძლევა საშუალებას, რომ გადავუაროთ მასზე გამოყენებული მასივის თითოეულ ელემენტს და დავაბრუნოთ
// ახალი მასივი, რომელშიც იქნება გათვალისწინებული ჩვენი ის ოპერაციები, რომლებიც მასში გამოვიყენეთ.
const doubledNumbers = numbers.map(number => number * 2);

const doubledNumbersV2 = numbers.map(function (number) {
    return number * 2;
});

// filter ფუნქცია გამოიყენება ფუნქციებზე სამუშაოდ, იგი ახდენს მასივში არსებული თითოეული ელემენტის შემოწმებას
// იმისთვს, რომ დარწმუნდეს თუ ხვდება ფილტრაციის პირობა მასივში არსებულ კონკრეტულ ელემენტს. თუ ხვდება
// მაშინ იგი, აბრუნებს ამ მონაცემს, სხვა მხრივ კი ტოვებს მაგ ნაწილს.
const evenNumbers = numbers.filter(number => number % 2 === 0);
const evenNumbersV2 = numbers.filter(function (number) {
    if (number === 3) {

    }
    return number % 2 === 0;
});

// console.log(evenNumbers, evenNumbersV2);

// reduce ფუნქციას გააჩნია ორი მამოძრავებელი პარამეტრი ესაა, მაკუმულირილებელი(accumulator) და ახლანდელი(current) პარამეტრები 
// შენიშვნა: ამ ორ პარამეტრს დავარქვით ესე რადგან ეს ორი სიტყვა აღწერს საუკეთესოდ იმას თუ რას ახორციელებს reduce-ის ეს ორი პარამეტრი
// ხოლო იგი ემსახურება მასივში არსებული სიმრავლის ერთ საბოლოო სიდიდემდე დაყვანას, სადაც მაკუმულირილებელი პარამეტრი იღებს 
// ყოველთვის ერთით წინა პარამეტრს ახლანდელი(current) პარამეტრთან შედარებით.

const sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
})

// console.log(sum)

const fruits = ["cherry", "apple", "banana"];

const sortedFruits = fruits.sort();

const people = [
    {
        name: "John", age: 30
    }, 
    {
        name: "Alice", age: 25
    }, 
    {
        name: "Bob", age: 35
    }, 
    
]

const sortedNumbersDesc = [21,12,9,23,25].sort(function(a,b) {
    return b - a;
});

const sortedPplByAge = people.sort(function(a,b) {
    return a.age - b.age;
});

// console.log(sortedPplByAge);

const sortedFruitsAsc = fruits.sort(function(a, b) {
    return a.localeCompare(b);
});
// console.log(sortedFruitsAsc);

// some გამოიყენება, მაშინ როდესაც ერთი ელემენტი მაინც აკმაყოფილებს მასში მოცემულ პირობას.
// იგი გვიბრუნებს ლოგიკურ true, false მნიშვნელობას.

const hasEven = numbers.some(number => number % 2 === 0);
const hasEvenV2 = numbers.some(function(number) {
    return number % 2 === 0;
});


const numbersV2 = [2,4,6,8,10];

// every() გამოიყენება მაშინ, როდესაც გვინდა დავადასტუროთ, რომ მასზედ მიწოდებული ელემენტები ყველა აკმაყოფილებს მოცემულ პირობას
// იგი გვიბრუნებს ლოგიკურ true, false მნიშვნელობას.

const allEven = numbersV2.every(number => number % 2 === 0);
console.log(allEven);

// find ზედა ორდერის ფუნქცია გვეხმარება ვიპოვოთ მასივში არსებული ის პირველი ელემენტი, რომელიც დააკმაყოფილებს find ფუნქციაში ჩვენს მიერ მითითებულ პირობას.
const found = numbers.find(number => number > 3);
const foundV2 = numbers.find(function (number) {
    return number > 3;
});

console.log(found, foundV2);