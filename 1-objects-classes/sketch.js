//create a variable to hold one ball
let b;
let anotherBall;

let SW;

function setup() {
  createCanvas(800, 400);
  b = new Ball(0, 100,"red",20); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"green",30);
  SW = new Ball(0, 100, "pink", 50)
}


function draw(){
	background("green");
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color,diameter){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.diameter=diameter;

	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    ellipse(this.x,this.y,this.diameter,this.diameter);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
