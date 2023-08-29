src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js";
document.getElementById('form2').onclick=function(){form2();};
document.getElementById('clear').onclick=function(){clear();};
$(function() {
    $("#result").fadeIn('slow');
});

$(function() {
    $("#result").fadeOut('slow');
});


function form2()
{
var number1, number2, number3, num1, num2, num3;
var sumnum, average, product, smallest, largest;

number1 = document.getElementById("input1").value;
number2 = document.getElementById("input2").value;
number3 = document.getElementById("input3").value;

if ((number1 !== "" && typeof parseInt(number1) === "number") &&
    (number2 !== "" && typeof parseInt(number2) === "number") &&
    (number3 !== "" && typeof parseInt(number3) === "number")) {
    num1 = parseInt(number1);
    num2 = parseInt(number2);
    num3 = parseInt(number3);

    sumnum = num1 + num2 + num3;
    average = sumnum/3;
    product = num1 * num2 * num3;
    smallest = Math.min(num1, num2, num3);
    largest = Math.max(num1, num2, num3);

    document.getElementById("result").innerHTML += 
    <p>`
    The inputted numbers were: ${num1}, ${num2}, ${num3}
    <br>The sum of the numbers is: ${sumnum} </br>
    <br>he average of the numbers is: ${average}  </br>
    <br>The product of the integers was ${product} </br>
    <br>The min of the numbers is: ${smallest} </br>
    <br>The max of the numbers is: ${largest}`;</br> </p>
else {
    document.getElementById("result").innerHTML =   
    `Please enter integer numbers only into all the input fields`;
}

function clear()
{
document.getElementById("result").innerHTML = "";
}
