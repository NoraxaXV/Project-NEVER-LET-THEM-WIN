function Input() {
  this.keys = new Array(128);
  var self = this;
  for (var i = 0; i < this.keys.length; i++) {
    this.keys[i] = false;
  }
  window.onkeydown = function (e) {
    self.keys[e.keyCode] = true;
  };
  window.onkeyup = function (e) {
    self.keys[e.keyCode] = false;
  };
  this.getKey = function (key) {
    if (this.keys[key]) {
      return true;
    } else {
      return false;
    }
  };
}

