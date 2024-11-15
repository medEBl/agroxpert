document.getElementById('filterButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;
    const threads = document.querySelectorAll('.thread');

    threads.forEach(function(thread) {
        const title = thread.querySelector('h3').textContent.toLowerCase();
        const author = thread.querySelector('.author').textContent.toLowerCase();
        let matchesFilter = true;

        // Filter by author
        if (filterValue !== 'all' && !author.includes(filterValue)) {
            matchesFilter = false;
        }

        // Filter by search query
        if (searchQuery && !title.includes(searchQuery)) {
            matchesFilter = false;
        }

        // Show/hide thread based on filters
        if (matchesFilter) {
            thread.style.display = 'block';
        } else {
            thread.style.display = 'none';
        }
    });
});