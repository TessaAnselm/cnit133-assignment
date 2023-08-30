$(document).ready(function() {
 var calculateButton = $("#calculateButton");
	calculateButton.click(function() {
		calculateExchange();
	});
});
function calculateExchange() {
        
	var number1, number2, number3, number4, number5, number6, n1, n2, n3, n4, n5, n6;
	var euroVal, canadaVal, hongkongVal, japanVal, mexicoVal;

	number1 = document.getElementById("euroRate").value;
	number2 = document.getElementById("canadaRate").value;
	number3 = document.getElementById("hkRate").value;
	number4 = document.getElementById("japanRate").value;
	number5 = document.getElementById("pesoRate").value;
	number6 = document.getElementById("userInput").value;

	n1 = parseFloat(number1);
	n2 = parseFloat(number2);
	n3 = parseFloat(number3);
	n4 = parseFloat(number4);
	n5 = parseFloat(number5);
	n6 = parseFloat(number6);

	//multiple input with exchange rate
	euroVal = n6 * n1;
	canadaVal = n6 * n2;
	hongkongVal = n6 * n3;
	japanVal = n6 * n4;
	mexicoVal = n6 * n5;

	//display results into respective fields
    document.getElementById("euro").innerHTML = euroVal.toFixed(2);
    document.getElementById("canada").innerHTML = canadaVal.toFixed(2);
    document.getElementById("hongkong").innerHTML = hongkongVal.toFixed(2);
    document.getElementById("japan").innerHTML = japanVal.toFixed(2);
    document.getElementById("mexico").innerHTML = mexicoVal.toFixed(2);

};