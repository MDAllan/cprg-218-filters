document.addEventListener("DOMContentLoaded", () => {
    const styleFilter = document.getElementById("style-filter"); 
    const colorFilter = document.getElementById("color-filter");
    const paintings = document.querySelectorAll("#gallery figure");
    const noMatchMessage = document.getElementById("no-match");

    function filterPaintings() {
        const selectedStyle = styleFilter.value.toLowerCase();
        const selectedColor = colorFilter.value.toLowerCase();
        let visibleCount = 0;

        paintings.forEach(painting => {
            const styleMatch = selectedStyle === "all" || painting.dataset.style.toLowerCase() === selectedStyle;
            const colorMatch = selectedColor === "all" || painting.dataset.color.toLowerCase() === selectedColor;
            const isVisible = styleMatch && colorMatch;
            
            painting.style.display = isVisible ? "block" : "none";
            if (isVisible) visibleCount++;
        });

        noMatchMessage.style.display = visibleCount === 0 ? "block" : "none";
    }

    styleFilter.addEventListener("change", filterPaintings);
    colorFilter.addEventListener("change", filterPaintings);

    filterPaintings(); 
});
