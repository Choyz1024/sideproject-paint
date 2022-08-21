<<<<<<< HEAD
function setup () {
  let button
  createCanvas(700, 700)
  background(200)
  button = createButton('changeBG')
=======

function setup() {
  createCanvas(700, 700)
  background(200)

  let color_button
  color_button = createButton('Change Color')
  color_button.position(10, 710)
  color_button.mouseClicked(change_background)
>>>>>>> 0cbf19888e5f9bbd8b0f0dd25017f09996556a0a
}

function draw () {
  if (mouseIsPressed) {
    fill(0)
    stroke(0)
    strokeWeight(18)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function change_background() {
  r = random(255)
  g = random(255)
  b = random(255)
  background(r, g, b)
} 