// Cokey.js
function goToPage(page, event) {
  event.preventDefault();
  // Add the page parameter to the URL
  const targetURL = `loading.html?page=${page}`;
  console.log('Navigating to:', targetURL);
  window.location.href = targetURL;
}
