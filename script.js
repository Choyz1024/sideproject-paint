let colorButton
let strokeSlider

function setup () {
  const sketchWidth = document.querySelector('#square').offsetWidth
  const sketchHeight = document.querySelector('#square').offsetHeight
  const renderer = createCanvas(sketchWidth, sketchHeight)
  renderer.parent('square')
  background('white')

  colorButton = createColorPicker('#000000')
  colorButton.parent('square')
  colorButton.position(sketchWidth + 10, 0, 'relative')

  strokeSlider = createSlider(1, 50, 1)
  strokeSlider.parent('square')
  strokeSlider.position(sketchWidth - 40, 40, 'relative')

  let resetButton
  resetButton = createButton('reset')
  resetButton.parent('square')
  resetButton.position(sketchWidth - 170, sketchHeight - 30, 'relative')
  resetButton.mouseClicked(resetCanvas)
}

function draw () {
  if (mouseIsPressed) {
    strokeWeight(strokeSlider.value())
    stroke(colorButton.color())
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}

function resetCanvas () {
  clear()
  background('white')
}
