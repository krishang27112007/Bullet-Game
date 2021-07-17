var wall, thickness;
var speed, weight, bullet;

function setup() {
  createCanvas(1600, 400);
  thickness = random(28, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1200, 200, thickness, height / 2);
}

function draw() {
  background(0);

  bullet.shapeColor = "blue";
  bullet.velocityX = speed;

  if (wall.x - bullet.x < wall.width / 2 + bullet.width / 2) {
    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22500;
    if (deformation > 180) {
      wall.shapeColor = color(255, 0, 0);//wall colour will change to red as the deformation is maximum
    }
    else if (deformation < 180 && deformation > 100) {
      wall.shapeColor = color(230, 230, 0);//wall colour will change to yellow as the deformation is in the medium range
    }
    else if (deformation < 100) {
      wall.shapeColor = color(0, 255, 0);//wall colour will change to green as the deformation is minimum
    }
  }

  drawSprites();
}

//1100(deal price)
//1500(orignal price)
//both above are counted a quaterly
