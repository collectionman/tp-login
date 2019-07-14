var users = [
    {
        username: 'Paul',
        password: '9dg67bskcnadlop',
        permission: 'ADMIN' 
    },
    {
        username: 'Steve',
        password: 'owiu992bdsd11po',
        permission: 'COMMON'
    }
] 

let usernameTextField = document.getElementById('username-text-field') ;
let passwordTextField = document.getElementById('password-text-field') ;

let loginButton = document.getElementById('login-button') ;
loginButton.addEventListener('click', function() {
    const username = usernameTextField.value ;
    const password = passwordTextField.value ;

    users.forEach( user => {
        if (user.username == username && user.password == password) {
            console.log(`You're logged as ${user.permission}`) ;
        } else {
            console.log(`That user doesn't exists`) ;
            addNewUserAsCommon({username: username, 
                                password: password, 
                                permission: 'COMMON'}) ;
        }    
    }) ;
}) ;

function addNewUserAsCommon(user) {
    users.push({username: user.username, 
                password: user.password, 
                permission: user.permission}) ;
}