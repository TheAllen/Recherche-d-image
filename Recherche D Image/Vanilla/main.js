const API_KEY = '12546187-917a6f0406e6efeddf50f9728';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;

const form = document.querySelector('form');

//Input variable
const input = document.querySelector('input');

const loadingImage = document.querySelector('#loadingImage');

const imageSection = document.querySelector('.images');

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

//Clicking Search button
function formSubmitted(event) {
    //Prevent from refreshing
    event.preventDefault();
    const searchItem = input.value;
    console.log(searchItem);
    setInterval(displayImages, 2000);
    search(searchItem).then(displayImages);
}

//Search
function search(searchItem) {
    const url = `${API_URL}&q=${searchItem}`;
    loadingImage.style.display = '';
    imageSection.innerHTML = '';
    return fetch(url)
    .then(response => response.json())
    .then(result => {
        return result.hits;
        console.log(result);
    });
}

//Gets in the images
function displayImages(images) {
    console.log(images);
    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.largeImageURL;
        imageSection.appendChild(imageElement);
    });
    loadingImage.style.display = 'none';
}