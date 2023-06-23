document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('cardForm');
    var table = document.getElementById('cardTable');
    var cardLogo = document.querySelector('.card-logo');
    var cardDetails = document.querySelector('.card-details');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var bankName = document.getElementById('bankName').value;
        var paymentSystem = document.getElementById('paymentSystem').value;
        var cardNumber = document.getElementById('cardNumber').value;
        var cardHolder = document.getElementById('cardHolder').value;
        var expiryDate = document.getElementById('expiryDate').value;

        var newRow = table.insertRow();
        newRow.innerHTML = '<td>' + bankName + '</td>' +
            '<td>' + paymentSystem + '</td>' +
            '<td>' + cardNumber + '</td>' +
            '<td>' + cardHolder + '</td>' +
            '<td>' + expiryDate + '</td>';

        form.reset();
        cardLogo.innerHTML = '';
        cardDetails.innerHTML = '';
    });

    form.addEventListener('input', function () {
        var bankName = document.getElementById('bankName').value;
        var paymentSystem = document.getElementById('paymentSystem').value;

        cardLogo.innerHTML = bankName ? '<img src="images/' + bankName.toLowerCase() + '.png" alt="' + bankName + ' Logo">' : '';
        cardDetails.innerHTML = paymentSystem ? '<p>' + paymentSystem + '</p>' : '';
    });
});
