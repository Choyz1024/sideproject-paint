let color_button
let color_picker

function setup () {
  createCanvas(700, 700)
  background(200)

  color_button = createButton('Change Color')
  color_button.position(10, 710)
  color_button.mousePressed(change_background)

  color_picker = createColorPicker('#FFFFFF')
  color_picker.position(150, height + 10)
}

function draw () {
  if (mouseIsPressed) {
    fill(0)
    stroke(color_picker.color())
    strokeWeight(18)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function change_background () {
  r = random(255)
  g = random(255)
  b = random(255)
  background(r, g, b)
}
