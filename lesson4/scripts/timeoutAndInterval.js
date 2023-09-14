// console.log("Start of the Program.")
// let seconds = 3;

setTimeout(function() {
    console.log("This code will run after 3 seconds.")
}, seconds * 1000)

// console.log("End of the program.")

let count = 0;

function printCount() {
    console.log(`Count: ${count}`);
    count = count + 1;
    
    if (count > 5) {
        clearInterval(intervalId);
        console.log('Interval stopped.')
    }
}

console.log("start of the program");

const intervalId = setInterval(printCount, 1000)

console.log("End of the program");