const images = document.querySelectorAll('.image-container .image img');
const popup = document.querySelector('.popup-images');
const popupImg = document.querySelector('.popup-images img');
const closeBtn = document.querySelector('.popup-images span');

images.forEach(image => {
    image.addEventListener('click', () => {
        popupImg.src = image.src;
        popup.style.display = 'block';
    });
});
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});