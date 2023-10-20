// console.log('Carosello Array di Oggetti');

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]
console.log(images);

const slideDomElement = document.querySelector('.slide');
console.log(slideDomElement);
const thumbDomElement = document.querySelector('.thumbnails');
console.log(thumbDomElement);

images.forEach((currentElement) => {
    console.log(currentElement);
    const imgSrc = currentElement.image;
    const title = currentElement.title;
    const text = currentElement.text;
    console.log(imgSrc, title, text);

    const htmlString = `
    <div class="slide-item">
        <img src="${imgSrc}">
        <div class="caption">
            <h4>${title}</h4>
            <p>${text}</p>
        </div>
    </div>`

    const htmlThumb = `
    <div class="thumb-item">
        <img src="${imgSrc}">
    </div>`

    slideDomElement.innerHTML += htmlString;
    thumbDomElement.innerHTML += htmlThumb;
});

const slideItemDomElement = document.getElementsByClassName('slide-item');
console.log(slideItemDomElement);
const thumbItemDomElement = document.getElementsByClassName('thumb-item');
console.log(thumbItemDomElement);

let currentIndex = 0;
let currentSlide = slideItemDomElement[currentIndex];
currentSlide.classList.add('active');
console.log(currentSlide);

let currentThumb = thumbItemDomElement[currentIndex];
currentThumb.classList.add('active');
console.log(currentThumb);

const slideNext = () => {
    currentSlide = slideItemDomElement[currentIndex].classList.remove('active'); 
    currentThumb = thumbItemDomElement[currentIndex].classList.remove('active');
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    currentSlide = slideItemDomElement[currentIndex].classList.add('active');
    currentThumb = thumbItemDomElement[currentIndex].classList.add('active');
};

const slidePrev = () => {
    currentSlide = slideItemDomElement[currentIndex].classList.remove('active');
    currentThumb = thumbItemDomElement[currentIndex].classList.remove('active'); 
    if (currentIndex === 0) {
        currentIndex = slideItemDomElement.length - 1;
    } else {
        currentIndex--;
    }

    currentSlide = slideItemDomElement[currentIndex].classList.add('active');
    currentThumb = thumbItemDomElement[currentIndex].classList.add('active');
};

let clock

function startSlide() {
    console.log('start');
    clock = setInterval(slideNext, 3000);
}

function stopSlide() {
    console.log('stop');
    clearInterval(clock);
}


const startDomElement = document.getElementById('start');
startDomElement.addEventListener('click', startSlide);
const stopDomElement = document.getElementById('stop');
stopDomElement.addEventListener('click', stopSlide);



const ctrlNext = document.querySelector('.ctrl-next');
ctrlNext.addEventListener('click', slideNext);

const ctrlPrev = document.querySelector('.ctrl-prev');
ctrlPrev.addEventListener('click', slidePrev);