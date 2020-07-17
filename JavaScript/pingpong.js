var ball = document.getElementById("pingpongBall");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var score, maxScore, movement, player, ballSpeedX = 2,
    ballSpeedY = 2;
var gameon = false;

var windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

const storeName = "PPName";
const storeScore = "PPMaxScore";
const player1Name = "Player 1";
const player2Name = "Player 2";
(function() {
    player = localStorage.getItem(storeName);
    maxScore = localStorage.getItem(storeScore);

    if (player === "null" || maxScore === "null") {
        alert("This is the first time you are playing this game. LET'S START");
        maxScore = 0;
        player = "player1"
    } else {
        alert(player + " has maximum score of " + maxScore * 100);
    }

    resetBoard(player);
})();

function resetBoard(playerName) {


    player1.style.left = (window.innerWidth - player1.offsetWidth) / 2 + 'px';
    player2.style.left = (window.innerWidth - player2.offsetWidth) / 2 + 'px';
    ball.style.left = (windowWidth - ball.offsetWidth) / 2 + 'px';


    // Lossing player gets the ball
    if (playerName === player1Name) {
        ball.style.top = (player1.offsetTop + player1.offsetHeight) + 'px';
        ballSpeedY = 2;
    } else if (playerName === player2Name) {
        ball.style.top = (player2.offsetTop - player2.offsetHeight) + 'px';
        ballSpeedY = -2;
    }

    score = 0;
    gameon = false;
}

function storeWin(player, score) {
    if (score > maxScore) {
        maxScore = score;
        localStorage.setItem(storeName, player);
        localStorage.setItem(storeScore, maxScore);
    }
    clearInterval(movement);
    resetBoard(player);
    window.alert(player + " Wins the Score of " + (score * 100) + ".Max Score is: " + (maxScore * 100));
}
window.addEventListener('keypress', function(event) {
    let code = event.keyCode;
    let rect = player1.getBoundingClientRect();
    if (code === 100) {
        if (rect.x + player1.offsetWidth + 5 < window.innerWidth) {
            player1.style.left = parseInt(rect.x + 20) + 'px';
            player2.style.left = parseInt(rect.x + 20) + 'px';
        }
    } else if (code === 97) {
        if (rect.x > 0) {
            player1.style.left = parseInt(rect.x - 20) + 'px';
            player2.style.left = parseInt(rect.x - 20) + 'px';
        }
    }
    if (code === 13) {
        console.log(code);
        if (!gameon) {
            gameon = true;
            let ballrect = ball.getBoundingClientRect();
            let ballX = ballrect.x;
            let ballY = ballrect.y;
            let ballDia = ballrect.width;
            console.log(ballDia);


            let player1Height = player1.offsetHeight;
            let player2Height = player2.offsetHeight;
            let player1Width = player1.offsetWidth;
            let player2Width = player2.offsetWidth;
            movement = setInterval(function() {
                ballX += ballSpeedX;
                ballY += ballSpeedY;
                let player1X = player1.getBoundingClientRect().x;
                let player2X = player2.getBoundingClientRect().x;
                ball.style.left = ballX + 'px';
                ball.style.top = ballY + 'px';

                if (ballX + ballDia > window.innerWidth || ballX < 0) { //for reversing the direction of the ball
                    ballSpeedX = -ballSpeedX;
                }
                let ballPos = ballX + ballDia / 2;
                if (ballY <= player1Height) {
                    ballSpeedY = -ballSpeedY;
                    console.log(ballSpeedY);
                    score++;

                    if (ballPos < player1X || ballPos > (player1Width + player1X)) {
                        storeWin(player2Name, score);
                    }
                } else if ((ballY + ballDia) >= (window.innerHeight - player2Height)) {
                    ballSpeedY = -ballSpeedY;
                    console.log(ballSpeedY);
                    score++;


                    if (ballPos < player2X || ballPos > (player1Width + player2X)) {
                        storeWin(player1Name, score);
                    }
                }

            }, 10);


        }

    }

});