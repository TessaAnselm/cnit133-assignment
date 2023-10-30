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

