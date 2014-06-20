function average(arr) {
  var sum = arr.reduce(function(a, b) { return a + b; });
  return sum / arr.length;
}

console.log(average([10, 20]));
