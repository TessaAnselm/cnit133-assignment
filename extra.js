document.addEventListener("DOMContentLoaded", function() {
    // DOM is fully loaded
    var calculateButton = document.getElementById("calculateButton");
    
      calculateButton.addEventListener("click", function() {
        var number6 = document.getElementById("userInput").value;
        // Perform calculations in exchange function
        calculateExchange(number6);
      });
   
  });

function calculateExchange(inputValue) {
        
	var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5, n6;
	var euroVal, canadaVal, hongkongVal, japanVal, mexicoVal;

	number1 = document.getElementById("euroRate").value;
	number2 = document.getElementById("canadaRate").value;
	number3 = document.getElementById("hkRate").value;
	number4 = document.getElementById("japanRate").value;
	number5 = document.getElementById("pesoRate").value;

	n1 = parseFloat(number1);
	n2 = parseFloat(number2);
	n3 = parseFloat(number3);
	n4 = parseFloat(number4);
	n5 = parseFloat(number5);
	n6 = parseFloat(inputValue);

	
	euroVal = n6 * n1;
	canadaVal = n6 * n2;
	hongkongVal = n6 * n3;
	japanVal = n6 * n4;
	mexicoVal = n6 * n5;

    document.getElementById("euro").innerHTML = euroVal.toFixed(2);
    document.getElementById("canada").innerHTML = canadaVal.toFixed(2);
    document.getElementById("hongkong").innerHTML = hongkongVal.toFixed(2);
    document.getElementById("japan").innerHTML = japanVal.toFixed(2);
    document.getElementById("mexico").innerHTML = mexicoVal.toFixed(2);

}