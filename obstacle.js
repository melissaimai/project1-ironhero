class Obstacle {
  constructor(image) {
    this.image = image
    // p5 provides the variables width and height - they contain width and height of the canvas 
    this.x = (Math.floor(Math.random() * 5) * height) / 10;
    this.y = 0
    this.width = 50
    this.height = 50
  }

  draw() {
    this.y++
    console.log(this.x)
    image(this.image, this.x + 250, this.y, this.width, this.height)
    // image(this.image, 230, 150, this.width, this.height)
  }

  // collision(playerInfo) {
  //   // console.log("collision")

  //   // Get the middle of the obstacle
  //   let obstacleX = this.x + this.width / 2
  //   let obstacleY = this.y + this.height / 2

  //   // Get the middle of the player
  //   let playerX = playerInfo.x + playerInfo.width / 2
  //   let playerY = playerInfo.y + playerInfo.height / 2

  //   // dist(x1, y1, x2, y2) returns the distance between the objects
  //   if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
  //     return false
  //   } else {
  //     // Increment the score
  //     game.player.score++
  //     return true
  //   }
  // }
}