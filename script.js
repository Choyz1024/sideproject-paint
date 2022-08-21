let colorButton
let strokeSlider

function setup () {
  createCanvas(700, 700)
  background('white')

  colorButton = createColorPicker('#000000')
  colorButton.position(10, 710)

  strokeSlider = createSlider(1, 50, 1)
  strokeSlider.position(10, 680)

  let resetButton
  resetButton = createButton('reset')
  resetButton.position(10, 650)
  resetButton.mouseClicked(resetCanvas)
}

function draw () {
  if (mouseIsPressed) {
    strokeWeight(strokeSlider.value())
    stroke(colorButton.color())
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function changePenStroke () {
  penStroke = Math.floor(Math.random() * 20) + 1
}

function resetCanvas () {
  clear()
  background('white')
}
