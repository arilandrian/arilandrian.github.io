// Foto Profil Interaktif
const profilePic = document.getElementById('profile-pic');
const profileInput = document.createElement('input');
profileInput.type = 'file';
profileInput.id = 'profile-input';
profileInput.accept = 'image/*';
profileInput.style.display = 'none';

profilePic.addEventListener('click', () => {
    profileInput.click();
});

profileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePic.src = e.target.result;
            localStorage.setItem('profile-pic', e.target.result); // Simpan foto di localStorage
        };
        reader.readAsDataURL(file);
    }
});

// Cek foto profil yang disimpan di localStorage saat halaman dimuat
const savedProfilePic = localStorage.getItem('profile-pic');
if (savedProfilePic) {
    profilePic.src = savedProfilePic;
}

// Animasi Scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });
});

// Form Kontak
const contactForm = document.getElementById('contactForm');
const formResponse = document.createElement('p');
formResponse.id = 'form-response';
contactForm.appendChild(formResponse);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana
    if (!name || !email || !message) {
        formResponse.textContent = 'Harap isi semua field!';
        formResponse.style.color = 'red';
        return;
    }

    // Simulasi pengiriman form
    setTimeout(() => {
        formResponse.textContent = `Terima kasih, ${name}! Pesan Anda telah terkirim.`;
        formResponse.style.color = '#2575fc';
        contactForm.reset();
    }, 1000);
});