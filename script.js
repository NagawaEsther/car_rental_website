document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieving form data
    var pickupDate = document.getElementById('pickup-date').value;
    var returnDate = document.getElementById('return-date').value;
    var carType = document.getElementById('car-type').value;

    // Processing form data 
    console.log('Pickup Date:', pickupDate);
    console.log('Return Date:', returnDate);
    console.log('Car Type:', carType);

    // confirmation message
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});
