const game = new Game()

// Load game assets
function preload() {
  game.preload()

}


function setup() {
  createCanvas(1000, 900);

}

function draw() {
  game.draw()

}



// function keyPressed() {
//   if (keyCode === 81) {
//     game.qButton();
//     game.catch();
//   }
//   if (keyCode === 87) {
//     game.wButton();
//     game.catch();
//   }
//   if (keyCode === 69) {
//     game.eButton();
//     game.catch();
//   }
//   if (keyCode === 82) {
//     game.rButton();
//     game.catch();
//   }
// }