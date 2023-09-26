<script>
        // jQuery validation code
        jQuery.validator.setDefaults({
            debug: false, 
            success: "valid",
            errorClass: "error-text"
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
    };
    itemValidationMessages[itemFieldName] = {
        required: "&nbsp;Please enter a quantity for Item " + i + "!",
        //number: "Numbers only for Item " + i + "!",
        //min: "Positive number only for Item " + i + "!"
    };
}

// Add validation rule and message for sellerName
itemValidationRules["sellerName"] = {
    required: true // Name required
};
itemValidationMessages["sellerName"] = {
    required: "&nbsp;&nbsp;Please enter the seller's name!" // Customize message for name
};

$("#inputForm").validate({
    rules: itemValidationRules,
    messages: itemValidationMessages,
    submitHandler: function (form) {
        updateItemTotals();
        sumCommission();
        return false; // Prevent form submission
    }
});


        $("#inputForm").validate({
            rules: itemValidationRules,
            messages: itemValidationMessages,
            submitHandler: function (form) {
                updateItemTotals();
                sumCommission();
                return false; // Prevent form submission
            }
        });

        // Event listener for the "CLEAR FORM" button
        $('#clearForm').click(function () {
            // Reset the form
            $('#inputForm')[0].reset();
            // Clear the calculated fields
            $('.numField, .right-table').val('');
        });


        // Listen for changes in item1-4 fields
        $(document).ready(function () {
            $( document ).tooltip();
            for (var i = 1; i <= 4; i++) {
                $('#item' + i).on('input', function () {
                    var itemId = $(this).data('item'); // Get the item number from data-item attribute
                    var quantity = parseFloat($(this).val()); // Parse the input value as a float
                    if (!isNaN(quantity) && quantity > 0) {
                        // If the input is a valid positive number, update numSold1-4 with the valid quantity
                        $('#numSold' + itemId).val(quantity);
                    } else {
                        // If the input is not valid (negative or non-numeric), reset it to 0
                        $(this).val('0');
                        $('#numSold' + itemId).val('0');
                    }
                    updateItemTotals(); // Recalculate item totals
                });
            }
        });

        // Function to update item totals
        function updateItemTotals() {
            let prices = [20.99, 12.75, 9.95, 35.89];
            for (var i = 1; i <= 4; i++) {
                var itemId = i; // No need to get the data-item attribute again
                var quantity = parseFloat($('#item' + i).val());
                if (!isNaN(quantity) && quantity >= 0) {
                    var total = (quantity * prices[i - 1]).toFixed(2);
                    $('#total' + i).val('$' + total);
                } else {
                    $('#total' + i).val('');
                }
            }
        }

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
    
    </script>