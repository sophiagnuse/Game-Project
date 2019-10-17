
function setup() {
  createCanvas(600, 600);
}

function draw(){
	background (100,200,30);
  class Ball {
    constructor(x,y,color){
    		this.x = x;
        		this.y = y;
               this.color = color;
    	  }
        drawBall(){
            	   stroke(0);
            	   fill(this.color);
                 ellipse(this.x,this.y,10,10);
        	}

        moveBall(){
        	   this.x = this.x+2;
        	   this.y = this.y+.5;

 // here is where you’ll put the instructions for making balls
}

}
