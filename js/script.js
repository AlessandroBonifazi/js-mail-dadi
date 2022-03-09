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
const play = document.getElementById('play');

const result = document.getElementById('result');

let playerShoot = document.getElementById('player-dice');

let cpuShoot = document.getElementById('cpu-dice');

play.addEventListener('click', function () {
    // game
    let playerDice = Math.floor(Math.random() * 6) + 1;
    let cpuDice = Math.floor(Math.random() * 6) + 1;
    // players rolls
    playerShoot.innerText = 'Player: ' + playerDice;
    cpuShoot.innerText = 'CPU: ' + cpuDice;
    // conditions
    if (playerDice > cpuDice) {
        console.log("You Win!");
        result.innerText = "You Win!"
    } else if (playerDice < cpuDice) {
        console.log("You Loose!");
        result.innerText = "You Loose!"
    } else {
        console.log("It's a Tie!");
        result.innerText = "It's a Tie!"
    }
})
