const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('[data-lightbox]').forEach((img) => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox?.querySelector('img');
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('show');
  });
});

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  lightbox.addEventListener('click', () => lightbox.classList.remove('show'));
}
