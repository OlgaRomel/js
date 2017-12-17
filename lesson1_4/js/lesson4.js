(function(){
'use strict';
console.log("1 задача");

var  city1 = {};
city1.name = "Soul";
city1.population = "400000";
city1.mayor = "Hyun";

var city2 = {
    name: "SaintPetersburg",
    population: "500000",
    mayor: "Georg",
};

console.log(city1);
console.log(city2);

city1.seizure = function(n) {
    this.population = parseInt(this.population) + n;
    city2.population = parseInt(city2.population) - n;
}

city1.seizure(1000);
console.log(city1.population, city2.population);

var mayorName = function(name) {
    if (city1.mayor.localeCompare(name) === 0) {
        console.log ("mayor of sity ",city1.name);
    }else {
        console.log ("mayor of sity ",city2.name);
    }
};

function showMayor () {
    console.log(this.mayor);
}

function changeMayor(new_val) {
    this.mayor = new_val;
    console.log(this.mayor);
}

showMayor.call(city1);//["New Name"]
showMayor.apply(city1);//[arr]


mayorName("Georg");


var president = {
    changeCountryMayor: function (new_name) {
        this.mayor = new_name;
    },
 //   getName: function() {
 //       return this.name;
 //   }
};

president.changeCountryMayor.call(city1, "m name");
console.log(president, city1);
console.log(president, city1.mayor);



/*
var president = {
    changeCountryMayor: function (argument) {
        if (argument === city1.name) {
            president = city1;
            president.mayor = "Tolya"; 
            console.log("New mayor ",city1.name, city1.mayor);        
        }else {
            president = city2;
            president.mayor = "Slava";
            console.log("New mayor ",city2.name, city2.mayor);  
        }
    },
};

var test = function(logos) {
    if (confirm ("Change mayor Soul?")) {
        president.changeCountryMayor("Soul");
    } else {
        if (confirm ("Change mayor SaintPetersburg?")) {
            president.changeCountryMayor("SaintPetersburg");
        } else {
            console.log ("Change did not happen");
        }
    }
};

//test();
*/
console.log("2 задача");

var str = "fanfarionfar";
var str1 = 'far';
// console.log (str);
// var substr = str.substring(3,6);
// console.log (substr);

function search(str, substr) {
    var i = 0;
    var j = 0;
    while (true) {
        var len = str.indexOf(str1,i);
        if (len == -1) break;
        i = len + 1;
        j++;
    } return j;
};

console.log("количество повторений подстроки", search());


}())