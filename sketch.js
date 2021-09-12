var canvas, backgroundImage;

var GameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var lambo
var car
var bike
var ktm
cars=[lambo,car,bike,ktm]
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
