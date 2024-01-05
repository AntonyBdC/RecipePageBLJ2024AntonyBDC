// Cokey.js
function goToPage(page, event) {
  event.preventDefault();
  // Add the page parameter to the URL
  window.location.href = `loading.html?page=${page}`;
 }
 