// // code goes here :) 
// //filter, map, forEach, reduce
// // var priceS = items.filter(function(value,value2){
// // 	return value.price[value2];
// // })

//IIFE
(function(){


//Question 1: Average price
function getNum(a){
	var arrLen = a.length;
	var values = [];
	for(i=0; i< arrLen; i++){
		values.push(a[i].price);  
	}

	var getAvg = values.reduce(function(a,b){
		return a + b
	})
	var answer = getAvg/values.length;
	var result =Math.round(answer*100)/100;
	return document.getElementById('answer1').innerHTML = "The average price is $"+ result;
	
}
getNum(items)


// //Question 2: 14-18USD

// var rArray = items.map(function(obj){ 
   
//    var rObj= [obj.price, obj.title]
//  	return rObj;
// });

// var nArray = rArray.filter(function(value){
// 	return value[0] <18 && value[0] >14;
// })
// var dArray = function(nArray){
// 	var arrLen = nArray.length;
// 	var empt = [];
// 	for(i=0;i<arrLen;i++){
// 		empt.push(nArray[i][1]);
// 	}
// 	return empt.join(",	");	
// }
// document.getElementById('answer2').innerHTML = dArray(nArray)


// //Question 3: GBP

// var currArray = items.map(function(value){
// 	var arrVal = [value.currency_code, value.title, value.price]
// 	return arrVal;
// })

// var gbpArray = currArray.filter(function(value){
// 	return value[0] === "GBP";
// })

// function gbpAns(a){
// 	arrLen = a.length;
// 	empt = []
// 	for(i=0;i<arrLen;i++){
// 		empt.push(a[i][1]);
// 		empt.push(a[i][2]);
// 	}
// 	return empt;
// }
// document.getElementById('answer3').innerHTML = gbpAns(gbpArray);


//question 2: Get range 14-18

var priceFilter = items.filter(function(item){
	return item.price <18 && item.price >14;
})

priceFilter.forEach(function(value){
	document.getElementById('answer2').innerHTML += value.title +"<br>" + "<br>"
})


//question 3: find GBP currency_code
var gbpFilter = items.filter(function(item){
	return item.currency_code.indexOf('GBP') != -1;
})	

gbpFilter.forEach(function(value){
	document.getElementById('answer3').innerHTML =value.title + " costs £" + value.price
})


//question 4:  find wood items
var woodFilter = items.filter(function(item){
	return item.materials.indexOf('wood') !== -1
});

woodFilter.forEach(function(value){
	document.getElementById('answer4').innerHTML += value.title + "<br />" + "<br>"
});

//question 5:  find material lists >= 8
var items8 = items.filter(function(item){
	return item.materials.length >=8 ;
})

items8.forEach(function(value){
	document.getElementById('answer5').innerHTML += "<br>" + "<br>" + value.title+ " has "+ value.materials.length+ " materials "+ "<br> " +  "<br>" + value.materials.join("<br>");

})

//question 6: find sellers who made their own items

var madeBySelf = items.filter(function(item){
	return item.who_made === "i_did";
})

document.getElementById('answer6').innerHTML = madeBySelf.length + " were made by their sellers";

document.querySelector('h1').innerHTML= "Etsy Items"	


}());