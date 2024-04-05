document.addEventListener('mousemove', function(e) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = '😂'; // Your emoji here
    document.body.appendChild(emoji);

    // Position the emoji at the cursor location
    emoji.style.left = `${e.pageX}px`;
    emoji.style.top = `${e.pageY}px`;

    // Remove the emoji after some time to prevent clutter
    setTimeout(() => {
        emoji.remove();
    }, 2000); // Adjust time as needed
});
