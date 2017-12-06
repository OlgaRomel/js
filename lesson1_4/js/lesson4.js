(function(){
'use strict';
console.log("1 задача");

var  sity1 = {};
sity1.name = "Soul";
sity1.population = "400000";
sity1.mayor = "Hyun";

var sity2 = {
    name: "SaintPetersburg",
    population: "500000",
    mayor: "Georg",
};

console.log(sity1);
console.log(sity2);

sity1.seizure = function(n) {
    sity1.population = parseInt(sity1.population) + n;
    sity2.population = parseInt(sity2.population) - n;
}

sity1.seizure(1000);
console.log(sity1.population, sity2.population);

var mayorName = function(name) {
    if (sity1.mayor.localeCompare(name) === 0) {
        console.log ("mayor of sity ",sity1.name);
    }else {
        console.log ("mayor of sity ",sity2.name);
    }
};

mayorName("Georg");

var president = {
    changeCountryMayor: function (argument) {
        if (argument === sity1.name) {
            president = sity1;
            president.mayor = "Tolya"; 
            console.log("New mayor ",sity1.name, sity1.mayor);        
        }else {
            president = sity2;
            president.mayor = "Slava";
            console.log("New mayor ",sity2.name, sity2.mayor);  
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

test();





}())