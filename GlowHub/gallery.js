let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
    currentImageIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex].src;
}
