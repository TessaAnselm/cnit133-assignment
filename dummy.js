$(document).ready(function(){
    $("#asteriskSquareForm").validate({
        rules: {
            userInput: {
                required: true,
                number: true,
                range: [2, 10]
            }         
        },
        messages: {
            userInput: {
                required: "Please enter a number between 2-10!",
                number: "Please enter numerical values only!",
                range: "Please enter values between 2-10 only!"
            }  
        },
        submitHandler: function(form) {
            const userInput = parseInt($("#userInput").val());
            const boxHtml = createBox(userInput);
            $("#asteriskSquareResult").html(boxHtml);
            return false; // prevent default form submission
        }
    });
    
    function createBox(number) {
        let result = '';
        for (let row = 0; row < number; row++) {
            for (let column = 0; column < number; column++) {
                if (row === 0 || row === (number - 1) || column === 0 || column === (number - 1)) {
                    result += '* '; // * for first and last column and top and bottom row
                } else {
                    result += '&nbsp;&nbsp;'; // Empty space inside box
                }
            }
            result += '<br>'; // Next line
        }
        return result;
    }
});
