const slideDiv = document.querySelector('div.slides');
const images = slideDiv.querySelectorAll('img');

let currentSlide = 0;
let z = 1;

slideDiv.addEventListener('mouseover', function() {
    slideDiv.style.cursor = 'pointer';

    images.forEach(image => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 50;
        const y = 25 * (Math.floor(Math.random() * 5)) - 50;

        image.style.transform = `translate(${x}px, ${y}px)`;
    });
});

slideDiv.addEventListener('mouseout', function() {
    images.forEach(image => {
        image.style.transform = '';
    });
});

slideDiv.addEventListener('click', function() {
    currentSlide++;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    z++;

    images.forEach(image => {
        image.style.animation = '';
    });

    images[currentSlide].style.zIndex = z;
    images[currentSlide].style.animation = 'fade 0.5s';
});