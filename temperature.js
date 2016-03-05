" use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d*)?\s*(?:([eE][-+]?[0-9]+)?))\s*([fFcC]\s*$|[fF][a]?[h]?[r]?[e]?[n]?[h]?[e]?[i]?[t]?\s*$|fahrenheit$|Fahrenheit$|[cC][e][l]?[s]?[i]?[u]?[s]?\s*$|celsius$|Celsius$)/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[3];
    num = parseFloat(num);
    mayus=type.toUpperCase();
    console.log("->"+mayus);
    if(type=="/[C][E]?[L]?[S]?[I]?[U]?[S]?\s*$/")    {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
    alert(result);
  }
  else {
    alert("ERROR! Try something like '-4.2C' '4.2f' '4.2far' '4.2 farenheit' instead ");
  }
  return false;
}
