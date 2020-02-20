module.exports = function reverse (n) {
  var arr = String(n).split('');
  if (arr[0] === '-') {
      arr.shift();
  }
  var reverseStr = arr.reverse().join('');
  return Number(reverseStr);
}
