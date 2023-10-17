// *****************Homework4 Pt I script*************************
$(document).ready(function () {
    // Allows users to move items inside draggable in browser
    $( "#draggable" ).draggable();
});

document.addEventListener("DOMContentLoaded", function() {
    // Get references to the click button and result elements
    var calculateButton1 = document.getElementById("calculateButton1");
    var calculateButton2 = document.getElementById("calculateButton2");
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
        var threeCounter = 3; // Initialize threeCounter to 3
        
        while (threeCounter <= 18) {
            threeProd *= threeCounter; // Multiply every threeCounter
            threeSum += threeCounter;  // Add every threeCounter
            threeCounter += 3; // Increment threeCounter by 3
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

// *****************Homework4 Pt 2 script*************************
// Array of interest rates
const interestRates = ["5", "6", "7"];

// Function to create a table for a given interest rate
function createTable(interestRate) {
    // Generate a unique ID for each table
    const tableId = `table-${interestRate.replace('%', '')}`;

    // Create a container div for the table
    const containerDiv = document.createElement("div");
    containerDiv.id = tableId;
    containerDiv.classList.add("hwkpt2");

    // Append the container div to the parent element
    const parentDiv = document.getElementById("table-box");
    parentDiv.appendChild(containerDiv);

    // Create a title above the table
    const title = document.createElement("h3");
    title.textContent = `Compound ${interestRate}% Interest Rate`;
    containerDiv.appendChild(title);

    // Create the table inside the container div
    const table = document.createElement("table");
    table.setAttribute("border", "1");

    const caption = document.createElement("caption");
    caption.style.display = "none";
    caption.textContent = "Amount and rate table";

    const thead = document.createElement("thead");
    const theadRow = document.createElement("tr");
    theadRow.style.backgroundColor = " #1d0e6b";
    theadRow.style.color = "white";

    const thYear = document.createElement("th");
    thYear.setAttribute("scope", "col");
    thYear.textContent = "Year";

    const thAmount = document.createElement("th");
    thAmount.setAttribute("scope", "col");
    thAmount.textContent = "Amount on deposit ($)";

    const thInterestRate = document.createElement("th");
    thInterestRate.setAttribute("scope", "col");
    thInterestRate.textContent = "Interest Rate (%)";

    theadRow.appendChild(thYear);
    theadRow.appendChild(thAmount);
    theadRow.appendChild(thInterestRate);

    thead.appendChild(theadRow);

    const tbody = document.createElement("tbody");

    // Loop through years (n)
    for (let n = 1; n <= 5; n++) {
        const row = document.createElement("tr");
        row.style.backgroundColor = n % 2 === 0 ? "#e20707" : "#417bcb"; // Rotate colors for each row

        const tdYear = document.createElement("td");
        tdYear.style.border = "1px solid gray";
        tdYear.textContent = n;

        const tdAmount = document.createElement("td");
        tdAmount.style.border = "1px solid gray";

        // Calculate the amount (A) using the formula
        const P = 1000; // Principal amount
        const r = parseFloat(interestRate) / 100; // Convert interest rate to a decimal
        const A = P * Math.pow(1 + r, n);

        tdAmount.textContent = A.toFixed(2); // Format the amount to two decimal places

        const tdInterestRate = document.createElement("td");
        tdInterestRate.style.border = "1px solid gray";
        tdInterestRate.textContent = interestRate;

        row.appendChild(tdYear);
        row.appendChild(tdAmount);
        row.appendChild(tdInterestRate);

        tbody.appendChild(row);
    }

    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);

    containerDiv.appendChild(table);
}

// Create tables for each interest rate
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < interestRates.length; i++) {
        createTable(interestRates[i]);
    }
});