let colorButton
let strokeSlider
let saveBtn
let cnv
let eraser = false
let img
let pg

const sketchWidth = document.querySelector('#square').offsetWidth
const sketchHeight = document.querySelector('#square').offsetHeight

function preload() {
  img = loadImage('assets/default.jpg');
}

function setup () {
  cnv = createCanvas(sketchWidth, sketchHeight)
  pg = createGraphics(sketchWidth, sketchHeight);
  cnv.parent('square')
  background('white')

  colorButton = createColorPicker('#000000')
  colorButton.parent('square')
  colorButton.position(sketchWidth - 50, 0, 'relative')

  strokeSlider = createSlider(1, 50, 1)
  strokeSlider.parent('square')
  strokeSlider.position(sketchWidth - 100, 40, 'relative')

  let eraseButton
  eraseButton = createButton('eraser')
  eraseButton.parent('square')
  eraseButton.position(sketchWidth - 230, 80, 'relative')
  eraseButton.mouseClicked(switchEaser = () => {eraser = !eraser})

  let resetButton
  resetButton = createButton('reset')
  resetButton.parent('square')
  resetButton.position(sketchWidth - 235, sketchHeight - 30, 'relative')
  resetButton.mouseClicked(resetCanvas)

  saveBtn = createButton('Save')
  saveBtn.parent('square')
  saveBtn.position(sketchWidth - 280, sketchHeight - 65, 'relative')
  saveBtn.mouseClicked(function () {
    save(cnv, 'myCanvas.jpg')
  })
}

function draw () {
  image(img, 0, 0, sketchWidth, sketchHeight);
  image(pg, 0, 0);
  image(pg, 0, sketchHeight);
  if (mouseIsPressed) {
    pg.strokeWeight(strokeSlider.value())
    pg.stroke(colorButton.color())
    if (!eraser) {
       pg.line(mouseX, mouseY, pmouseX, pmouseY)
    }
    else {
      fill(255)
      noStroke()
      pg.ellipse(mouseX, mouseY, strokeSlider.value(), strokeSlider.value())
    }
  }
}

function resetCanvas () {
  clear()
  pg.clear()
  background('white')
}
