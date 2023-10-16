function handleRegistration() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let oldUsersData = localStorage.getItem('usersData');
    oldUsersData = JSON.parse(oldUsersData);

    let user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    };

    // აქ დავამატოთ ლოგიკა რომელიც შეამოწმებს არის თუ არა მომხმარებელი უკვე რეგისტრირებული
    // შეყვანილი ემაილითა თუ პაროლით მინიშნება: გამოიყენეთ ციკლური ოპერაციები. მაგ. for ციკლი.

    if (oldUsersData === null) {
        localStorage.setItem('usersData', JSON.stringify([user]));
    } else {
        oldUsersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(oldUsersData));
    }

    

}