var input = new Input();

class Player extends THREE.Object3D {
  constructor(cam) {
    super();
    this.camera = cam;
    this.children.push(camera);
    camera.parent=this;
    this.velocity = new vec3();
    this.angularVelocity = new vec3();
  }

  getInput() {
    //is there input?
    var isInput = false;
    //Get foward movement
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
    
    //Get look movement
    if (input.getKey(directions.right)) {
      this.angularVelocity.y = 0.04;
      isInput = true;
    } else if (input.getKey(directions.left)) {
      this.angularVelocity.y = -0.04;
      isInput = true;
    } else {
      this.angularVelocity.y = 0;
    }

    //Get strafe movement, reversing look movement
    if (input.getKey(directions.strafeLeft)) {
      this.velocity.z = -0.1;
      this.angularVelocity.y *= -1;
      isInput = true;
    } else if (input.getKey(directions.strafeRight)) {
      this.velocity.z = 0.1;
      this.angularVelocity.y *= -1;
      isInput = true;
    } else {
      this.velocity.z = 0;
    }
    
    //Get look up/down
    if (input.getKey(directions.lookUp)) {
      this.angularVelocity.x = 0.04;
      isInput = true;
    } else if (input.getKey(directions.lookDown)) {
      this.angularVelocity.x = -0.04;
      isInput = true;
    } else {
      this.angularVelocity.x = 0;
    }

    return isInput;
  }
  checkForCollisions(desiredPosition) {
    return false;
  }
  move() {
    
    //this.camera.position=this.position;
    this.camera.applyQuaternion(this.quaternion);

    this.translateOnAxis(new vec3(0, 0, 1), this.velocity.x);
    this.translateOnAxis(new vec3(1, 0, 0), this.velocity.z);
  }

  update() {
    if (this.getInput()) {
      this.move();
    }
  }
}
