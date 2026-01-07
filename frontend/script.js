const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const query = searchInput.value.trim();

        if (!query) {
            alert("Please enter a destination or trip idea 🙂");
            searchInput.focus();
            return;
        }

        alert("Searching trips for: " + query);
    });
}
