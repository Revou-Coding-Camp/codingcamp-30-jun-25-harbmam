document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !phone || !message) {
    alert('Please fill in all fields.');
    return;
  }

  console.log('Sending data...');
  console.log({ name, email, phone, message });

  document.getElementById('contact-form').reset();

  alert('Message sent successfully!');
});