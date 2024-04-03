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

    // Slide to the confirmation section
    var confirmationSection = document.getElementById('confirmation');
    var featuredCarsSection = document.getElementById('featured-cars');
    var slideWidth = featuredCarsSection.clientWidth;
    featuredCarsSection.style.transition = "transform 0.3s ease-in-out";
    featuredCarsSection.style.transform = "translateX(-" + slideWidth + "px)";

    // confirmation message
    document.getElementById('booking-form').style.display = 'none';
    confirmationSection.style.display = 'block';
});
