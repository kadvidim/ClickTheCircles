//This program is a minigame where you click on circle targets
let target
let crosshair
let score = 0;
let gameState = "title";

function setup() {
  createCanvas(windowWidth, windowHeight);
	frameRate(360);
	target = {pos:{x:int(random(windowWidth)), y : int(random(windowHeight))}, 
						color:[255,255,0], 
						size: windowHeight/50};
	crosshair = {color :[0,255,255], 
							 length : windowHeight/100, 
							 width : windowHeight/500};
}
//when the mouse is clicked
function mousePressed(){
	switch (gameState) {
		case "title":
			gameState = "game";
			break;
		case "game":
  	if(mouseX > (target.pos.x - target.size/2) && mouseX < (target.pos.x + target.size/2) && mouseY > (target.pos.y - target.size/2) && mouseY < (target.pos.y + target.size/2)){
		score += 1;
	target.pos = {x:int(random(windowWidth)), y : int(random(windowHeight))}
		background(0);
			}else{
				gameState = "end"
		}break;
		case "end":
			gameState = "title";
			score = 0;
	}
	
}

function draw() {
	background(0);
	switch (gameState) {
		case "title":	
			fill(255);
			stroke(0,200,255);
			strokeWeight(2);
			textSize(windowHeight/10);
			textAlign(CENTER,CENTER);
			text("Don't Miss.", windowWidth/2, windowHeight/2);
			textSize(windowHeight/20);
			text("Click anywhere to start", windowWidth/2, windowHeight*0.6);
			textAlign(RIGHT,BOTTOM);
			text("Made by David Kim", windowWidth, windowHeight);
			break;
			
		case "game":
	//scoreboard
	text(score, windowWidth/2, windowHeight/7);
  //the target
	noStroke();
	rectMode(CENTER);
  fill(target.color[0],target.color[1],target.color[2]);
  ellipse(target.pos.x,target.pos.y, target.size, target.size);

	//the crosshair
	fill(crosshair.color[0],crosshair.color[1],crosshair.color[2]);
	rect(mouseX, mouseY, crosshair.length, crosshair.width);
	rect(mouseX, mouseY, crosshair.width, crosshair.length);
    break;
		case "end":
			fill(255);
			textAlign(CENTER, CENTER);
			strokeWeight(4);
			stroke(255,0,0);
			textSize(windowHeight/10);
			text("GAME OVER", windowWidth/2, windowHeight*0.1);
			textSize(windowHeight/15);
			text("score: " +score, windowWidth/2, windowHeight*0.2);
			if(mouseX > (windowWidth/2 - windowWidth*0.3) && mouseX < (windowWidth/2 + windowWidth*0.3) && mouseY > (windowHeight/2 - windowHeight/10) && mouseY < (windowHeight/2 + windowHeight/10)){
				fill(255,0,0);
			}
			textSize(windowHeight/5);
			text("TRY AGAIN", windowWidth/2, windowHeight/2);
		break;
	}
}




