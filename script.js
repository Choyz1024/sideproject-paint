let colorButton
let strokeSlider
let saveBtn
let cnv
let eraser = false

function setup () {
  const sketchWidth = document.querySelector('#square').offsetWidth
  const sketchHeight = document.querySelector('#square').offsetHeight
  cnv = createCanvas(sketchWidth, sketchHeight)
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
  if (mouseIsPressed) {
    strokeWeight(strokeSlider.value())
    stroke(colorButton.color())
    if (!eraser) line(mouseX, mouseY, pmouseX, pmouseY)
    else {
      fill(255)
      noStroke()
      ellipse(mouseX, mouseY, 20, 20)
    }
  }
}

function resetCanvas () {
  clear()
  background('white')
}

// let photo

// // function preload() {
// //   photo = loadImage('assets/rockies.jpg');
// // }

// // function draw() {
// //   image(photo, 0, 0);
// // }

// // function keyTyped() {
// //   if (key === 's') {
// //     photo.save('photo', 'png');
// //   }
// // }

// cnv = createCanvas(300, 300);
// save(cnv, 'myCanvas.jpg');
