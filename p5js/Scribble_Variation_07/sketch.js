var pointlist = [];

function setup() {
  //fill container
  createCanvas(window.innerWidth, window.innerHeight);
}

function filterPoints() {
  //turn clockwise around top-left point.
  for (var i = 0; i < pointlist.length; i++) {
		pointlist[i].rotate(0.1);
  }
}

function draw() {

  background(255);

  if (mouseIsPressed) {
    pointlist.push( createVector(mouseX, mouseY) );
    // auto erase periodically while drawing
    if (pointlist.length == 1000) {
      pointlist = [];
    }

  }

  if (pointlist.length > 2) {
    for (var i = 0; i < pointlist.length; i++) {
      thisPoint = pointlist[i];
      nextPoint = pointlist[i + 1];
      if (nextPoint) { //don't draw if no second pt
        line(thisPoint.x, thisPoint.y, nextPoint.x, nextPoint.y);
      }
    }
  }

  filterPoints();
}

function mousePressed() {
  pointlist.push(createVector(mouseX, mouseY));
}