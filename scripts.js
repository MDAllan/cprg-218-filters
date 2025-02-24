document.addEventListener("DOMContentLoaded", function () {
    const styleFilter = document.getElementById("style-filter");
    const colorFilter = document.getElementById("color-filter");
    const paintings = document.querySelectorAll("#gallery figure");

    function filterPaintings() {
        const selectedStyle = styleFilter.value.toLowerCase();
        const selectedColor = colorFilter.value.toLowerCase();

        paintings.forEach(painting => {
            const paintingStyle = painting.dataset.style.toLowerCase();
            const paintingColor = painting.dataset.color.toLowerCase();

            const styleMatch = selectedStyle === "all" || paintingStyle === selectedStyle;
            const colorMatch = selectedColor === "all" || paintingColor === selectedColor;

            if (styleMatch && colorMatch) {
                painting.style.display = "block";
            } else {
                painting.style.display = "none";
            }
        });
    }

    // Attach event listeners to filters
    styleFilter.addEventListener("change", filterPaintings);
    colorFilter.addEventListener("change", filterPaintings);
});
