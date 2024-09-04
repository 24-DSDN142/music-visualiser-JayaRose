
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  

let ballSize = map(vocal, 0, 100, 10, 50)
let eyeSize = map(drum, 0, 100, 50, 90)
let sqaureSize = map(bass, 0, 100, 25, 150)

 ellipse(200, 200, eyeSize, eyeSize)
 ellipse(500, 200, eyeSize, eyeSize)
 ellipse(300, 200, eyeSize, eyeSize)
 ellipse(400, 200, eyeSize, eyeSize)

 rect(200, 300, sqaureSize, sqaureSize)
 rect(500, 300, sqaureSize, sqaureSize)
 rect(300, 300, sqaureSize, sqaureSize)
 rect(400, 300, sqaureSize, sqaureSize)

 ellipse(200, 100, ballSize, ballSize)
 ellipse(500, 100, ballSize, ballSize)
 ellipse(300, 100, ballSize, ballSize)
 ellipse(400, 100, ballSize, ballSize)

 
 
}