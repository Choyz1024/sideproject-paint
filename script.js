let penStroke = 6
let penColor = [100, 50 ,0]

function setup() {
  createCanvas(700, 700)
  background('white')

  let colorButton
  colorButton = createButton('Change Color')
  colorButton.position(10, 710)
  colorButton.mouseClicked(changePenColor)

  let strokeButton
  strokeButton = createButton('Change Stroke')
  strokeButton.position(10, 680)
  strokeButton.mouseClicked(changePenStroke)

  let resetButton
  resetButton = createButton('reset')
  resetButton.position(10, 650)
  resetButton.mouseClicked(resetCanvas)
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(penStroke)
    stroke(pen_color)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function changePenColor() {
  r = random(255)
  g = random(255)
  b = random(255)
  penColor = [r, g, b]
}

function changePenStroke() {
  penStroke = Math.floor(Math.random() * 20) + 1
}

function resetCanvas() {
  clear()
  background('white')
}