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

    // Student Grade validation
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