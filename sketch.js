
function setup() {
  createCanvas(600,200);
box = createSprite (300,100,10,10)




}

function draw() 
{
  background(30);
  if(keyIsDown(LEFT_ARROW)){
      box.x = box.x -5
  }

  if(keyDown(RIGHT_ARROW)){
      box.x = box.x +5
  }





  drawSprites();
}




