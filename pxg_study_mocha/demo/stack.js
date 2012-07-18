(function() {

window.Stack = Stack;

function Stack(limit) {
  this.limit = limit;
  this.stack = [];
}

Stack.prototype.size = function() {
  return this.stack.length;
};

Stack.prototype.push = function(val) {
  if (typeof val !== 'string') { 
    throw new Error('value is not string');
  }

  if (this.limit <= this.stack.length) {
    throw new Error('stack is full');
  }

  this.stack.unshift(val);
};

Stack.prototype.pop = function(val) {
  if (this.stack.length === 0) {
    throw new Error('stack is empty');
  }

  return this.stack.shift(val);
};

})();
