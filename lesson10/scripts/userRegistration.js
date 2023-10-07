function registerUser() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let registerUser = document.getElementById("registerUser");

    let exsistingDb = localStorage.getItem("usersData");

    if (exsistingDb === null || exsistingDb.length === 0) {

        let usersArray = [];

        usersArray.push({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
        })

        localStorage.setItem("usersData", JSON.stringify(usersArray))
    } 

    if (exsistingDb.length > 0) {
        exsistingDb = JSON.parse(exsistingDb);
        exsistingDb.push({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
        })

        localStorage.setItem("usersData", JSON.stringify(exsistingDb))

    }
    
    // console.log(exsistingDb)

}