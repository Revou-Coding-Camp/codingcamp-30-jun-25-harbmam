document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default

  // Ambil nilai dari input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Validasi sederhana
  if (!name || !email || !phone || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulasikan pengiriman data (gunakan console.log)
  console.log('Sending data...');
  console.log({ name, email, phone, message });

  // Kosongkan form setelah pengiriman
  document.getElementById('contact-form').reset();

  // Tampilkan notifikasi sukses
  alert('Message sent successfully!');
});