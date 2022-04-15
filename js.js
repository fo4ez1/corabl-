let squarePosition_x = 10;
let squarePosition_y = 0;
let context;
let timer;

let speed=1;

let drawingCanvas = document.getElementById('ship');
if (drawingCanvas && drawingCanvas.getContext) {
  context = drawingCanvas.getContext('2d');
  drawFrame();
}


function drawFrame(speed) {
  context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  
  context.beginPath();
  context.fillStyle = "#fc0";
  context.moveTo(squarePosition_x + 20, 70);
  context.lineTo(squarePosition_x + 60, 20);
  context.lineTo(squarePosition_x + 60, 70);
  context.fill();
  
  context.beginPath();
  context.fillStyle = "#ccf";
  context.moveTo(squarePosition_x + 0, 70);
  context.lineTo(squarePosition_x + 30, 100);
  context.lineTo(squarePosition_x + 70, 100);
  context.lineTo(squarePosition_x + 100, 70);
  context.fill();
  
  context.beginPath();
  context.fillStyle = "#a60";
  context.fillRect(squarePosition_x + 60, 5, 5, 65);
  
  context.beginPath();
  context.fillStyle = "#e49";
  context.fillRect(squarePosition_x + 40, 5, 20, 10);
  
  context.fillStyle = '#00f';
  context.font = 'italic 14px sans-serif';
  context.textBaseline = 'top';
  context.fillText('ship', squarePosition_x + 20, 75);
  squarePosition_x += 1;
  
}


function drawFrame1(speed) {
  context.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  
  context.beginPath();
  context.fillStyle = "#fc0";
  context.moveTo(squarePosition_x + 20, 70);
  context.lineTo(squarePosition_x + 60, 20);
  context.lineTo(squarePosition_x + 60, 70);
  context.fill();
  
  context.beginPath();
  context.fillStyle = "#ccf";
  context.moveTo(squarePosition_x + 0, 70);
  context.lineTo(squarePosition_x + 30, 100);
  context.lineTo(squarePosition_x + 70, 100);
  context.lineTo(squarePosition_x + 100, 70);
  context.fill();
  
  context.beginPath();
  context.fillStyle = "#a60";
  context.fillRect(squarePosition_x + 60, 5, 5, 65);
   
  context.beginPath();
  context.fillStyle = "#e49";
  context.fillRect(squarePosition_x + 40, 5, 20, 10);
  
  context.fillStyle = '#00f';
  context.font = 'italic 14px sans-serif';
  context.textBaseline = 'top';
  context.fillText('ship', squarePosition_x + 20, 75);
  squarePosition_x -= 1;
  
}


function stop() {
  clearInterval(timer);
}


function start() {
stop();
timer = setInterval(drawFrame, 20, speed);
}


function reverse(){
stop();
timer = setInterval(drawFrame1, 20, speed);
}