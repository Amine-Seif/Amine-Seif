//first to set the grid
var grid = 32; 
var snake = $('#snake')
var apple = $('#apple')
var snakeX = 160, snakeY = 160;//snakeX is the horizontal position (left or right),snakeY is the vertical position (up or down)
var dx = grid, dy = 0;//change the postion of x and y 
var gameAreaWidth = $('#game-area').width()
var gameAreaHeight = $('#game-area').height()
// function to place apple(lady) at a random position with fade in/out
function moveApple() {
  var appleX = Math.floor(Math.random() * (gameAreaWidth / grid)) * grid
  var appleY = Math.floor(Math.random() * (gameAreaHeight / grid)) * grid
  apple.fadeOut(300, function() {
    apple.css({ left: appleX + 'px', top: appleY + 'px' }).fadeIn(300)
  });
}
// function to trigger gameover
// stop the game loop
// stop moving the apple
function gameOver() {
  $('#game-over').show()
  $('#replay-button').removeClass('hidden');
  clearInterval(gameLoop) 
  clearInterval(appleInterval) 
}
// function to display winner message
// stop the game loop
// stop moving the apple
function youWin() {
  $('#winner').show()
  $('#replay-button').removeClass('hidden')
  clearInterval(gameLoop) 
  clearInterval(appleInterval) 
}
// function to move the snake(pacman)
function moveSnake() {
  snakeX += dx
  snakeY += dy
  // check if the snake hit the gamearea(game over)
  if (snakeX < 0 || snakeX >= gameAreaWidth || snakeY < 0 || snakeY >= gameAreaHeight) {
    gameOver()
    return
  }
  // here for update snake(pacman) position
  snake.css({ left: snakeX + 'px', top: snakeY + 'px' })
  // check if the snakea(pacman) eats the apple
  if (snakeX === parseInt(apple.css('left')) && snakeY === parseInt(apple.css('top'))) {
    youWin()
  }
}
// handle arrow key press for snake direction
$(document).keydown(function(event) {
  if (event.key === "ArrowLeft") { // left arrow
    snake.css({'rotate': '180deg'})
    dx = -grid
    dy = 0
  } else if (event.key === "ArrowUp") {// up arrow
    snake.css({'rotate': '270deg'})
    dx = 0
    dy = -grid
  } else if (event.key === "ArrowRight") { // right arrow
    snake.css({'rotate': '0deg'})
    dx = grid
    dy = 0
  } else if (event.key === "ArrowDown") { // down arrow
    snake.css({'rotate': '90deg'})
    dx = 0
    dy = grid
  }
})
$('#replay-button').click(function() {
  snakeX = 160
  snakeY = 160
  dx = grid
  dy = 0
  // hide messages and replay button
  $('#game-over, #winner').hide()
  console.log(this)
  $(this).addClass('hidden')
  // restart the apple movement and game loop MOde easy
  //move apple every second
  gameLoop = setInterval(moveSnake, 200)
  appleInterval = setInterval(moveApple, 1200)
})
// replay button resets the game
// start the game easy
var gameLoop = setInterval(moveSnake, 200)
var appleInterval = setInterval(moveApple, 1200) 

