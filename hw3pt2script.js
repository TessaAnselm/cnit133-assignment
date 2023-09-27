$(document).ready(function () {
// jQuery validation code
// jQuery validation code
jQuery.validator.setDefaults({
    debug: true,
    success: "valid",
    errorClass: "error-text" // Apply the "error-text" class to error messages
});

// Create an array of item field names
var itemFields = ["item1", "item2", "item3", "item4"];
var itemValidationMessages = {}

// Create an object to store validation rules for all item fields
var itemValidationRules = {}; 

// Validation rules and messages for each item field
for (var i = 1; i <= 4; i++) {
    var itemFieldName = "item" + i;
    itemValidationRules[itemFieldName] = {
        required: true,
        number: true,
        min: 0
    },
        itemValidationMessages[itemFieldName] = {
        required: "Please enter a quantity for Item " + i + "!",
        number: "Numbers only for Item " + i + "!",
        min: "Positive number only for Item " + i + "!"
    };
}

// Combine itemValidationRules and itemValidationMessages with sellerName validation
var combinedValidationRules = Object.assign({}, itemValidationRules, {
    sellerName: {
        required: true,
        minlength: 2
    }
});

var combinedValidationMessages = Object.assign({}, itemValidationMessages, {
    sellerName: {
        required: "Please enter a name!",
        minlength: "Name must be at least 2 characters long!"
    }
});

$("#inputForm").validate({
    rules: combinedValidationRules,
    messages: combinedValidationMessages,
    submitHandler: function (form) {
        updateNumSold();
        updateItemTotals();
        return false; // Prevent form submission
    }
});

// Function to update numSold values
function updateNumSold() {
    $('#numSold1').val($('#item1').val());
    $('#numSold2').val($('#item2').val());
    $('#numSold3').val($('#item3').val());
    $('#numSold4').val($('#item4').val());
}

// Event listener for the "CLEAR FORM" button
$('#clearForm').click(function () {
    $('#inputForm')[0].reset();
    $('.numField, .right-table').val('');
});

function updateItemTotals() {
    let prices = [20.99, 12.75, 9.95, 35.89];
    for (var i = 1; i <= 4; i++) {
        var quantity = parseFloat($('#item' + i).val());
        var total = (quantity * prices[i - 1]).toFixed(2);
        $('#total' + i).val('$' + total);
    }
    sumCommission();
}

// Calculate and update the commission
function sumCommission() {
    var totalSales = 0;
    for (var i = 1; i <= 4; i++) {
        var total = parseFloat($('#total' + i).val().replace('$', '')) || 0;
        totalSales += total;
    }
    var commission = (0.09 * totalSales) + 250;
    $('#totalSold').val('$ ' + totalSales.toFixed(2));
    $('#totalEarn').val('$ ' + commission.toFixed(2));
}
});