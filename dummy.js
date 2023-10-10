$(document).ready(function () {
    // Allows users to move items inside draggable in browser

    $(".draggable").draggable();

});

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
       const parentDiv = document.getElementById("draggable-box");
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
           row.style.backgroundColor = n % 2 === 0 ? "#e20707" : "#417bcb";

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
