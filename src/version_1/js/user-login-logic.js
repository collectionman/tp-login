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
    },
    {
        username: 'Laura',
        password: 'smcq0192nzlasl3',
        permission: 'COMMON' 
    }
]

const images = [
    '../../styles/images/ny.jpg',
    '../../styles/images/dubai.jpg',
    '../../styles/images/singapore.jpg',
    '../../styles/images/london.jpg',
    '../../styles/images/montreal.jpg'
]

var expanded = false ;

const usernameTextField = document.getElementById('username-text-field') ;
const passwordTextField = document.getElementById('password-text-field') ;
const closeButton = document.getElementById('close-button') ;
const expandButton = document.getElementById('expand-button') ;


document.addEventListener("DOMContentLoaded", () => { 
    document.querySelector('body').style.backgroundImage = `url(${images[getRandomInt(images.length)]})` ;
}) ;

const loginButton = document.getElementById('sign-in-button') ;
loginButton.addEventListener('click', function() {
    const username = usernameTextField.value ;
    const password = passwordTextField.value ;

    var userExists = false ;

    users.forEach( user => {
        if (user.username == username && user.password == password) {
            console.log(`You're logged as ${user.permission}`) ;
            userExists = true ;
        }  
    }) ;

    if (!userExists) {
        console.log(`That user doesn't exists`) ;
        addNewUserAsCommon({username: username, 
                            password: password, 
                            permission: 'COMMON'}) ;
    }
}) ;

function addNewUserAsCommon(user) {
    users.push({username: user.username, 
                password: user.password, 
                permission: user.permission}) ;
}

closeButton.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = "none" ;
}) ;

expandButton.addEventListener('click', expandModalContent) ;

function expandModalContent() {
    if (!expanded) {
        document.querySelector('.modal-content').style.width = "80%" ;
        document.querySelector('.modal-content').style.height = "80%" ;
        expanded = true ;
    } else {
        document.querySelector('.modal-content').style.width = "500px" ;
        document.querySelector('.modal-content').style.height = "300px" ;
        expanded = false ; 
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}