// ***************** Homework 7 Pt I script *************************
document.addEventListener('DOMContentLoaded', function () {
    var styleArea = document.getElementById('styleArea');

    document.getElementById('styleForm').addEventListener('change', function (e) {
        var target = e.target;

        if (target.name === 'bgcolor') {
            if (target.value === 'Rainbow') {
                styleArea.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
            } else {
                styleArea.style.backgroundColor = target.value;
                styleArea.style.backgroundImage = 'none'; // Remove gradient for solid colors
            }
        } else if (target.name === 'textstyle') {
            if (target.value === 'underline') {
                if (target.checked) {
                    styleArea.style.textDecoration = 'underline';
                } else {
                    styleArea.style.textDecoration = 'none';
                }
        } else if (target.value === 'bold') {
            styleArea.style.fontWeight = target.checked ? 'bold' : 'normal';
        } else if (target.value === 'italic') {
            styleArea.style.fontStyle = target.checked ? 'italic' : 'normal';
        }
        } else if (target.id === 'fontSize') {
            styleArea.style.fontSize = target.value;
        }
    });
});

