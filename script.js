function setup () {
  let button
  createCanvas(700, 700)
  background(200)
  button = createButton('changeBG')
}

function draw () {
  if (mouseIsPressed) {
    fill(0)
    stroke(0)
    strokeWeight(18)
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}
