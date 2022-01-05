var backgroundImg, rockImg, sciImg, paperImg, playerImg, computerImg, playerMad, pcMad, playerHappy, pcHappy, buttonImg;
var rock, paper, sci, player, computer;
var score = 0;
var computerScore = 0;
var playerChoice;
var pcChoice;

var button;

var oPaper, oSci, oRock;

var pcPaper, pcSci, pcRock;

var trophy, sad, iTrophy, iSad;

var PLAY = 1;
var PAUSE = 3;
var END = 0;
var SERVE = 2;
var gameState = SERVE;

function preload() {

  backgroundImg = loadImage("background.png");
  rockImg = loadImage("rock.png");
  paperImg = loadImage("paper.png");
  sciImg = loadImage("sci.png");
  playerImg = loadImage("player.png");
  computerImg = loadImage("computer.png");
  playerHappy = loadImage("playerHappy.png");
  pcHappy = loadImage("pcHappy.png");
  playerMad = loadImage("playerMad.png");
  pcMad = loadImage("pcMad.png");
  buttonImg = loadImage("play.png");
  iTrophy = loadImage("trophy.png");
  iSad = loadImage("sad.png")

}

function setup() {
  createCanvas(800,800);

  button = createSprite(350, 600, 20, 20);
  button.addImage("play", buttonImg);
  button.scale = 0.35;
  
  oPaper = createSprite(600, 100, 20, 20);
  oSci = createSprite(600, 100, 20, 20);
  oRock = createSprite(600, 100, 20, 20);

  oPaper.addImage(paperImg);
  oSci.addImage(sciImg);
  oRock.addImage(rockImg);

  oPaper.scale = 1;
  oSci.scale = 1;
  oRock.scale = 1;

  oRock.visible = false;
  oPaper.visible = false;
  oSci.visible = false;

  pcPaper = createSprite(600, 350, 20, 20);
  pcSci = createSprite(600, 350, 20, 20);
  pcRock = createSprite(600, 350, 20, 20);

  pcPaper.addImage(paperImg);
  pcSci.addImage(sciImg);
  pcRock.addImage(rockImg);

  pcPaper.scale = 1;
  pcSci.scale = 1;
  pcRock.scale = 1;

  pcRock.visible = false;
  pcPaper.visible = false;
  pcSci.visible = false;
}

function draw() {
    

  if(gameState == SERVE) {
    background("black");

    textSize(50);
    fill("cyan");
    text("Rock Paper Scissors", 100, 100)
    textSize(30);
    fill("white");
    text("1. Press the button on the keyboard to choose.", 100, 200);
    text("2. p = paper, r = rock, s = scissor", 100, 250)
    text("3. Whoever wins, Computer or player, gets a point.", 100, 300);
    text("4. Whoever gets 5 points first, wins!", 100, 350);

    button.visible = true;
 
    if(mousePressedOver(button)) {
      gameState = PLAY;
    }
  }

/*/*//*/*//*/*/

  if (gameState == PLAY) {
    background("cyan");
    play();

    if(playerChoice == null){

    if(keyDown("R")) {
      playerChoice = "ROCK";
      oRock.visible = true;
    }
  
    if(keyDown("S")) {
      playerChoice = "SCI";
      oSci.visible = true;
     
    }
  
    if(keyDown("P")) {
      playerChoice = "PAPER"
      oPaper.visible = true;
     
    }
  }

    if(pcChoice == null && playerChoice !== undefined){
      var rand = Math.round(random(1,3));

      if(rand == 1){
        pcChoice = "PAPER";
        pcPaper.visible = true;
      }

      if(rand == 2){
        pcChoice = "ROCK";
        pcRock.visible = true;
        
      }

      if(rand == 3){
        pcChoice = "SCI";
        pcSci.visible = true;
       
      }
    }

    
    if(pcChoice !== undefined && playerChoice !== undefined){
     
      gameState = PAUSE;
    }


  if(score == 5 || computerScore == 5){
    gameState = END;
  }



}

  if(gameState == PAUSE){
    play();
    addScore();
  }

  if(gameState == END){
    background("cyan");

    player.visible = false;

    if(score == 5){
     text("GG! You win!", 400, 400);

     trophy = createSprite(400, 200, 20, 20);
     trophy.addImage("e", iTrophy);
     trophy.scale = 0.5;

     player.visible = false;
    }

    if(computerScore == 5){
      text("Aww! You lose!", 400, 400);

      sad = createSprite(400, 200, 20, 20);
     sad.addImage("e", iSad);
     sad.scale = 0.5;

     player.visible = false;
    }
  }

  drawSprites();
}

function play() {

  button.destroy();

  player = createSprite(100,730,10,10);
  player.addImage("playing", playerImg);
  player.addImage("happy", playerHappy);
  player.addImage("sad", playerMad);
  player.visible = true;

  player.scale = 0.5;

  computer = createSprite(670,730,10,10);
  computer.addImage("playing", computerImg);
  computer.addImage("happy", pcHappy);
  computer.addImage("sad", pcMad);
  computer.visible = true;

  computer.scale = 0.7;

  textSize(40);
  fill("black")
  text("Player Choice: ", 100, 175)
  text("Computer Choice: ", 80, 350)
  fill("red");
  text(score + " - " + computerScore , 350, 730);

  changePImage();
}

function addScore() {
  if(playerChoice == "PAPER" && pcChoice == "SCI"){

    if(frameCount%60 == 0){
      computerScore = computerScore + 1;
    }

    if(frameCount%61 == 0){

      playerChoice = undefined;
      pcChoice = undefined;
      
      oPaper.visible = false;
      oRock.visible = false;
      oSci.visible = false;

      pcPaper.visible = false;
      pcRock.visible = false;
      pcSci.visible = false;

      gameState = PLAY;
    }
  }

  if(playerChoice == "ROCK" && pcChoice == "SCI"){
    if(frameCount%60 == 0){
      score = score + 1;
    }

    if(frameCount%61 == 0){

      playerChoice = undefined;
      pcChoice = undefined;
      
      oPaper.visible = false;
      oRock.visible = false;
      oSci.visible = false;

      pcPaper.visible = false;
      pcRock.visible = false;
      pcSci.visible = false;

      gameState = PLAY;
    }
  }

  if(playerChoice == "PAPER" && pcChoice == "ROCK"){
    if(frameCount%60 == 0){
      score = score + 1;
    }

    if(frameCount%61 == 0){

      playerChoice = undefined;
      pcChoice = undefined;
      
      oPaper.visible = false;
      oRock.visible = false;
      oSci.visible = false;

      pcPaper.visible = false;
      pcRock.visible = false;
      pcSci.visible = false;

      gameState = PLAY;
    }
  }

  if(playerChoice == "SCI" && pcChoice == "ROCK"){
    if(frameCount%60 == 0){
      computerScore = computerScore + 1;
    }

    if(frameCount%61 == 0){

      playerChoice = undefined;
      pcChoice = undefined;
      
      oPaper.visible = false;
      oRock.visible = false;
      oSci.visible = false;

      pcPaper.visible = false;
      pcRock.visible = false;
      pcSci.visible = false;

      gameState = PLAY;
    }
  }

  if(playerChoice == "ROCK" && pcChoice == "PAPER"){
    if(frameCount%60 == 0){
      computerScore = computerScore + 1;
    }

    if(frameCount%61 == 0){

      playerChoice = undefined;
      pcChoice = undefined;
      
      oPaper.visible = false;
      oRock.visible = false;
      oSci.visible = false;

      pcPaper.visible = false;
      pcRock.visible = false;
      pcSci.visible = false;

      gameState = PLAY;
    }
  }

  if(playerChoice == "SCI" && pcChoice == "PAPER"){
    if(frameCount%60 == 0){
      score = score + 1;
    }

    if(frameCount%61 == 0){

      playerChoice = undefined;
      pcChoice = undefined;
      
      oPaper.visible = false;
      oRock.visible = false;
      oSci.visible = false;

      pcPaper.visible = false;
      pcRock.visible = false;
      pcSci.visible = false;

      gameState = PLAY;
    }
  }

  if(playerChoice == pcChoice){


    if(frameCount%61 == 0){

      playerChoice = undefined;
      pcChoice = undefined;
      
      oPaper.visible = false;
      oRock.visible = false;
      oSci.visible = false;

      pcPaper.visible = false;
      pcRock.visible = false;
      pcSci.visible = false;

      gameState = PLAY;
    }
  
  }
}

/* function changePImage() {
      
  if(computerScore == score){
    player.visible = true;
    computer.visible = true;

    pHappy.visible = false;
    pSad.visible = false;
    pcHapy.visible = false;
    pcSad.visible = false;
  }

  if(computerScore > score){
    pSad.visible = true;
    pcHapy.visible = true;

    pHappy.visible = false;
    player.visible = false;
    computer.visible = false;
    pcSad.visible = false;
  }

  if(computerScore < score){
    pHappy.visible = true;
    pcSad.visible = true;

    player.visible = false;
    pSad.visible = false;
    pcHapy.visible = false;
    computer.visible = false;
  }

} */

function changePImage() {
      
  if(computerScore == score){
    player.changeImage("playing");
    computer.changeImage("playing");
  }

  if(computerScore > score){
    player.changeImage("sad");
    computer.changeImage("happy");
  }

  if(computerScore < score){
    player.changeImage("happy");
    computer.changeImage("sad");
  }

}