function updateDateTime() {
    const now = new Date();
    const datetimeString = now.toLocaleString();
    document.getElementById('datetime').textContent = datetimeString;
}

setInterval(updateDateTime, 1000); // Update the date and time every second

window.onload = updateDateTime; // Initialize the date and time on page load
