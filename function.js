var randomNumber = Math.floor((Math.random()* 6) +1);
var randomNumber2 = Math.floor((Math.random()* 6) +1);

var randomDiceImage1 = "./images/dice" + randomNumber + ".png";
var randomDiceImage2 = "./images/dice"+ randomNumber2 +".png";

document.getElementById('img1').setAttribute('src', randomDiceImage1);
document.getElementById('img2').setAttribute('src', randomDiceImage2);

if (randomDiceImage1 > randomDiceImage2) {
    document.querySelector('h1').textContent = "Player 1 Wins";
}
else if(randomDiceImage2 === randomDiceImage1 ){
    document.querySelector('h1').textContent = "It's a Draw";
}

else{
    document.querySelector('h1').textContent = "Player 2 Wins";
}