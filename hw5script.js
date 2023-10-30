//**************** script for Homework 5 Pt I ****************/

$(document).ready(function() {
// Define the options for the radio buttons, checkboxes, and select element
const ageGroups = ['Less than 21', '21 - 50', 'Older than 50'];
const browsers = ['Firefox', 'Edge', 'Chrome', 'Safari'];
const movieTypes = ['Action', 'Comedy', 'Drama', 'Documentary', 'Science Fiction'];

// Generate the radio buttons
ageGroups.forEach((ageGroup, index) => {
    $('#ageGroup').append(
        `<input type="radio" id="ageGroup${index}" name="ageGroup" value="${ageGroup}">
        <label for="ageGroup${index}">${ageGroup}</label>`
    );
});

// Generate the checkboxes
browsers.forEach((browser, index) => {
    $('#browserGroup').append(
        `<input type="checkbox" id="browser${index}" name="browsers" value="${browser}">
        <label for="browser${index}">${browser}</label>`
    );
});

// Generate the options for the select element
$('#movieType').append('<option value="">--Select--</option>');
movieTypes.forEach((movieType) => {
    $('#movieType').append(`<option value="${movieType.toLowerCase()}">${movieType}</option>`);
});

// Set up form validation
$("#myForm").validate({
    rules: {
        fullName: "required",
        ageGroup: "required",
        browsers: {
            required: true,
            minlength: 1
        },
        movieType: "required"
    },
    messages: {
        fullName: "Please enter your full name",
        ageGroup: "Please select your age group",
        browsers: "Please select at least one browser",
        movieType: "Please select your favorite movie type"
    },
    submitHandler: function(form) {
        setTimeout(function() {
            $('#output').html("<p class='completeForm'>Thanks, your data was submitted!</p>").hide().fadeIn(100);
        }, 500); // Delay of 0.5 second
    },
    errorPlacement: function(error, element) {
        if (element.attr("type") === "radio") {
            error.insertAfter("#ageGroup").find('label.error').css('display', 'block');
        } else if (element.attr("type") === "checkbox") {
            error.insertAfter("#browserGroup").find('label.error').css('display', 'block');
        } else {
            error.insertAfter(element);
        }
    }
});

// Clear button functionality
$('#clearButton').click(function() {
    $('#output').html("");
    $("#myForm")[0].reset(); // This will clear all the input fields
    $("#myForm").validate().resetForm(); // This will clear all validation messages
    $('input').removeClass('error'); // Remove the error class from inputs
    $('select').removeClass('error'); // Remove the error class from select
});
});

//**************** script for Homework 5 Pt II ****************/

// Using array to make navigation selection
document.addEventListener('DOMContentLoaded', (event) => {
    const websites = [
        { value: 'http://www.yahoo.com/', text: 'Yahoo' },
        { value: 'http://www.mozilla.com/', text: 'Firefox' },
        { value: 'https://www.google.com/', text: 'Google' }
    ];

    const menus = ['menu1', 'menu2'];
    menus.forEach(menuId => {
        const selectMenu = document.getElementById(menuId);
        websites.forEach((website) => {
            const option = document.createElement('option');
            option.value = website.value;
            option.textContent = website.text;
            selectMenu.appendChild(option);
        });
    });
});

// Reuse function to navigate corresponding website chosen by user
function navigateToSelectedPage(selectElement) {
    const selectedOptionValue = selectElement.value;
    if (selectedOptionValue) {
        window.open(selectedOptionValue, '_blank');
    }
}


// Optional when using getElementById for onchange
function navigateOnChange() {
    var url = document.getElementById("menu1").value;
    if (url !== "") {
        window.open(url, '_blank');
    }
}
// Optional when using getElementById for onclick
function navigateOnClick() {
    var url = document.getElementById("menu2").value;
    if (url !== "") {
        window.open(url, '_blank');
    }
}

