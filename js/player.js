function Player(ctx) {
  this.ctx = ctx;

  this.x = 50;
  this.w = 150;
  this.h = 150;
  this.y = this.ctx.canvas.height - this.h;


  this.img = new Image();
  this.img.src = "https://cdn.codeandweb.com/blog/2014/11/05/animate-sprites-in-css-with-texturepacker/capguy-walk.png";

  this.img.frames = 8;
  this.img.frameIndex = 0;
  this.framesCounter = 0;

  //this.setListeners();

}

Player.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  )

  this.framesCounter += 1;

};

Player.prototype.move = function() {
  this.animate();
};

Player.prototype.shoot = function() {
};

Player.prototype.SPACE = 32;

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case this.SPACE:
        // ...
        break;
    }
  }.bind(this);
};

Player.prototype.animate = function() {
  if (this.framesCounter % 6 === 0) {
    this.img.frameIndex += 1;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }

    console.log(this.framesCounter);
    
    this.framesCounter = 0;
  }
}