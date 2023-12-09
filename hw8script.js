
//****************************Homework 8************************************** */
// Function to handle the AJAX process for loading CD data
function loadDoc() {
    // Create a new XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define what happens on successful data submission
    xhttp.onload = function() {
        // Check if the request was successful
        if (this.status === 200) {
            try {
                // Call the function to display the CD data, passing the XML response
                displayCdData(this.responseXML);
            } catch (error) {
                // Log an error message if there's an issue processing the XML
                displayError('Error processing XML', error);
            }
        } else {
            // Log an error message if the request was not successful
            displayError('Error loading XML', this.statusText);
        }
    };

    // Initialize a GET request to fetch the cd_catalog.xml file
    xhttp.open("GET", "AjaxAssignment/cd_catalog.xml");

    // Send the request
    xhttp.send();
}

// Function to display error messages
function displayError(errorMessage, errorDetail) {
    const errorContainer = document.getElementById("cdData");
    errorContainer.innerHTML = `<p class="error-message">${errorMessage}: ${errorDetail}</p>`;
    console.error(errorMessage, errorDetail);
}

// Function to display CD data in a table format
function displayCdData(xmlDoc) {
    const cds = xmlDoc.getElementsByTagName("CD"); // Get all CD elements
    let table = "<tr><th>Artist</th><th>Title</th></tr>"; // Start the table with headers

    // Loop through each CD element
    for (const cd of cds) {
        // Extract artist and title text
        const artist = cd.getElementsByTagName("ARTIST")[0].textContent;
        const title = cd.getElementsByTagName("YEAR")[0].textContent;

        // Append a row to the table for each CD
        table += `<tr><td>${artist}</td><td>${year}</td></tr>`;
    }

    // Update the innerHTML of the 'cdData' element with the constructed table
    document.getElementById("cdData").innerHTML = table;
}


// Function to create and display an ordered list of process steps
document.getElementById('showProcess').addEventListener('click', function() {
    // Define the process steps as an array of strings
    const processSteps = [
        "Making the Order (Sending the AJAX Request): <br>You decide you're hungry for some data. This is like picking up your phone and dialing the pizza place to order pizza.",
        "Waiting for the Pizza (Waiting for the Response): <br>After placing your order, you go back to your activities. Meanwhile, the pizza place prepares your order.",
        "Pizza is Ready! (Receiving the Response): <br>The pizza place lets you know that your pizza is ready. You check to make sure it's the right order.",
        "Unboxing the Pizza (Processing the Data): <br>You open the pizza box and check out each slice. This is like processing the XML data.",
        "Enjoying Your Meal (Displaying the Data): <br>You arrange the pizza slices on plates, similar to how the data is arranged in a readable format on the webpage.",
        "Sharing the Pizza (Updating the Webpage): <br>You invite everyone to eat. The webpage is updated with the new data.",
        "Handling Pizza Mishaps (Error Handling): <br>If something goes wrong, like receiving the wrong pizza, you know how to handle it. This is like error checking in your code."
    ];

    // Create an ordered list element
    const processList = document.createElement('ol');

    // For each step, create a list item, set its innerHTML, and append it to the list
    processSteps.forEach(step => {
        const listItem = document.createElement('li');
        listItem.innerHTML = step;
        processList.appendChild(listItem);
    });

    // Get the container element and set its content to the process list
    const container = document.getElementById('processContainer');
    container.innerHTML = ''; // Clear any previous content
    container.appendChild(processList); // Add the process list to the container
});

  
//*************************************REST API**************************************** */

// Adding an event listener to the button with the ID 'showReport'
document.getElementById('showReport').addEventListener('click', function() {
    // Defining the content of the report as a string literal
    const reportContent = `
    <p><strong>Enhancing Heart Pizza's Online System with CalorieNinjas API</p>
    <p>Purpose:</strong><br>We are poised to take Heart Pizza's online ordering system to the next level by integrating the CalorieNinjas API. This tool provides essential nutritional information, including calorie counts, for all our pizza ingredients, enriching our customers' experience with valuable health insights.</p>
    <p><strong>JSON Response Format:</strong><br>The API offers data in JSON format, ensuring compatibility with modern web technologies and facilitating easy data handling in our web application.</p>
    <p><strong>API Key Requirement:</strong><br>Access to the API is secured with an API key, providing a layer of protection and ensuring that our data transactions are safe and authenticated.</p>
    <p><strong>Cost-Effectiveness:</strong><br>The API's flexible pricing structure allows us to start with basic, free features, with the option to scale up as our needs grow and evolve.</p>
    <p><strong>Comprehensive Documentation:</strong><br>Detailed <a href='https://calorieninjas.com' target='_blank'>documentation</a> is available to guide our developers through seamless integration and effective utilization of the API.</p>
    <p>By adopting the CalorieNinjas API, we are not just improving our service offerings but also moving towards a more informed and health-conscious business model.</p>
`;

    // Inserting the report content into the element with the ID 'reportContainer'
    document.getElementById('reportContainer').innerHTML = reportContent;
});

// Adding an event listener to the button with the ID 'calculateCalories'
document.getElementById('calculateCalories').addEventListener('click', function() {
    // Retrieving the value of the input field with the ID 'ingredients'
    const ingredients = document.getElementById('ingredients').value;

    // Fetching data from the CalorieNinjas API using the ingredients provided by the user
    fetch(`https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(ingredients)}`, {
        headers: { 'X-Api-Key': 'Wp8RZrtU4h5nv4LxhQrxTg==ourU0D694CVXILNx' } // CalorieNinjas API key
    })
    .then(response => response.json()) // Parsing the response to JSON format
    .then(data => {
        // Calculating the total calories by summing up the calories of each ingredient
        const calories = data.items.reduce((total, item) => total + item.calories, 0);

        // Displaying the total calories in the element with the ID 'calorieResult'
        document.getElementById('calorieResult').innerText = `Total Calories for Mushroom Pizza: ${calories.toFixed(2)}`;
    })
    .catch(error => {
        // Logging any errors to the console and displaying an error message to the user
        console.error('Error:', error);
        document.getElementById('calorieResult').innerText = 'Failed to calculate calories.';
    });
});







