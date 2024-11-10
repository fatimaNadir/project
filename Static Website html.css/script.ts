
// TypeScript for the entire Pizza Hut website

// Function to toggle visibility of social links in the footer
function toggleSocialLinks() {
    const socialLinks = document.querySelector('.social-icons') as HTMLElement;
    if (socialLinks.style.display === 'none') {
      socialLinks.style.display = 'flex';
    } else {
      socialLinks.style.display = 'none';
    }
  }
  
  // Event listener for toggling social links
  const toggleButton = document.getElementById('toggle-social-links') as HTMLElement;
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleSocialLinks);
  }
  
  // Function to show the Popular Pizzas section
  function showPopularPizzas() {
    const pizzasSection = document.querySelector('.popular-pizzas') as HTMLElement;
    pizzasSection.style.display = 'block';
  }
  
  // Event listener to show popular pizzas on page load or user interaction
  window.addEventListener('load', showPopularPizzas);
  
  // Function to scroll to the 'About Us' section
  function scrollToAboutUs() {
    const aboutUsSection = document.querySelector('.about-us') as HTMLElement;
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Event listener for 'About Us' section scroll button (if added in HTML)
  const aboutUsButton = document.getElementById('about-us-btn') as HTMLElement;
  if (aboutUsButton) {
    aboutUsButton.addEventListener('click', scrollToAboutUs);
  }
  
  // Function to close the "Location & Delivery Info" section when user clicks outside
  function closeLocationInfo(event: MouseEvent) {
    const locationInfo = document.querySelector('.location-delivery') as HTMLElement;
    if (!locationInfo.contains(event.target as Node)) {
      locationInfo.style.display = 'none';
    }
  }
  
  // Event listener for closing the Location & Delivery Info section
  document.addEventListener('click', closeLocationInfo);
  