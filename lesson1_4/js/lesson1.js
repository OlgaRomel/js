// однострочный комментарий
/*
многострочные
*/

'use strict';
console.log("Lesson 1", "info");  //отладка
let a = 5;
let b = 4;
let c = 3;
console.log("a=",a, ", b=",b,", c=",c);
let s = 2*(a*b+b*c+a*c);
console.log("s'abc' = ",s);
let res = c > b ? "высота больше ширины" : "ширина больше высоты";
console.log(res);

let z2 = 1000 % (15*25);
console.log("res z2= ",z2,"м2");

let z3 = 15 * 100 - 600;
console.log("res z3= ",z3,"см2");

let x = 126;
let y = 28;
let z4 = x%y === 4 ? console.log("x+y=",x+y) : console.log("x-y=",x-y);