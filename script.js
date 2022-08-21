let pen_color = [100, 50 ,0]

function setup() {
  createCanvas(700, 700)
  background(200)

  let color_button
  color_button = createButton('Change Color')
  color_button.position(10, 710)
  color_button.mouseClicked(change_pen_color)
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(6)
    stroke(pen_color)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function change_pen_color() {
  r = random(255)
  g = random(255)
  b = random(255)
  pen_color =[r, g, b]
} 