// Add an event listener to the form to handle submission
document.getElementById('vehicleForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    // Get the input values
    const ownerName = document.getElementById('ownerName').value.trim();
    const vehicleNumbers = document.getElementById('vehicleNumbers').value.trim();

    // Validate input (check if owner name and vehicle numbers are provided)
    if (!ownerName || !vehicleNumbers) {
        alert('Please fill in both fields.');
        return;
    }

    // Split vehicle numbers by comma and clean up the spaces
    const vehicles = vehicleNumbers.split(',').map(vehicle => vehicle.trim());

    // Clear the input fields
    document.getElementById('ownerName').value = '';
    document.getElementById('vehicleNumbers').value = '';

    // Display the data in the table
    const tableBody = document.getElementById('vehicleDataTable').getElementsByTagName('tbody')[0];

    // For the first vehicle number, we will add the owner name once
    let firstVehicle = true;

    vehicles.forEach(vehicle => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        // Display the vehicle number
        cell1.textContent = vehicle;

        // For the first vehicle, display the owner name
        if (firstVehicle) {
            cell2.textContent = ownerName;
            firstVehicle = false;  // Set to false after the first entry
        } else {
            // After the first, leave the owner name cell blank
            cell2.textContent = '';
        }
    });
});
