
let firstName = document.getElementById('first-name').value;
let lastName = document.getElementById('last-name').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

// document.getElementById(signup).addEventListener('submit', function(event) {
//     event.preventDefault();

if (hasWhiteSpace(firstName)||hasWhiteSpace(lastName)||hasWhiteSpace(email)||hasWhiteSpace(password))  {
    alert ("please remove whitespace character from input");
    return;
}

