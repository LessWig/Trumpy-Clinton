var canvasBg = document.getElementById("canvasBg"),
	ctxBg = canvasBg.getContext("2d"),
	canvasEntities = document.getElementById("canvasEntities"),
	ctxEntities = canvasEntities.getContext("2d"),
	canvasWidth = canvasBg.width,
	canvasHeight = canvasBg.height,
	background = new Background(0, 0),
	trump = new Trump(0, canvasHeight/2),
	clinton = new Clinton(canvasWidth, -20, 300, imgSprite3),
	clinton2 = new Kim(canvasWidth, canvasHeight - 300, 450, imgSprite4),
	clinton3 = new Putin(canvasWidth + 600, -20, 200, imgSprite5),
	clinton4 = new Clinton(canvasWidth + 600, canvasHeight - 445, 470, imgSprite3),
	requestAnimFrame = window.requestAnimationFrame ||
					   window.webkitRequestAnimationFrame ||
					   window.mozRequestAnimationFrame ||
					   window.oRequestAnimationFrame ||
					   window.msRequestAnimationFrame ||
					   function(callback) {
					   	window.setTimeout(callback, 1000 / 60);
					   },
	imgSprite = new Image(),
	imgSprite2 = new Image(),
	imgSprite3 = new Image(),
	imgSprite4 = new Image(),
	imgSprite5 = new Image();

imgSprite.src = "images/background.png";
imgSprite.addEventListener("load", init, false);
imgSprite2.src = "images/donaldtrump.png";
imgSprite2.addEventListener("load", init, false);
imgSprite3.src = "images/hillaryclinton.png";
imgSprite3.addEventListener("load", init, false);
imgSprite4.src = "images/kim.png";
imgSprite4.addEventListener("load", init, false);
imgSprite5.src = "images/putin.png";
imgSprite5.addEventListener("load", init, false);




function init() {
	document.addEventListener("keydown", function(e) {checkKey(e, true);}, false);
	document.addEventListener("keyup", function(e) {checkKey(e, false);}, false);
	begin();
}

function begin() {
	isPlaying = true;
	requestAnimFrame(loop);
}

function update() {
	clearCtx(ctxBg);
	clearCtx(ctxEntities);
	trump.update();
	clinton.update();
	clinton2.update();
	clinton3.update();
	clinton4.update();
}

function draw() {
	background.draw();
	trump.draw();
	clinton.draw();
	clinton2.draw();
	clinton3.draw();
	clinton4.draw();
}

function loop() {
	if (isPlaying) {
		update();
		draw();
		requestAnimFrame(loop);
	}
}

function clearCtx(ctx) {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function Background(x, y) {
	this.drawX = x;
	this.drawY = y;
	this.height = canvasHeight;
	this.width = canvasWidth;
}

Background.prototype.draw = function() {
	ctxEntities.drawImage(imgSprite, this.drawX, this.drawY, canvasWidth, canvasHeight);
}

function Trump(x, y) {
	this.drawX = x;
	this.drawY = y;
	this.height = 70;
	this.width = 70;
	this.isMovingRight = false;
	this.isFalling = true;
}

Trump.prototype.update = function() {
	if(this.isMovingRight) {
		this.drawX += 2;
		this.drawY -= 5;
		if(this.drawX >= canvasWidth/2){
			this.drawX = canvasWidth/2;
		}
	}
	if(this.isFalling) {
		this.drawY +=1;
	}
		if(collision(trump, clinton)) {
		console.log();
		trump.drawX = 0;
	}
	if(collision(trump, clinton2)) {
		console.log();
		trump.drawX = 0;
	}
	if(collision(trump, clinton3)) {
		console.log();
		trump.drawX = 0;
	}
	if(collision(trump, clinton4)) {
		console.log();
		trump.drawX = 0;
	}	
}

Trump.prototype.draw = function() {
	ctxEntities.drawImage(imgSprite2, this.drawX, this.drawY, this.width, this.height);
}

function Clinton(x, y, z) {
	this.drawX = x;
	this.drawY = y;
	this.height = z;
	this.width = 200;
	this.isMovingLeft = true;
}

Clinton.prototype.update = function() { //put collisions under Trump update function
	if(this.isMovingLeft) {
		this.drawX -=1.5;
		if(this.drawX < canvasWidth - 1200) {
			this.drawX = canvasWidth + 16;
		}
	}		
}

Clinton.prototype.draw = function() {
	ctxEntities.drawImage(imgSprite3, this.drawX, this.drawY, this.width, this.height);
}

function checkKey(e, value) {
	var keyID = e.keyCode || e.which;
	if(keyID === 32) {
		trump.isMovingRight = value;
		e.preventDefault();
	}
}

function testCollision(a, b) {
	return a.drawX <= b.drawX + b.width &&
		a.drawX >= b.drawX &&
		a.drawY <= b.drawY + b.height &&
		a.drawY >= b.drawY;
}

function collision(a, b) {
	return testCollision(a, b) || testCollision(b, a);
}


















function Kim(x, y, z) {
	this.drawX = x;
	this.drawY = y;
	this.height = z;
	this.width = 200;
	this.isMovingLeft = true;
}

Kim.prototype.update = function() { //put collisions under Trump update function
	if(this.isMovingLeft) {
		this.drawX -=1.5;
		if(this.drawX < canvasWidth - 1200) {
			this.drawX = canvasWidth + 16;
		}
	}		
}

Kim.prototype.draw = function() {
	ctxEntities.drawImage(imgSprite4, this.drawX, this.drawY, this.width, this.height);
}



















function Putin(x, y, z) {
	this.drawX = x;
	this.drawY = y;
	this.height = z;
	this.width = 200;
	this.isMovingLeft = true;
}

Putin.prototype.update = function() { //put collisions under Trump update function
	if(this.isMovingLeft) {
		this.drawX -=1.5;
		if(this.drawX < canvasWidth - 1200) {
			this.drawX = canvasWidth + 16;
		}
	}		
}

Putin.prototype.draw = function() {
	ctxEntities.drawImage(imgSprite5, this.drawX, this.drawY, this.width, this.height);
}

















function Clinton(x, y, z) {
	this.drawX = x;
	this.drawY = y;
	this.height = z;
	this.width = 200;
	this.isMovingLeft = true;
}

Clinton.prototype.update = function() { //put collisions under Trump update function
	if(this.isMovingLeft) {
		this.drawX -=1.5;
		if(this.drawX < canvasWidth - 1200) {
			this.drawX = canvasWidth + 16;
		}
	}		
}

Clinton.prototype.draw = function() {
	ctxEntities.drawImage(imgSprite3, this.drawX, this.drawY, this.width, this.height);
}