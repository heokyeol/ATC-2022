
let flakes = []; 

function setup() {
  createCanvas(400, 600);
  fill(240);
  background(0,0,0);
  frameRate(60);
  // noStroke();
  stroke(255,255,255);
  
}

function draw() {
  // background('brown', 0.5);
  background(0,0,0,5);
  let t = frameCount / 60;

  
  for (let i = 0; i < random(5); i++) {
    flakes.push(new flake());
  }

  for (let flake of flakes) {
    flake.update(t); 
    flake.display(); 
  }
}

// flake 클래스
function flake() {
  this.posX = 0;
  this.posY = random(-50, -10);
  this.posXp = this.posX;
  this.posYp = this.posY;
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6; // 각속도
    let angle = w * time + this.initialangle;
    this.posXp = this.posX;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posYp = this.posY;
    this.posY += pow(this.size, 1);

    if (this.posY > height) {
      let index = flakes.indexOf(this);
      flakes.splice(index, 1);
    }
  };

  this.display = function() {
    // ellipse(this.posX, this.posY, this.size);
    line(this.posX, this.posY, this.posXp, this.posYp);
  };
}