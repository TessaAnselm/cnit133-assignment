<script>
let item = [];
let prices = [20.99, 12.75, 9.95, 35.89];
let validInput = true;

// function to validate user input
function isInputValid2() {
item = [];
for (let i = 1; i <= 4; i++) {
let tempItem = $("#item" + i).val();
let numSold=$("#numSold" +i).val();
if (tempItem === '') {
$("#messages").html("<p class='invalidInput'>Please fill all inputs</p>");
validInput = false;
break;
} else if (isNaN(parseFloat(tempItem))) {
$("#messages").html("<p class='invalidInput'>Please enter numbers only</p>");
validInput = false;
break;
} else if ((parseFloat(tempItem)) < 0) {
$("#messages").html("<p class='invalidInput'>Please enter positive numbers only!</p>");
validInput = false;
break;
} else {
item[i] = numSold[i]
}
}
}
</script>