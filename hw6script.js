// ***************** Homework 6 Pt I script *************************
// Function to process the entered number when the user clicks the submit button.
function processNumber() {
    // Retrieve the entered value from the input field.
    var input = document.getElementById("numberInput").value;

    // Select the result display area.
    var resultDiv = document.getElementById("result");

    // Get the error message element where error messages will be displayed
    var errorMessageDiv = document.getElementById("errorMessage"); 

    // Convert the input to a floating-point number.
    var number = parseFloat(input);

    // Clear any existing content in the resultDiv and errorMessageDiv.
    resultDiv.innerHTML = '';
    errorMessageDiv.innerHTML = '';

     // Check if the input is a valid floating-point number.
     // If not, display an error message and exit the function.
     if (!isValidNumber(input)) {
        errorMessageDiv.innerHTML = "Please enter a valid number with at least 4 decimal places.";
        return;
    }

    // Perform various calculations on the number.
    var roundedInt = Math.round(number); // Round to nearest integer.
    var sqrtRoundedInt = Math.round(Math.sqrt(number)); // Calculate square root and round to integer.
    var tenths = number.toFixed(1); // Round to nearest tenth.
    var hundredths = number.toFixed(2); // Round to nearest hundredth.
    var thousandths = number.toFixed(3); // Round to nearest thousandth.

    // Display the original number and the results of calculations.
    resultDiv.innerHTML = `You typed number ${number}<br>
    Rounded to the nearest integer = ${roundedInt}<br>
    Square root rounded to integer = ${sqrtRoundedInt}<br>
    Rounded to the nearest 10th position = ${tenths}<br>
    Rounded to the nearest 100th position = ${hundredths}<br>
    Rounded to the nearest 1000th position = ${thousandths}`;
}

// Function to check if a string is a valid floating-point number with at least 4 decimals.
function isValidNumber(numStr) {
    return /^\d*\.\d{4,}$/.test(numStr);
}

// Function to clear the results from the resultDiv.
function clearResults() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '';
    var errorMessageDiv = document.getElementById("errorMessage"); 
    errorMessageDiv.innerHTML = '';
}

// ***************** Homework 6 Pt II script *************************
// Function to count occurrences of a character from user input.
function countCharacter() {
    // Retrieve the text content from the textarea.
    var content = document.getElementById("textContent").value;

    // Retrieve the single character input by the user.
    var char = document.getElementById("charInput").value;

    // Get the div element where results or messages will be displayed.
    var resultDiv = document.getElementById("result");

    // Get the error message element where error messages will be displayed
    var errorMessageDiv = document.getElementById("errorMessage"); 

    // Initialize a counter for the number of occurrences.
    var charCount = 0;

    // Check if the user has entered exactly one character. 
    if (!char || char.length !== 1) {
        errorMessageDiv.textContent = "Please enter a single character."; // Display error message
        return; // Exit the function
    } else {
        errorMessageDiv.textContent = ''; // Clear error message if input is valid
    }

    // Iterate over each character in the content.
    for (var i = 0; i < content.length; i++) {
        // Convert both content character and input character to lower case and compare.
        // This makes the search case-insensitive.
        if (content[i].toLowerCase() === char.toLowerCase()) {
            charCount++; // Increment the count if a match is found.
        }
    }

    // Condition to display information on text area or if character not found to open window to explain.
    if (charCount > 0) {
        // If the character was found, display the count in the resultDiv.
        resultDiv.innerHTML = `The character "${char}" appears ${charCount} times in the text.`;
    } else {
        // If the character was not found, clear the resultDiv.
        resultDiv.innerHTML = "";

        // Open a new small window to show a message that the character was not found.
        var newWindow = window.open("", "MsgWindow", "width=300,height=100");
        // Write the message in the new window, including a close button.
        newWindow.document.write(`<p>Search character "${char}" not found in the content you typed.</p><button onclick="window.close()">Close</button>`);
    }
}

// ***************** Homework 6 Pt III script *************************

// When the document is fully loaded, execute the following code.
$(document).ready(function() {
    // The mask format is (xxx) xxx-xxxx in input field, where x is a digit.
    $('#phoneNumberInput').mask('(000) 000-0000');

    // Defined function to process phone number and assigned to the global window object to be accessible from HTML.
    window.splitPhoneNumber = function() {
        // Retrieve the value from the phone number input field.
        var phone = $('#phoneNumberInput').val();

        // Select the element for displaying error messages.
        var errorMessage = $('#errorMessage');

        // Define a regular expression to match the phone number format.
        // The format is (xxx) xxx-xxxx with x being a digit.
        // Parentheses create groups to extract area code, first 3 digits, and last 4 digits.
        var regex = /^\((\d{3})\) (\d{3})-(\d{4})$/;

        // Attempt to match the entered phone number with the regex pattern.
        var match = phone.match(regex);

        // If the phone number matches the pattern, proceed with processing.
        if (match) {
            // Set the area code, first 3 digits, and last 4 digits in their respective fields.
            $('#areaCode').val(match[1]);
            $('#firstThreeDigits').val(match[2]);
            $('#lastFourDigits').val(match[3]);

            // Clear any previous error messages.
            errorMessage.text('');
        } else {
            // If the format is incorrect, display an error message.
            errorMessage.text('Please enter the phone number in the format (999) 999-9999.');

            // Clear the values in the result fields as the format is incorrect.
            $('#areaCode, #firstThreeDigits, #lastFourDigits').val('');
        }
    };
});

