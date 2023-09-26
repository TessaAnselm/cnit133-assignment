// Script for homework 3 part I
$(document).ready(function () {
    var resultTextArea = $("#result");
    var form2Button = $("#form2");
    var clearButton = $("#clear");
    var isFaded = false;

    form2Button.click(function () {
        if (!isFaded) {
            resultTextArea.fadeOut(1000, function () {
                // display "New set of result was executed"
                resultTextArea.val("New set of result was executed");
                resultTextArea.css("color", "");
                resultTextArea.fadeIn(1000, function () {
                    // after fading in, trigger formValid function
                    formValid();
                });
            });
        } else {
            resultTextArea.fadeOut("slow", function () {
                // clear the textarea and remove the fade
                resultTextArea.css("opacity", 1);
                resultTextArea.val("");
                isFaded = false;
            });
        }
    });

    clearButton.click(function () {
        resultTextArea.fadeIn(100, function () {
            setTimeout(function () {
                // display "You have successfully cleared the form"
                resultTextArea.val("You have successfully cleared the form");
                resultTextArea.css("color", "");
                // after a short delay, fade out the message and clear textarea content
                resultTextArea.fadeOut(1500, function () {
                    // after fading out, clear the textarea content and show textarea
                    resultTextArea.val("");
                    resultTextArea.fadeIn(200);
                    isFaded = false;
                });
            }, 200); // adjust the delay duration
        });
    });

    // Function for Student Grade validation
    function formValid() {
    // Get input values
        var number1 = document.getElementById("hwAvg").value;
        var number2 = document.getElementById("midExam").value;
        var number3 = document.getElementById("finalExam").value;
        var number4 = document.getElementById("participation").value;

        var num1 = parseInt(number1);
        var num2 = parseInt(number2);
        var num3 = parseInt(number3);
        var num4 = parseInt(number4);

        var inputFields = document.querySelectorAll(".numField");

        // Flag to track if all conditions are met
        var isValid = true;

        inputFields.forEach(function(inputField) {
        var inputValue = parseFloat(inputField.value);

        if (isNaN(inputValue)) {
            resultTextArea.val("Please make sure to enter valid numbers in all input fields!");
            resultTextArea.css("color", "red");
            resultTextArea.css("font-weight", "bold");
            isValid = false;
        } else if (inputValue < 0 || inputValue > 100) {
            resultTextArea.val("Please make sure to enter numbers between 0 and 100 only!");
            resultTextArea.css("color", "red");
            resultTextArea.css("font-weight", "bold");
            isValid = false;
        }
    });

    if (isValid) {
        computeGrade(num1, num2, num3, num4);
        }
    }
    
    // student grade computed
    function computeGrade(num1, num2, num3, num4) {
        var finGrade, retake;
        var finAve = Math.round((0.5 * num1) + (0.2 * num2) + (0.2 * num3) + (0.1 * num4));

        switch (true) {
            case (finAve >= 90):
                finGrade = "A";
                break;
            case (finAve >= 80):
                finGrade = "B";
                break;
            case (finAve >= 70):
                finGrade = "C";
                break;
            case (finAve >= 60):
                finGrade = "D";
                retake = true;
                break;
            default:
                finGrade = "F";
                retake = true;
        }

        if (retake) {
            var fail = "Student must retake the course";
        }

        var form2Result = "Results from form2 function";
        resultTextArea.val(form2Result);

        var line1, line2, line3, tab;
        tab = "   ";
        line1 = `${tab}The final average: ${finAve}`;
        line2 = `${tab}The final grade: ${finGrade}`;
        line3 = `${tab}${fail || ""}`;

        var resultText = "\n" + line1 + "\n" + line2 + "\n" + line3;
        resultTextArea.val(resultText);
        // Change font to default if red text exists from prior condition
        resultTextArea.css("color", "");
        resultTextArea.css("font-weight", "");
    }
});

        // Calculate and update the commission
        function sumCommission() {
            var totalSales = 0;

            // Loop through total1 to total4 and calculate the total sales
            for (var i = 1; i <= 4; i++) {
                var total = parseFloat($('#total' + i).val().replace('$', '')) || 0;
                totalSales += total;
            }

            // Calculate the commission (9% of totalSales + 250)
            var commission = (0.09 * totalSales) + 250;

            // Update the totalSold and commission for seller
            $('#totalSold').val('$ ' + totalSales.toFixed(2)); // Add the "$" symbol before the totalSales value
            $('#totalEarn').val('$ ' + commission.toFixed(2)); // Display with 2 decimal places
        }



//************************************************************************************ */
// Script for hw3 extra credit
 $(document).ready(function () {
    $("#generateNums").on("click", function () {
        generateNumbers(); // Call the generateNumbers() function
    });

    let num1;
    let num2;
    let answer;
    let userAnswer;

    // Resets outputs divs to empty.
    function clear() {
        $("#rightAnswer").html("");
        $("#wrongAnswer").html("");
    }

    // Generates 2 random numbers using Math.random, displays a multiplication question,
    // and shows the input field for the user's answer.
    function generateNumbers() {
      $("#questionBox").show();
       
        clear();
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        answer = num1 * num2;

        // Hide the generateNums button
        $("#generateNums").hide();

        // Create the question element
        const questionBox = $("#questionBox");
        questionBox.empty(); // Clear previous content
        questionBox.append(`<p>How much is ${num1} times ${num2}?</p>`);

        // Create the input field and "Check Answer" button
        const inputContainer = $('<div>');
        inputContainer.append(`
            <label for="userAnswer"><br><br>Fill in your answer here:</label>
            <input type="number" id="userAnswer" name="userAnswer" size="10" autofocus>
            <input type="button" id="checkAnswerButton" value="Check Answer"><br>
        `);

        // Attach the event handler to the "Check Answer" button
        inputContainer.find('#checkAnswerButton').on('click', checkAnswer);

        // Append the input container to the question box
        questionBox.append(inputContainer);

        // Set focus to the input field
        $("#userAnswer").focus();
    }

    // If the answer is correct, display a "Very Good" message and prompt the user to continue or end.
    // If incorrect, provide an error message.
    function checkAnswer() {
        clear();
        userAnswer = $("#userAnswer").val();
        if (parseInt(userAnswer) === answer) {
            $("#questionBox").hide();
            $("#rightAnswer").html('Very Good!<br>Keep practicing multiplication?<br><br>');
            // Create "Yes" button
            const yesButton = $('<input type="button" value="Yes">');
            yesButton.on('click', generateNumbers); // Attach the click event handler
            // Create "No" button
            const noButton = $('<input type="button" value="No">');
            noButton.on('click', endScript); // Attach the click event handler

            // Append the buttons to the rightAnswer div
            $("#rightAnswer").append(yesButton, noButton);
        } else {
            $("#wrongAnswer").html('<p style="color: red;">No. Please try again!</p>');
            $("#userAnswer").val('').focus();
        }
    }

    // When the user chooses to end multiplication, display a message and restart the game after a delay.
    function endScript() {
        clear();
        $("#questionBox").html("");
        // Display a message to the user
        $("#theEnd").html(`<p>Thanks for playing, see you next time!</p>`);
        // Delay for 2 seconds before calling the restartGame function
        setTimeout(restartGame, 2000);
    }

    // Function to restart the game and redirect to the beginning page.
    function restartGame() {
        // Change the message to indicate a restart
        $("#theEnd").html(`<p style="color: red;">Restarting...</p>`);

        // Delay for 2 seconds before redirecting
        setTimeout(function () {
            // Redirect to the beginning page
            window.location.href = "hw3-extra-credit.html";
        }, 2000);
    }
});