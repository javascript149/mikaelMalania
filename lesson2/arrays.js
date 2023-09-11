let arrayOfNames = ["George", "Niko", "Ann", "Mari", 1998, 2001, 2000, 1995.45, 1989.78];

// მასივში არსებული მე-6 ელემენტის ამოღება
// alert(arrayOfNames[5]);

// alert(arrayOfNames.length); // იგებს მასივის ზომას

arrayOfNames.pop(); // აცილებს ბოლო მონაცემს მასივიდან
arrayOfNames.pop();
arrayOfNames.pop();

// alert(arrayOfNames);

arrayOfNames.push("Natia"); // მასივში ახალი ელემენტის შეტანა ბოლო ინდექის შემდეგ.

// alert(arrayOfNames);

arrayOfNames.shift(); // აცილებს მასივის ყოველ პირველ(ნულ-ზე) ინდექსზე არსებულ ელემენტს;
// alert(arrayOfNames);

arrayOfNames.unshift("Davit"); // ამატებს ელემენტს მასივის საწყის ინდექსზე წინ (თავში).
// alert(arrayOfNames);

delete arrayOfNames[2]; // გამოიყენება მასივში არსებული კონკრეტული ელემენტის წასაშლელად ხსენებული ელემენტის ინდექსის მითითებით.
// alert(arrayOfNames);

let arrayOfSurnames = ["Shalutashvili", "Mebonia", "Papava", "Tavberidze", "Kavtaradze"];

let arrayOfNamesAndSurnames = arrayOfNames.concat(arrayOfSurnames); // ეს ბრძანება ახდენს ორი ან მეტი მასივის კომბინირებას.

// მულტი განზომილებიანი მასივის მაგალითი
let multiDiamentionalArray = ["giorgi", "qeti", "nika", ["mebonia", "shalutashvili", "tavberidze", ["asdasdasd"]]]

// alert(multiDiamentionalArray.flat()); // მულტი განზომილებიანი მასივი გადაყავს ერთ განზომილებიან მასივში ანუ აბრტყელებს (flat)

let myFavs = arrayOfSurnames.slice(1, 3); // ეს ბრძანება გამოიყენება მასივის დასაყოფად, იგი იღებს ორ პარამეტრს, საწყის და საბოლოო ინდექსებს, თუ მხოლოდ საწყის მივუთითებთ, მაქედან ბოლომდე გამოიტანს, ან თუ ორივეს ანუ საწყისსა და საბოლოოს მივუწერთ მაშინ ამ დიაპაზონში გამოგვიტანს გაფილტრულ მონაცემებს.
// alert(myFavs);

arrayOfSurnames.splice(2, 3, "Sofo", "Sandro"); // ეს ბრძანება გამოიყენება მასივში არსებული ელემენტების როგორც წასაშლელად ისე მასში ახალი ელემენტების ჩასამატებლად. განსხვავებით სხვა ბრძანებებისა ეს ბრძანება იძლევა საშუალებას, რომ ჩვენთვის სასრუველი ნაწილის ფილტრაცია დავიწყოთ მაგალითან შუა ნაწილიდან ამოვშალოთ 2 ელემენტი და მათ მაგივრად ჩავამატოთ სხვა ახალი ორი ელემენტი.

// alert(arrayOfSurnames);