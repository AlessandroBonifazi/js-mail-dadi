// Debug
console.log('JS OK!')

// Mail
const email = document.getElementById('email');

// Array
const emailList = ['email1@mail.com', 'email2@mail.com', 'email3@mail.com', 'email4@mail.com'];

login.addEventListener('click', function () {
    for (let i = 0; i < emailList.length; i++) {
        if (email.value === emailList[i]) {
            console.log('Welcome back!');
            break;
        } else {
            console.log('Wrong email!');
        }
    }
})




// Dice Game
