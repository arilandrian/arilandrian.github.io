// Contoh interaktivitas sederhana
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            alert(`Anda mengklik bagian ${section.id}`);
        });
    });
});