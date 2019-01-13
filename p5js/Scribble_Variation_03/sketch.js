var pointlist = [];

function setup() {
  //fill container
  createCanvas(window.innerWidth, window.innerHeight);
}

function filterPoints() {
  //scramble a bit
  for (var i = 0; i < pointlist.length; i++) {
    var w = pointlist[i].y - 1;
    pointlist[i].y = pointlist[i].x;
    pointlist[i].x = w - 1;
  }
}

function draw() {

  background(255);

  if (mouseIsPressed) {
    pointlist.push(createVector(mouseX, mouseY));
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