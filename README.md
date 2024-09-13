# Amine-Seif

var grid = 32;
This sets the size of each movement step for the snake, like moving 32 pixels each time it changes position.

var snake = $('#snake');
This selects the snake element from the HTML using jQuery so you can control it.

var apple = $('#apple');
This selects the apple element so you can control it.

var snakeX = 160, snakeY = 160;
These are the starting positions (coordinates) for the snake on the game area.

var dx = grid, dy = 0;
These control the movement direction of the snake. dx = grid means the snake moves right initially, and dy = 0 means it's not moving up or down.

var gameAreaWidth = $('#game-area').width();
Gets the width of the game area (the space where the snake moves).

var gameAreaHeight = $('#game-area').height();
Gets the height of the game area.

Apple Movement:
function moveApple() {
This defines a function to randomly place the apple on the screen.

var appleX = Math.floor(Math.random() * (gameAreaWidth / grid)) * grid;
This generates a random X position within the game area for the apple.

var appleY = Math.floor(Math.random() * (gameAreaHeight / grid)) * grid;
This generates a random Y position within the game area for the apple.

apple.fadeOut(300, function() {
The apple will fade out (disappear) over 300 milliseconds.

apple.css({ left: appleX + 'px', top: appleY + 'px' }).fadeIn(300);
After disappearing, the apple reappears in a new random location with a fade-in effect.
Game Over and Winning:
function gameOver() {
This function shows a "Game Over" message when the snake hits the game boundary.

$('#game-over').show();
Displays the "Game Over" message.

$('#replay-button').removeClass('hidden');
Makes the replay button visible.

clearInterval(gameLoop); clearInterval(appleInterval);
Stops the game and apple movements when the game is over.

function youWin() {
This function shows a "You are winner" message when the snake eats the apple.

Snake Movement:
function moveSnake() {
This function moves the snake by updating its position.

snakeX += dx; snakeY += dy;
Updates the snake’s X and Y positions based on the direction.

if (snakeX < 0  snakeX >= gameAreaWidth  snakeY < 0 || snakeY >= gameAreaHeight) { gameOver(); return; }
Checks if the snake hits the game boundary, triggering "Game Over."

snake.css({ left: snakeX + 'px', top: snakeY + 'px' });
Updates the snake’s position on the screen.

if (snakeX === parseInt(apple.css('left')) && snakeY === parseInt(apple.css('top'))) { youWin(); }
Checks if the snake eats the apple by comparing their positions. If true, the win function runs.

Arrow Key Handling:
$(document).keydown(function(e) {
This listens for arrow key presses.

if (e.which === 37 && dx === 0) {
Moves the snake left if the left arrow is pressed.

else if (e.which === 38 && dy === 0) {
Moves the snake up if the up arrow is pressed.

else if (e.which === 39 && dx === 0) {
Moves the snake right if the right arrow is pressed.

else if (e.which === 40 && dy === 0) {
Moves the snake down if the down arrow is pressed.

Restarting the Game:
$('#replay-button').click(function() {
When the replay button is clicked, it resets the game.

snakeX = 160; snakeY = 160; dx = grid; dy = 0;
Resets the snake’s position and movement direction.

$('#game-over, #winner').hide();
Hides the game messages.

gameLoop = setInterval(moveSnake, 100);
Restarts the snake movement.
appleInterval = setInterval(moveApple, 1000);
Restarts the apple movement every second.

Game Start:
var gameLoop = setInterval(moveSnake, 100);
Starts the snake movement when the game begins.

var appleInterval = setInterval(moveApple, 1000);
Starts the apple movement every second.
﻿
saaaayf
s...
 