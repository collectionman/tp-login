let usernameTextField = document.getElementById('username-text-field') ;
let passwordTextField = document.getElementById('password-text-field') ;

let loginButton = document.getElementById('login-button') ;
loginButton.addEventListener('click', () => {
    console.log('username: ' + usernameTextField.textContent.toString()) ;
    console.log('password: ' + passwordTextField.textContent.toString()) ;
}) ;