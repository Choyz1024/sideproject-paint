function setup() {
  createCanvas(700, 700)
  background(200)
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 0, 0)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}
