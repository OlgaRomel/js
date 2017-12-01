'use strict';
console.log("arrays");


//dz 1
var tar = 23;
var fairy = 34;
/* while () {
// 0.5 fairy - 1 tar
// console.log(fairy)
} console.log(fairy || tar) */
var i=0, j=0;
while (i<tar && j<fairy) {
    i++;
    j += 0.5;
   // console.log(i, j);
} 

i === tar ? console.log("все тарелки вымыты") : console.log("осталось не намыто ",tar-i ,"тарелок"); 
j === fairy ? console.log("моющее средство закончилось") : console.log("осталось моющего ",fairy-j ,"средства"); 

// dz 2

for (var n=1 ; n<=10 ; n++) {
    switch (n) {
        case 1:
            console.log(n,"фунт =", n*0.454, "кг"); 
            break;
        case 2: 
        case 3:
        case 4:
            console.log(n,"фунта =", n*0.454, "кг");
            break;
        default:
            console.log(n,"фунтов =", n*0.454, "кг");
    }
}

//dz 4

var x1=1, x2=2;
var y1=3, y2=2;
var z1=3, z2=5;

// dz 5
var arrNum = [21, 14, 6, 8, 19, 3];
console.log(arrNum);

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





