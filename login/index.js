
    var grid = 32; 
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
      });
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
    $(document).keydown(function(e) {
      if (e.which === 37 && dx === 0) { 
        dx = -grid
        dy = 0
      } else if (e.which === 38 && dy === 0) { 
        dx = 0
        dy = -grid
      } else if (e.which === 39 && dx === 0) { 
        dx = grid
        dy = 0
      } else if (e.which === 40 && dy === 0) { 
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
      $(this).addClass('hidden')
      gameLoop = setInterval(moveSnake, 100)
      appleInterval = setInterval(moveApple, 1000)
    })
    var gameLoop = setInterval(moveSnake, 100)
    var appleInterval = setInterval(moveApple, 1000)
  ;
  