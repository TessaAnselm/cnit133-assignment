
$(document).ready(function() {
    var resultTextArea = $("#result");
    var form2Button = $("#form2");
    var clearButton = $("#clear");
    var isFaded = false;

    form2Button.click(function() {
      if (!isFaded) {
        resultTextArea.fadeOut(1000, function() {
          // Display "New set of result was executed"
          resultTextArea.val("New set of result was executed");
          resultTextArea.css("color", "");
          resultTextArea.fadeIn(1000, function() {
            // After fading in, trigger form2 function
            form2();
          });
        });
      } else {
        resultTextArea.fadeOut("slow", function() {
          // Clear the textarea and remove the fade
          resultTextArea.css("opacity", 1);
          resultTextArea.val("");
          isFaded = false;
        });
      }
    });

    clearButton.click(function() {
        resultTextArea.fadeIn(100, function() {
          setTimeout(function() {
            // Display "You have successfully cleared the form"
            resultTextArea.val("You have successfully cleared the form");
            resultTextArea.css("color", "");
     
            // After a short delay, fade out the message and clear textarea content
            resultTextArea.fadeOut(1500, function() {
              // After fading out, clear the textarea content and show textarea
              resultTextArea.val("");
              resultTextArea.fadeIn(200);
              isFaded = false;
            });
          },200); // Adjust the delay duration (e.g., 1500 ms)
        });
      });
      

    function form2() {
      var number1 = document.getElementById("input1").value;
      var number2 = document.getElementById("input2").value;
      var number3 = document.getElementById("input3").value;
     
      var num1 = parseInt(number1);
      var num2 = parseInt(number2);
      var num3 = parseInt(number3);
     
      if (
        (number1 === "" || number2 === "" || number3 === "")
      ) {
        resultTextArea.val("Please enter into all the input fields!");
        resultTextArea.css("color", "red");
        resultTextArea.css("font-weight", "bold");
      } else if (
        (!Number.isInteger(num1) || !Number.isInteger(num2) || !Number.isInteger(num3))
      ) {
        resultTextArea.val("Please make sure to enter integer numbers only!");
        resultTextArea.css("color", "red");
        resultTextArea.css("font-weight", "bold");
      } else {
        var sumnum = num1 + num2 + num3;
        var average = sumnum / 3;
        var product = num1 * num2 * num3;
        var smallest = Math.min(num1, num2, num3);
        var largest = Math.max(num1, num2, num3);
       
        var form2Result = "Results from form2 function";
        resultTextArea.val(form2Result);

        var resultText =`
    The inputted numbers: ${num1}, ${num2}, ${num3}
    The sum of the numbers: ${sumnum}
    The average of the numbers: ${average.toFixed(2)}
    The product of the integers: ${product}
    The min of the numbers: ${smallest}
    The max of the numbers: ${largest}`;
       
        resultTextArea.val(resultText);
        resultTextArea.css("color", "");
        resultTextArea.css("font-weight", "");
      }
    }
  });
