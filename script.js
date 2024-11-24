document.addEventListener("DOMContentLoaded", () => {
    // Simulating visitor count
    const visitorCount = Math.floor(Math.random() * 10000 + 1000);
    document.getElementById("visitor-count").textContent = visitorCount;
});

// JavaScript to track the mouse position and make the hover effect follow the pointer
const buttons = document.querySelectorAll('nav ul li a');

buttons.forEach(button => {
    let mouseLeft = false;
    
    button.addEventListener('mouseenter', function (e) {
        const buttonWidth = button.offsetWidth;
        const mouseX = e.clientX - button.getBoundingClientRect().left;
        
        // If the mouse is on the left half, add 'hover-left' class; otherwise, 'hover-right' class
        if (mouseX < buttonWidth / 2) {
            button.classList.add('hover-left');
            button.classList.remove('hover-right');
            mouseLeft = true;
        } else {
            button.classList.add('hover-right');
            button.classList.remove('hover-left');
            mouseLeft = false;
        }
    });

    button.addEventListener('mousemove', function (e) {
        const buttonWidth = button.offsetWidth;
        const mouseX = e.clientX - button.getBoundingClientRect().left;
        
        // Track the mouse position on each hover and adjust the background
        const hoverBox = button.querySelector('::before');
        const scaleRatio = mouseX / buttonWidth;
        
        // Adjust the scale of the background based on where the mouse is
        if (mouseLeft) {
            button.style.setProperty('--hover-scale', scaleRatio);
        } else {
            button.style.setProperty('--hover-scale', 1 - scaleRatio);
        }
    });

    button.addEventListener('mouseleave', function () {
        setTimeout(() => {
            button.classList.remove('hover-left', 'hover-right');
        }, 100);
    });
});


