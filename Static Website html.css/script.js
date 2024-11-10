// TypeScript for the entire Pizza Hut website
// Function to toggle visibility of social links in the footer
function toggleSocialLinks() {
    var socialLinks = document.querySelector('.social-icons');
    if (socialLinks.style.display === 'none') {
        socialLinks.style.display = 'flex';
    }
    else {
        socialLinks.style.display = 'none';
    }
}
// Event listener for toggling social links
var toggleButton = document.getElementById('toggle-social-links');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSocialLinks);
}
// Function to show the Popular Pizzas section
function showPopularPizzas() {
    var pizzasSection = document.querySelector('.popular-pizzas');
    pizzasSection.style.display = 'block';
}
// Event listener to show popular pizzas on page load or user interaction
window.addEventListener('load', showPopularPizzas);
// Function to scroll to the 'About Us' section
function scrollToAboutUs() {
    var aboutUsSection = document.querySelector('.about-us');
    if (aboutUsSection) {
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
}
// Event listener for 'About Us' section scroll button (if added in HTML)
var aboutUsButton = document.getElementById('about-us-btn');
if (aboutUsButton) {
    aboutUsButton.addEventListener('click', scrollToAboutUs);
}
// Function to close the "Location & Delivery Info" section when user clicks outside
function closeLocationInfo(event) {
    var locationInfo = document.querySelector('.location-delivery');
    if (!locationInfo.contains(event.target)) {
        locationInfo.style.display = 'none';
    }
}
// Event listener for closing the Location & Delivery Info section
document.addEventListener('click', closeLocationInfo);
