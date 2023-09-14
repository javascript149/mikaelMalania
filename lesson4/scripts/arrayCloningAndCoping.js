let originalArray = [5,3,1,2,4];

let anotherArray = originalArray;

// 1. by using the spread operator
let shadowCopiedArray = [...originalArray];
shadowCopiedArray.pop();

// 2. by using the Array.from() it's better known as the Shallow Copy
let shallowCopy = Array.from(originalArray);
// shallowCopy.pop()

let anotherShallowCopy = originalArray.concat();

let shallowCopyN2 = originalArray.slice();

let deepCopy = JSON.parse(JSON.stringify(originalArray));

console.log(`I sorted this array ${originalArray} and the sorted version looks like this: ${deepCopy.sort()}`)