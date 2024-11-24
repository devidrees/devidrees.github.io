document.addEventListener("DOMContentLoaded", () => {
    // Simulating visitor count
    const visitorCount = Math.floor(Math.random() * 10000 + 1000);
    document.getElementById("visitor-count").textContent = visitorCount;
});
