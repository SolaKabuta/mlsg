const filter = document.getElementById('filter-icon');
const category = document.getElementById('job-category');
const content = document.getElementById('content');

$(document).ready(function() {
    // Check if the filter icon exists
    if (filter) {
        // Add click event listener to the filter icon
        filter.addEventListener('click', function() {
            if (category.style.display === "none" || category.style.display === "") {
                category.style.display = "block";
                content.classList.remove("col-xl-12");
                content.classList.add("col-xl-9");
            } else {
                category.style.display = "none";
                content.classList.add("col-xl-12");
            }
        });
    }
});