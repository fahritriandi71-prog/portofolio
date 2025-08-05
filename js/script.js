document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk toggle menu navbar (untuk mobile)
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    if (menuBtn && navbar) {
        menuBtn.onclick = () => {
            menuBtn.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };

        // Menutup navbar saat link navigasi diklik (untuk mobile)
        document.querySelectorAll('.navbar a').forEach(link => {
            link.onclick = () => {
                menuBtn.classList.remove('fa-times');
                navbar.classList.remove('active');
            };
        });
    }

    // Menutup navbar saat user scroll (untuk mobile)
    window.onscroll = () => {
        if (navbar && menuBtn) { // Pastikan elemen ada sebelum diakses
            menuBtn.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    };

    // Auto update tahun di footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Scroll aktif pada navigasi berdasarkan posisi scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header .navbar a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight; // Offset untuk header fixed
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Tambahkan class 'active' ke link navigasi saat halaman dimuat
    // Untuk memastikan link home aktif saat pertama kali load
    const homeLink = document.querySelector('.navbar a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});