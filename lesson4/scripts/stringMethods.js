const testString = "Hello, World    ";

console.log(testString.length); // ამით ვიგებთ სტრიქონის ზომას

console.log(testString.charAt(0)); // ამით ვიგებთ კონკრეტულ ინდექსზე არსებულ ელემენტს;

console.log(testString.indexOf("l")); // ამით ვიგებთ კონკრეტული სიმბოლოს პირველი გამოჩენა თუ რა ინდექსზეა განთავსებული

console.log(testString.lastIndexOf('l')); // ამით ვიგებთ თუ კონკრეტული სიმბოლო ბოლოჯერ რომელ ინდექსზე გვხვდება

console.log(testString.substring(0, 5)) // ამით გამოგვაქვს ქვე სტრიქონი დაწყებული სასურველი ინდექსიდან დამთავრებული სასურველ ინდექსამდე.

console.log(testString.toUpperCase()) // ამით გადაგყვას ყველა სიმბოლო ზედა რეგისტრში.

console.log(testString.toLowerCase()) // ამით გადაგყვას ყველა სიმბოლო ზედა რეგისტრში.

console.log(testString.trim()) // ამის მეშვეობით შეგვიძლია ცარიელი სივრცეები მოვაშოროთ სტრიქონიდან.