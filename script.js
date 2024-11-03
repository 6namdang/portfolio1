// Function to load content from a specific HTML file into the main content area
function loadContent(page) {
    const contentDiv = document.getElementById('content');
    const pageUrl = `pages/${page}.html`; // Load HTML files from "pages" directory

    // Fetch the content from the specific HTML file
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading page: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = html; // Insert the loaded HTML content
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            console.error(error);
        });
}

// Load Home content by default
document.addEventListener("DOMContentLoaded", function() {
    loadContent('home');
});
