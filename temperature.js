" use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /\s*([-+]?\d+(?:\.\d*)?\s*(?:([eE][-+]?[0-9]+)?))\s*([fFcC]$|[fF][a]$|[fF][a][r]$|farenheit|Farenheit)/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[3];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' '4.2f' '4.2far' '4.2 farenheit' instead ";
  }
}
