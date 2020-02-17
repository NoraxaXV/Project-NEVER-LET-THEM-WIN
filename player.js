var input = new Input();

class Player extends THREE.Mesh {
  constructor(cam,geometry,material) {
    super(geometry, material);

    this.camera = cam;
    this.attach(this.camera);
    this.velocity = new vec3();
    this.angularVelocity = new vec3();
    
    this.castShadow = true;
    this.receiveShadow = true;
    this.position.set(0, 0, 0);

    scene.add(this);
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
    this.translateOnAxis(new vec3(0, 0, 1), this.velocity.x);
    this.translateOnAxis(new vec3(1, 0, 0), this.velocity.z);
  
    this.rotateOnAxis(new vec3(0,1,0), this.angularVelocity.y);
    this.camera.rotateOnAxis(new vec3(1,0,0), this.angularVelocity.x);
  }

  update() {
    if (this.getInput()) {
      this.move();
    }
  }
}
