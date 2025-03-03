 // Ambil elemen yang diperlukan
 const sidebar = document.getElementById('sidebar');
 const navbarToggle = document.getElementById('navbar-toggle');
 const closeBtn = document.getElementById('close-btn');
 
 // Fungsi untuk membuka sidebar
 navbarToggle.addEventListener('click', () => {
     sidebar.classList.add('open');
 });
 
 // Fungsi untuk menutup sidebar
 closeBtn.addEventListener('click', () => {
     sidebar.classList.remove('open');
 });
 
 // Tutup sidebar saat mengklik di luar sidebar
 document.addEventListener('click', (event) => {
     if (!sidebar.contains(event.target) && !navbarToggle.contains(event.target)) {
         sidebar.classList.remove('open');
     }
 });
 
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
      }
  });
});
