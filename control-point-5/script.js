document.addEventListener('DOMContentLoaded', function() {
    const cardForm = document.getElementById('card-form');
    const cardThumbnail = document.getElementById('card-thumbnail');
    const cardTableBody = document.querySelector('#card-table tbody');
  
    cardForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const bankName = document.getElementById('bank-name').value;
      const paymentSystem = document.getElementById('payment-system').value;
      const cardNumber = document.getElementById('card-number').value;
      const cardHolder = document.getElementById('card-holder').value;
      const expiryDate = document.getElementById('expiry-date').value;
  
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${bankName}</td>
        <td>${paymentSystem}</td>
        <td>${cardNumber}</td>
        <td>${cardHolder}</td>
        <td>${expiryDate}</td>
      `;
      cardTableBody.appendChild(newRow);
  
      cardForm.reset();
      cardThumbnail.innerHTML = '';
  
      return false;
    });
  
    cardForm.addEventListener('input', function() {
      const bankName = document.getElementById('bank-name').value;
      const paymentSystem = document.getElementById('payment-system').value;
  
      cardThumbnail.innerHTML = `
        <img src="logo_${bankName.toLowerCase()}_${paymentSystem.toLowerCase()}.png" alt="Card Thumbnail">
      `;
    });
  });
  