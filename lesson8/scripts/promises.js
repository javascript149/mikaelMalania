function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("Data Fetched successfully");
            resolve();
        }, 3000);
    })
};

function processData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('Data processing complated');
            resolve();
        }, 3000);
    });
};

fetchData().then(processData).then(function() {
    console.log("All operations complated");
}).catch(function(error) {
    console.error("An error occured:", error);
})