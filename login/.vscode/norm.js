//same the easy only in line 79 an 80
var grid = 32
var snake = $('#snake')
var apple = $('#apple')
var snakeX = 160, snakeY = 160
var dx = grid, dy = 0
var gameAreaWidth = $('#game-area').width()
var gameAreaHeight = $('#game-area').height()

function moveApple() {
   var appleX = Math.floor(Math.random() * (gameAreaWidth / grid)) * grid
  var appleY = Math.floor(Math.random() * (gameAreaHeight / grid)) * grid

  apple.fadeOut(300, function() {
    apple.css({ left: appleX + 'px', top: appleY + 'px' }).fadeIn(300)
  })
}

function gameOver() {
    $('#game-over').show()
  $('#replay-button').removeClass('hidden')
  clearInterval(gameLoop)
  clearInterval(appleInterval)
}

function youWin() {
  $('#winner').show()
  $('#replay-button').removeClass('hidden')
    clearInterval(gameLoop)
  clearInterval(appleInterval)
}

function moveSnake() {
  snakeX += dx
  snakeY += dy
  if (snakeX < 0 || snakeX >= gameAreaWidth || snakeY < 0 || snakeY >= gameAreaHeight) {
       gameOver()
    return
  }
  snake.css({ left: snakeX + 'px', top: snakeY + 'px' })

  if (snakeX === parseInt(apple.css('left')) && snakeY === parseInt(apple.css('top'))) {
    youWin()
  }
}
$(document).keydown(function(event) {
  if (event.key === "ArrowLeft") { 
    snake.css({'rotate': '180deg'})
    dx = -grid
    dy = 0
  } else if (event.key === "ArrowUp") {
    snake.css({'rotate': '270deg'})
    dx = 0
    dy = -grid
  } else if (event.key === "ArrowRight") { 
    snake.css({'rotate': '0deg'})

    dx = grid
    dy = 0;
  } else if (event.key === "ArrowDown") { 
    snake.css({'rotate': '90deg'})

    dx = 0
    dy = grid
  }
});

$('#replay-button').click(function() {
  snakeX = 160
  snakeY = 160
  dx = grid
  dy = 0

  $('#game-over, #winner').hide()
  console.log(this)
  $(this).addClass('hidden')

//change the value of second of move the snake to Mode norm
  gameLoop = setInterval(moveSnake, 150)
  appleInterval = setInterval(moveApple, 1000)
})
var gameLoop = setInterval(moveSnake, 150)
var appleInterval = setInterval(moveApple, 1000)