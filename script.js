document.addEventListener('DOMContentLoaded', () => {
    const donateForm = document.getElementById('donateForm');
    const thankYouMessage = document.getElementById('thank-you-message');
    const copyButton = document.getElementById('copy-button');
    const bitcoinAddress = document.getElementById('bitcoin-address');

    if (donateForm) {
        donateForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Simple client-side validation
            const amount = document.getElementById('amount').value;
            const email = document.getElementById('email').value;

            if (amount === '' || email === '') {
                alert('Please fill out all required fields.');
                return;
            }

            // In a real-world scenario, you would send this data to a server
            // for payment processing. This is a placeholder for that functionality.
            console.log('Donation submitted:');
            console.log('Amount:', amount);
            console.log('Email:', email);
            console.log('Name:', document.getElementById('name').value);
            console.log('Payment Method:', document.getElementById('payment-method').value);

            // Hide the form and show the thank you message
            donateForm.style.display = 'none';
            thankYouMessage.style.display = 'block';

            // You can also clear the form fields if you want
            // donateForm.reset();
        });
    }

    // NEW: Copy Bitcoin address to clipboard
    if (copyButton && bitcoinAddress) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(bitcoinAddress.textContent)
                .then(() => {
                    const originalText = copyButton.textContent;
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = originalText;
                    }, 2000); // Revert text after 2 seconds
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        });
    }
});