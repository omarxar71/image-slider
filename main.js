const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const totalSlides = slideImages.length;
let slideInterval;

// Function to show the current slide
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const slideWidth = slideImages[0].clientWidth;
    slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    updateDots();
}

// Function to update dots
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Next button click
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    resetInterval();
});

// Previous button click
prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    resetInterval();
});

// Dots click
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetInterval();
    });
});

// Auto slide
function startSlideShow() {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4000);
}

// Pause on hover
document.querySelector('.slider-container').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

// Resume on mouse leave
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    startSlideShow();
});

// Reset auto slide on manual navigation
function resetInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Initialize slider
showSlide(currentIndex);
startSlideShow();
