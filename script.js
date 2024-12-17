document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.all-images-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const fullscreenIcon = document.getElementById('fullscreen-icon');
    const downloadIcon = document.getElementById('download-icon'); // Added

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    fullscreenIcon.addEventListener('click', toggleFullscreen);
    downloadIcon.addEventListener('click', downloadImage); // Added
    document.addEventListener('keydown', handleKeydown);

    function openLightbox() {
        lightbox.style.display = 'flex';
        showImage(currentIndex);
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        lightboxImg.classList.remove('fullscreen-img');
    }

    function showImage(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        lightboxImg.src = images[index].src;
    }

    function showPrevImage() {
        currentIndex--;
        showImage(currentIndex);
    }

    function showNextImage() {
        currentIndex++;
        showImage(currentIndex);
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            lightbox.requestFullscreen().then(() => {
                fullscreenIcon.innerHTML = '<i class="fas fa-compress"></i>';
                lightboxImg.classList.add('fullscreen-img');
            }).catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen().then(() => {
                fullscreenIcon.innerHTML = '<i class="fas fa-expand"></i>';
                lightboxImg.classList.remove('fullscreen-img');
            });
        }
    }

    function downloadImage() {
        const link = document.createElement('a');
        link.href = lightboxImg.src; // Get the current image source
        link.download = lightboxImg.src.split('/').pop(); // Use the image filename as the download name

        // Check if the image source is a valid URL before triggering the download
        if (link.href && link.href.startsWith('http')) {
            link.click(); // Trigger the download
        } else {
            alert('Unable to download the image.');
        }
    }

    function handleKeydown(event) {
        switch(event.key) {
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
            case 'Escape':
                closeLightbox();
                break;
            case 'f':
                toggleFullscreen();
                break;
        }
    }
});

