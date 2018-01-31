function setup() {
  noStroke();
}

function draw() {
  background(204);
  var x1 = map(mouseX, 0, width, 25, 75);
  ellipse(x1, 25, 25, 25);
  //This ellipse is constrained to the 0-100 range
  //after setting withinBounds to true
  var x2 = map(mouseX, 0, width, 0, 100,true);
  ellipse(x2, 75, 25, 25);
}