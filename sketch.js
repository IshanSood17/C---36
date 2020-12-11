var database,form,player,game;
var gameState = 0;
var playerCount;
var allPlayers;

function setup()
{
  database = firebase.database();

  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw()
{
  if (playerCount = 4) 
  {
    game.update();
  }
  if (gameState === 1) 
  {
    clear();
    game.play();
  }
}