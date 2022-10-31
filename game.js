class Game {
  constructor() {
    this.background = new Background()
    this.keysBackground = new KeysBackground()
    this.notes = []
    this.musicalNotesImage;
  }


  preload() {
    this.background.image = loadImage("./assets/images/bg2.png")
    this.musicalNotesImage = loadImage("./assets/images/tile000.png")
    this.keysBackground.image = loadImage("./assets/images/keys-bg.png")
  }

  draw() {
    clear()
    this.background.draw()
    this.keysBackground.draw()

    // Every x frames we want to push a new coin into the array 
    if (frameCount % 90 === 0) {
      this.notes.push(new Obstacle(this.musicalNotesImage))
    }

    // Draw the notes
    this.notes.forEach(function (obstacle) {
      obstacle.draw()
    })

    // Filter the notes which are out of the canvas or had a collision
    // We need an arrow function here, so that "this" has the right context (of the game object)
    // this.notes = this.notes.filter(note => {
    //   console.log(this)

    //   if (note.collision(this.player) || note.x < 0) {
    //     return false
    //   } else {
    //     return true
    //   }
    // })


  }


}

class KeysBackground {
  constructor() {
    this.image;
  }
  draw() {
    image(this.image, 230, 150, this.image.width * 1.3, this.image.height * 1.3)
  }
}

class Background {
  constructor() {
    this.image;
  }
  draw() {
    image(this.image, 0, 0);
  }
}
