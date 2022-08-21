const saveBtn = document.querySelector('#saveBtn')

let colorButton
let strokeSlider
let cnv

saveBtn.addEventListener('click', () => {
  save(cnv, 'myCanvas.jpg')
})

function setup () {
  const sketchWidth = document.querySelector('#square').offsetWidth
  const sketchHeight = document.querySelector('#square').offsetHeight
  cnv = createCanvas(sketchWidth, sketchHeight)
  cnv.parent('square')
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
