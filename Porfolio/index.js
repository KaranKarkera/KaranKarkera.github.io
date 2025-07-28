window.addEventListener('DOMContentLoaded', () => {
    // --- VANTA Background ---
    VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1b1b1b,
        shininess: 50.00,
        waveHeight: 5.50,
        waveSpeed: 0.50,
        zoom: 1.19
    });

    // --- Load 1st image from file1.html ---
    fetch("Courses.html")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            const sourceImg1 = doc.getElementById("sourceImg3");
            const targetImg1 = document.getElementById("targetImg3");

            if (sourceImg1 && targetImg1) {
                targetImg1.src = sourceImg1.src;
            } else {
                console.warn("Image 3 not found.");
            }
        })
        .catch(err => console.error("Failed to fetch Courses.html:", err));

});
