let jsonData = `{
    "fruit": "Apple",
    "size": "Large",
    "color": "Red"
}`

// JSON.parse()-ის მეშვეობით ჩვენ შეგვიძლია გადავაკონვერტიროთ სტრიქონულ ფორმატში რეპრეზენტირებული JSON-ი, json-ფორმატში რეპრეზენტირებულ json-ად.
const dataInjsonType = JSON.parse(jsonData);
// console.log(dataInjsonType.fruit);

// JSON.stringify()-ის მეშვეობით შეგვიძლია Json ფორმატში არსებული json მონაცემები გადავაკონვერტიროთ სტრიქონულ ტიპის მონაცემებად.
const jsonDataInStringType = JSON.stringify(dataInjsonType);
// console.log(jsonDataInStringType);

// ლოკალურ მეხსიერებაში ახალი მონაცემის დამატება
localStorage.setItem("sampleKey", "sampleValue");

// ლოკალური მეხსიერებიდან არსებული მონაცემის წამოღება გასაღების მეშვეობით.
let dataFromLocalDb = localStorage.getItem("sampleKey");

// ლოკალური მეხსიერებიდან არსებული მონაცემის წაშლა გასაღების მეშვეობით.
localStorage.removeItem("sampleKey");

// ლოკალური მეხსიერებიდან ყველა არსებული გასაღებისა და მნიშვნელობის ერთდროულად წაშლა.
// localStorage.clear()

// ლოკალური მეხსიერებიდან კონკრეტულ ინდექსზე არსებული ელემენტის წამოღება.
const keyAtIndex = localStorage.key(1);

// ლოკალურ მეხსიერებაში არსებულ ყველა ელემენტის დათვლა.
const lengthOfAllItems = localStorage.length
console.log(lengthOfAllItems);