let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next-button').addEventListener('click', () => {
    moveToNextItem();
});

document.querySelector('.prev-button').addEventListener('click', () => {
    moveToPreviousItem();
});

function moveToNextItem() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function moveToPreviousItem() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}



document.getElementById('hamburger-menu').addEventListener('click', function () {
    var menu = document.querySelector('.sticky-menu ul');
    menu.classList.toggle('active');
});
