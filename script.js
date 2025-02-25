//grab the elements we need by using the related ids for each
document.addEventListener("DOMContentLoaded", function () {
    const styleFilter = document.getElementById("style-filter"); 
    const colorFilter = document.getElementById("color-filter");
    const paintings = document.querySelectorAll("#gallery figure");

    function filterPaintings() {
        const selectedStyle = styleFilter.value.toLowerCase();
        const selectedColor = colorFilter.value.toLowerCase();
        let visibleCount = 0;

 //  if filters are applied and some items match the selections

        paintings.forEach(painting => {
            const styleMatch = selectedStyle === "all" || painting.dataset.style.toLowerCase() === selectedStyle;
            const colorMatch = selectedColor === "all" || painting.dataset.color.toLowerCase() === selectedColor;
            
            painting.style.display = (styleMatch && colorMatch) ? "block" : "none";
            visibleCount += (styleMatch && colorMatch);
        });

    //  if filters are applied and no items match the selections
    const noMatchMessage = document.getElementById("no-match");
     noMatchMessage.style.display = (selectedStyle !== "all" || selectedColor !== "all") && visibleCount === 0 ? "block" : "none";
    }

    styleFilter.addEventListener("change", filterPaintings);
    colorFilter.addEventListener("change", filterPaintings);

    filterPaintings(); 
});


