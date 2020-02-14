var input = new Input();

class Player {
  constructor(cam) {
    this.camera = cam;
    this.velocity = new vec3();
    this.angularVelocity = new vec3();
  }

  getInput() {
    //is there input?
    var isInput = false;

    var reverseStrafe = 1;
    
    if (input.getKey(directions.up)) {
      this.velocity.x = -0.1;
      isInput = true;
    } else if (input.getKey(directions.down)) {
      this.velocity.x = 0.1;
      isInput = true;
    } else {
      this.velocity.x = 0;
      isInput = true;
    }

    if (input.getKey(directions.right)) {
      this.angularVelocity.y = 0.04;
      isInput = true;
    } else if (input.getKey(directions.left)) {
      this.angularVelocity.y = -0.04;
      isInput = true;
    } else {
      this.angularVelocity.y = 0;
    }

    if (input.getKey(directions.strafeLeft)) {
      this.velocity.z = -0.1;
      this.angularVelocity *= -1;
      isInput = true;
    } else if (input.getKey(directions.strafeRight)) {
      this.velocity.z = 0.1;
      this.angularVelocity *= -1;
      isInput = true;
    } else {
      this.velocity.z = 0;
    }

    return isInput;
  }
  checkForCollisions(desiredPosition) {
    return false;
  }
  move() {
    if(this.velocity.x!=this.velocity.x){
      console.log("AHHHHHHH!!");
    }
    this.camera.rotateOnAxis(new vec3(0, 1, 0), this.angularVel);
    this.camera.translateOnAxis(new vec3(0, 0, 1), this.velocity.x);
    this.camera.translateOnAxis(new vec3(1, 0, 0), this.velocity.z);
  }

  update() {
    if (this.getInput()) {
      this.move();
    }
  }
}
