var ball,paddle,ballimage,paddleimage; 

function preload() {
  /* preload your images here of the ball and the paddle */
ballimage=loadImage("ball.png");
paddleimage=loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */    ball=createSprite(200,200);
      paddle=createSprite(350,185)
  /* assign the images to the sprites */
   ball.addImage("ball1",ballimage);
   paddle.addImage("paddle1",paddleimage);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites ();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */ 
  
  ball.bounceOff(paddle);
  
  if (ball.isTouching(paddle)){
    randomVelocity();
  }
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=5;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */ 
  random(1,10)
  ball.velocityY=ball.velocityY+random;
  
}

