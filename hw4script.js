// *****************Homework4 Pt I script*************************
$(document).ready(function () {
    // Allows users to move items inside draggable in browser
    $( "#draggable" ).draggable();
});


document.addEventListener("DOMContentLoaded", function() {
    // Get references to the click button and result elements
    var calculateButton = document.getElementById("calculateButton");
    var resultDiv1 = document.getElementById("result1");
    var resultDiv2 = document.getElementById("result2");


    // function to calculate product and sum of every 4 integers between 5-25
    function fourProdSum() {
        var fourProd = 1; // Initialize fourProd to 1 for multiplication
        var fourSum = 0;  // Initialize fourSum to 0 for addition

        for (var fourCounter = 5; fourCounter <= 25; fourCounter += 4) {
            fourProd *= fourCounter; // Multiply every fourCounter
            fourSum += fourCounter;  // Add every fourCounter
        }

        return { fourProd: fourProd, fourSum: fourSum };
    }

    // function to calculate product and sum of every 3 integers between 3-18
    function threeProdSum() {
        var threeProd = 1; // Initialize threeProd to 1 for multiplication
        var threeSum = 0;  // Initialize threeSum to 0 for addition
    
        for (var threeCounter = 3; threeCounter <= 18; threeCounter += 3) {
            threeProd *= threeCounter; // Multiply every threeCounter
            threeSum += threeCounter;  // Add every threeCounter
        }
    
        return { threeProd: threeProd, threeSum: threeSum };
    }    

    // Attach a click event listener to calculateButton1 
    calculateButton1.addEventListener("click", function() {
        // Call the fourProdSum function when the button is clicked
        var result1 = fourProdSum();

        // Formatted result message for Result1
        var resultMessage =
        "The result of 5 * 9 * 13 * 17 * 21 * 25 is " + 
        "<span style='font-weight: bold; color: #417bcb;'>" +
        result1.fourProd.toLocaleString() +
        "</span>" +
        "<br>The result of 5 + 9 + 13 + 17 + 21 + 25 is " + 
        "<span style='font-weight: bold; color: #417bcb;'>"+
        result1.fourSum
        "</span>";

        // Display the result message in the resultDiv (using innerHTML to interpret HTML tags)
        resultDiv1.innerHTML = resultMessage;
    });

    calculateButton2.addEventListener("click", function() {
        // Call the fourProdSum function when the button is clicked
        var result2 = threeProdSum();
      
        // Formatted result message for Result2
        var resultMessage =   
        "The result of 3 * 6 * 9 * 12 * 15 * 18 is " + 
        "<span style='font-weight: bold; color: #417bcb;'>" +
        result2.threeProd.toLocaleString() +
        "</span>" +
        "<br>The result of 3 + 6 + 9 + 12 + 15 + 18 is " +
        "<span style='font-weight: bold; color: #417bcb;'>" +
        result2.threeSum +
        "</span>";

        // Display the result message in the resultDiv (using innerHTML to interpret HTML tags)
        resultDiv2.innerHTML = resultMessage;
    });
});

 




