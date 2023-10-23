function checkIfSignedIn() {
    let dataFromDb = localStorage.getItem("usersData");
    let dataFromSessionStorage = sessionStorage.getItem("sessionToken");
    let cookie = document.cookie;

    let splitedCookie = cookie.split('; ');
    
    let desiredCookie = splitedCookie.filter(cookie => cookie.includes("sessionToken"));

    if (desiredCookie.length === 0) {
        desiredCookie = null;
    } else  {
        desiredCookie = desiredCookie[0];
    
        desiredCookie = desiredCookie.slice(desiredCookie.indexOf("=")+1);

    }

    // let sessionToken = [desiredCookie, dataFromSessionStorage];

    // if (sessionToken.every(item => item === undefined)) 

    let sessionToken = desiredCookie ? desiredCookie: dataFromSessionStorage ? dataFromSessionStorage: null; 

    if (sessionToken === null)
    {   
        document.getElementById("signOut").style.display = "none";
        let newMessage = document.createElement("p");
        
        newMessage.innerText = "Opps, you need to be logged in to access this page!!";

        document.body.appendChild(newMessage);
    } else {
        document.getElementById("signOut").style.display = "block";
        dataFromDb = JSON.parse(dataFromDb);

        for (let userData of dataFromDb) {
            if (userData.sessionToken === sessionToken) {
                let welcomeMessage = document.createElement("p");

                welcomeMessage.innerText = `Welcome to the posts page Mr.Mrs ${userData.firstName} ${userData.lastName}`
                
                document.body.appendChild(welcomeMessage);
            }
        }
    }

}

function userSignOut() {
    sessionStorage.clear();
    document.cookie = '';
    // window.location.reload();
}