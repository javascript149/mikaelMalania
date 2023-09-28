document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const fileContents = document.getElementById("fileContents");

    fileInput.addEventListener('change', function(event) {
        const selectedFile = event.target.files[0];
        console.log(selectedFile)
        // undefined
        // null
        // if (selectedFile !== null || selectedFile !== undefined)
        if (selectedFile) {
            readFileAsync(selectedFile).then(function(content) {
                fileContents.textContent = content;
            }).catch(function(error) {
                fileContents.textContent = "Error: " + error.message;
            })
        } else {
            fileContents.textContent = "No file selected.";
        }

    })

    function readFileAsync(file) {
        return new Promise(function(resolve, reject) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const fileData = event.target.result;
                resolve(fileData);
            };

            reader.onerror = function() {
                reject(new Error('Error reading the file.'));
            };

            reader.readAsText(file);
        })
    }
});