document.getElementById('my-works-button').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah navigasi langsung
  this.classList.add('clicked'); // Tambahkan class untuk memicu animasi

  // Tunggu animasi selesai sebelum navigasi
  setTimeout(() => {
      window.location.href = this.href; // Navigasi ke halaman portofolio
  }, 500); // Sesuaikan waktu dengan durasi animasi
});

document.getElementById('my-works-button').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah navigasi langsung

  // Tampilkan loading screen
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('active');

  // Tunggu beberapa detik (simulasi loading), lalu navigasi ke halaman portofolio
  setTimeout(() => {
      window.location.href = this.href;
  }, 1000); // Ganti 3000 dengan waktu loading yang diinginkan (dalam milidetik)
});