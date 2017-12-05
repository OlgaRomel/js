(function (){
'use strict';
console.log("function");

console.log("1 задача");

function checkType(a) {
    if (typeof a === "number") {
        return true;
    } 
}

function calc (a, b, operator) {
    var x=a, y=b;
    if (checkType(x) || checkType(y) || x!==0 || y!==0) {
        switch(operator) {
            case "+":
                return a+b;
            case "-":
                return a-b;
            case "/":
                return a/b;
            case "*":
                return a*b;
            case "%":
                return a%b;
            default:
                return "таких вычислений не производит"
        }
    } else {
        return "введены не корректные данные"
    }
}

console.log(calc(4,2,"jh"));

console.log("2 задача");

function sumNum(n) {
    if (checkType(n)&& n>10) {
        var newN = (n-n%10)/10;
        return n%10 + sumNum(newN);
    }else {
        return n;
    }   
}

console.log(sumNum(1215));

console.log("3 задача");

function curry(a) {
    return function (b) {
      return a+b; 
    };
  }
   
  var inc = curry(1);
  console.log("increment",inc(5)); // 6
   
  var dec = curry(-1);
  console.log("decrement",dec(5)); // 2
   
  var plusFive = curry(5);
  console.log("plusFive",plusFive(5));


}())