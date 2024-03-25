//! Task - 1 : Comparing JSON objects without order :-
let obj1 = { name: "aj", age: 25 };
let obj2 = { age: 25, name: "unknown" };

function orderList(obj) {
    let orderKey = Object.keys(obj).sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    let orderObj = {};
    orderKey.forEach(key => {
        orderObj[key] = obj[key];
    })
    return orderObj;
}

let a1 = JSON.stringify(orderList(obj1));
let b1 = JSON.stringify(orderList(obj2));

if (a1 === b1) {
    console.log("JSON objects are equal");
} else {
    console.log("JSON objects are not equal");
}



//!Task - 2: Printing countries' Flags :-
var list = new XMLHttpRequest();

list.open("GET", "https://restcountries.com/v3.1/all", true);

list.send();

list.onload = function () {
    var data = list.response;
    var result = JSON.parse(data);
    for (var i = 0; i < result.length; i++) {
        console.log(
            "Country : " + " " + result[i].name.common +",",
            result[i].flags.png);
    }
}



//!Task - 3: Printing countries' names, regions, sub-regions and population :-
var list2 = new XMLHttpRequest();
list2.open("GET", "https://restcountries.com/v3.1/all", true);
list2.send();

list2.onload = function () {
    var data2 = list2.response;
    var result2 = JSON.parse(data2);
    for (var i = 0; i < result2.length; i++) {
        console.log(
            "Country : " + " " + result2[i].name.common +",",
            "Region : " + " " + result2[i].region +",",
            "Sub-Region : " + " " + result2[i].subregion +",",
            "Population : " + " " + result2[i].population +".",);
    }
};