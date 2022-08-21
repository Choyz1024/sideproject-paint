let colorButton
let strokeSlider
let saveBtn
let cnv

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
    line(mouseX, mouseY, pmouseX, pmouseY)
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
