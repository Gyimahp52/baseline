// Simulate loading performance metrics for baseline
document.addEventListener("DOMContentLoaded", function() {
    // Fetch fake data (in a real scenario, this would be a real API call)
    const data = {
        loadTime: 1200, // Simulated load time in milliseconds
        pageSize: 5000 // Simulated page size in KB
    };
    // Update the DOM with the performance metrics
    document.getElementById('load-time').textContent = data.loadTime;
    document.getElementById('page-size').textContent = data.pageSize;
});
