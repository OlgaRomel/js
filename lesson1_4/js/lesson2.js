'use strict';
console.log("arrays");


//dz 1
console.log("\nЗадача 1");
var tar = 23;
var fairy = 34;
while (tar>0 && fairy>0) {
    tar--;
    fairy -= 0.5;
   // console.log(i, j);
} 

0 === tar ? console.log("все тарелки вымыты") : console.log("осталось не намыто ",tar ,"тарелок"); 
0 === fairy ? console.log("моющее средство закончилось") : console.log("осталось моющего ",fairy ,"средства"); 

// dz 2
console.log("\nЗадача 2");

for (var n=1 ; n<=10 ; n++) {
    switch (n) {
        case 1:
            console.log(n + " фунт =",n*0.454 + " кг"); 
            break;
        case 2: 
        case 3:
        case 4:
            console.log(n + " фунта =",n*0.454 + " кг");
            break;
        default:
            console.log(n + " фунтов =",n*0.454 + " кг");
    }
}

//dz 4
console.log("\nЗадача 4");
var x1=1, x2=2;
var y1=3, y2=2;
var z1=3, z2=5;
console.log("треугольник\nx1 x2", x1,x2, '\ny1 y2', y1,y2, '\nz1 z2', z1,z2);

var x = (x1-y1)*(x1-y1)+(x2-y2)*(x2-y2);
var y = (y1-z1)*(y1-z1)+(y2-z2)*(y2-z2);
var z = (x1-z1)*(x1-z1)+(x2-z2)*(x2-z2);

if (x===y+z || y===x+z || z===x+y) {
    console.log("треугольник прямоугольный");
} else {
    console.log("треугольник не прямоугольный")
}
// dz 5
console.log("\nЗадача 5");
var arrNum = [21, 14, 6, 8, 19, 3];
console.log("массив\n",arrNum);

for (let a = arrNum.length; a>0; a--) {
    for (let b = 0; b<a; b++) {
        if (arrNum[b]>arrNum[b+1]){
            let c = arrNum[b];
            arrNum[b]=arrNum[b+1];
            arrNum[b+1]=c;
            }
    }
}
console.log("массив после сортировки \n",arrNum);





