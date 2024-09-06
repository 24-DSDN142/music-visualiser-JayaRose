function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20);
  textFont('Verdana'); // Use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
  fill(255); 
  text(words, width / 2 - textWidth(words) / 2, height - 30); 

  // Define center of canvas
  let centerX = width / 2;
  let centerY = height / 2;

  // Mapping the sizes of different shapes to the volumes
  let ballSize = map(vocal, 0, 100, 10, 50);
  let eyeSize = map(drum, 0, 100, 50, 90);
  let squareSize = map(bass, 0, 100, 25, 150);
  let eggWidth = map(other, 0, 100, 30, 60); // Width of the egg-shaped ellipse
  let eggHeight = map(other, 0, 100, 50, 100); // Height of the egg-shaped ellipse
  let otherFactor = map(other, 0, 100, -10, 10); 
  
  let rotation = counter * 2; // Rotate with time 

  // Color changes based on the audio levels
  let vocalColor = map(vocal, 0, 100, 100, 255);
  let drumColor = map(drum, 0, 100, 50, 255);
  let bassColor = map(bass, 0, 100, 50, 150);
  let otherColor = map(other, 0, 100, 150, 255);

  let yOffset = map(sin(counter * 0.05), -1, 1, -10, 10); 

  // Drawing rotating and moving ellipses (eyes)
  drawRotatingEllipse(centerX - 150 + otherFactor, centerY - 100 + yOffset, eyeSize, rotation, vocalColor);
  drawRotatingEllipse(centerX + 150 + otherFactor, centerY - 100 + yOffset, eyeSize, rotation, vocalColor);
  drawRotatingEllipse(centerX - 50 + otherFactor, centerY - 100 + yOffset, eyeSize, rotation, vocalColor);
  drawRotatingEllipse(centerX + 50 + otherFactor, centerY - 100 + yOffset, eyeSize, rotation, vocalColor);

  // Drawing rotating squares
  drawRotatingSquare(centerX - 150 + otherFactor, centerY + 100 + yOffset, squareSize, rotation, bassColor);
  drawRotatingSquare(centerX + 150 + otherFactor, centerY + 100 + yOffset, squareSize, rotation, bassColor);
  drawRotatingSquare(centerX - 50 + otherFactor, centerY + 100 + yOffset, squareSize, rotation, bassColor);
  drawRotatingSquare(centerX + 50 + otherFactor, centerY + 100 + yOffset, squareSize, rotation, bassColor);

  // Drawing moving ellipses (balls)
  drawMovingEllipse(centerX - 150 + otherFactor, centerY - 200 + yOffset, ballSize, drumColor);
  drawMovingEllipse(centerX + 150 + otherFactor, centerY - 200 + yOffset, ballSize, drumColor);
  drawMovingEllipse(centerX - 50 + otherFactor, centerY - 200 + yOffset, ballSize, drumColor);
  drawMovingEllipse(centerX + 50 + otherFactor, centerY - 200 + yOffset, ballSize, drumColor);

  // Drawing rotating egg-shaped ellipses
  drawRotatingEggShape(centerX - 150 + otherFactor, centerY + 200 + yOffset, eggWidth, eggHeight, rotation, otherColor);
  drawRotatingEggShape(centerX + 150 + otherFactor, centerY + 200 + yOffset, eggWidth, eggHeight, rotation, otherColor);
  drawRotatingEggShape(centerX - 50 + otherFactor, centerY + 200 + yOffset, eggWidth, eggHeight, rotation, otherColor);
  drawRotatingEggShape(centerX + 50 + otherFactor, centerY + 200 + yOffset, eggWidth, eggHeight, rotation, otherColor);
}

// Function to draw rotating ellipses
function drawRotatingEllipse(x, y, size, rotation, colorVal) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(colorVal, 100, 150); // Color changes with audio level
  ellipse(0, 0, size, size);
  pop();
}

// Function to draw rotating squares
function drawRotatingSquare(x, y, size, rotation, colorVal) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(colorVal, 100, 100); // Color changes with audio level
  rectMode(CENTER);
  rect(0, 0, size, size);
  pop();
}

// Function to draw moving ellipses (balls)
function drawMovingEllipse(x, y, size, colorVal) {
  fill(colorVal, 150, 200); // Color changes with audio level
  ellipse(x, y, size, size);
}

// Function to draw rotating egg-shaped ellipses
function drawRotatingEggShape(x, y, width, height, rotation, colorVal) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(colorVal, 150, 200); // Color changes with audio level
  ellipse(0, 0, width, height); // Draw egg shape with different width and height
  pop();
}