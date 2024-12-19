

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
    behavior: 'smooth', // Adds smooth scrolling
    block: 'start',     // Aligns to the top of the viewport
    });
  }
}

// Scroll to the 'Get a Quote' section when the button is clicked
document.getElementById('get-quote-button').addEventListener('click', function() {
  scrollToElement('get-quote');
});

// Scroll to the 'Our Services' section when the button is clicked
document.getElementById('our-services-button').addEventListener('click', function() {
  scrollToElement('our-services');
});
  