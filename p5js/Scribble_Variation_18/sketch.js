var pointlist = [];

function setup() {
  //fill container
  createCanvas(window.innerWidth, window.innerHeight);
}

function filterPoints() {
  // bloated unfold
  var m = createVector(mouseX, mouseY);

  for (var i = 0; i < pointlist.length; i++) {
    pointlist[i].sub(pointlist[i + 1]);
    pointlist[i].rotate(0.01);
    pointlist[i].add(pointlist[i + 1]);
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