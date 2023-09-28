// Callback მაგალითი

function fetchData(callback) {
    setTimeout(function() {
        console.log("Data fetched successfully");
        callback();
    }, 5000);
};

function processData() {
    console.log("Data processing complated");
}

// fetchData(processData);
// console.log("Some Process Here");

// Event Loop მაგალითი

console.log("Start");

setTimeout(function() {
    console.log("Timeout callback");
}, 3000);

console.log("End");