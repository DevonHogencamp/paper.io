var canvas = document.getElementById('canvas');

var canvasW = window.innerWidth;
var canvasH = window.innerHeight;

canvas.width = canvasW;
canvas.height = canvasH;

var ctx = canvas.getContext('2d');

var playerColor = "#FF0000";
var playerPath = "#FF3F3F";

ctx.fillStyle = playerColor;

/*
    This loop controls the main game
    It runs every 15ms updating and rendering the player
    If the player dies the loop will stop and exit
*/

window.setInterval(function () {
    player.update();
    player.render();
}, 15);
