<?php
// Checking if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieving form data
    $pickupDate = $_POST['pickup-date'];
    $returnDate = $_POST['return-date'];
    $carType = $_POST['car-type'];

    // Processing form data
    echo "<h2>Booking Details</h2>";
    echo "<p>Pickup Date: " . $pickupDate . "</p>";
    echo "<p>Return Date: " . $returnDate . "</p>";
    echo "<p>Car Type: " . $carType . "</p>";
    echo "<p><a href=\"index.html\">Return to Homepage</a></p>";
    
} else {
    // If form is not submitted, redirect it  to the homepage 
    header("Location: index.html");
    exit();
}
?>
