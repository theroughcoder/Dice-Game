var randomNumber1 = Math.random();
randomNumber1 = Math.ceil(randomNumber1 * 6);

var randomNumber2 = Math.random();
randomNumber2 = Math.ceil(randomNumber2 * 6);


document.querySelectorAll(".img1")[0].setAttribute("src" , "images/dice"+ randomNumber1 + ".png");
document.querySelectorAll(".img2")[0].setAttribute("src" , "images/dice"+ randomNumber2 + ".png");


if(randomNumber1 == randomNumber2){
document.querySelector('.result').innerHTML = "Draw!";
} else if(randomNumber1 > randomNumber2){
document.querySelector('.result').innerHTML = "Player 1 wins! ";
} else document.querySelector('.result').innerHTML = " Player 2 wins!";
