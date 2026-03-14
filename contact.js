const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert('Please fill out all fields correctly before submitting.');
  }
});
