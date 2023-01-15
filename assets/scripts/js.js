//menu
let navDivMenuResponsive = document.querySelector('.nav__div--menuResponsive');
let navUl = document.querySelector('.nav__ul');
let navUlLi1 = document.querySelector('.nav__ul--li1');
let navUlLi = document.querySelectorAll('.nav__ul--li');
let navDiv = document.querySelector('.nav__div');
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

navDivMenuResponsive.addEventListener('click', () => {
    navUl.classList.toggle('nav__ul--toggle')

})

navUlLi1.addEventListener('click', () => {
    navUl.classList.toggle('nav__ul--toggle')

})

for (let i = 0; i < navUlLi.length; i++) {
    navUlLi[i].addEventListener('click', () => {
        navUl.classList.toggle('nav__ul--toggle')

    })
}

navDiv.addEventListener('click', () => {
    navUl.classList.remove('nav__ul--toggle')
})

header.addEventListener('click', () => {
    navUl.classList.remove('nav__ul--toggle')
})

main.addEventListener('click', () => {
    navUl.classList.remove('nav__ul--toggle')
})

footer.addEventListener('click', () => {
    navUl.classList.remove('nav__ul--toggle')
})


//header animation
let articleUlLi = document.querySelectorAll('.article__ul--li')
let articleDivBx = document.querySelectorAll('.article__div--Bx')

for (let i = 0; i < articleDivBx.length; i++) {
    articleUlLi[i].addEventListener('mouseover', function () {
        for (let i = 0; i < articleDivBx.length; i++) {
            articleDivBx[i].className = 'article__div--Bx'
        }
        document.getElementById(this.dataset.id).className = 'article__div--Bx article__ul--active'

        for (let i = 0; i < articleUlLi.length; i++) {
            articleUlLi[i].className = 'article__ul--li'
        }
        this.className = 'article__ul--li article__ul--active'
    })
}

const slider = document.querySelector(".section__ul--projects");
const slides = document.querySelectorAll(".section__ul--liProjects");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;
let slideInterval;

function startSlider() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 8000);
}

function pauseSlider() {
    clearInterval(slideInterval);
}

function nextSlide() {
    slides[index].classList.remove("active");
    index++;
    if (index === slides.length) {
        index = 0;
    }
    slides[index].classList.add("active");
}

function prevSlide() {
    slides[index].classList.remove("active");
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    slides[index].classList.add("active");
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

slider.addEventListener("mouseenter", pauseSlider);
slider.addEventListener("mouseleave", startSlider);

startSlider();

// Touch events for mobile
let initialX = null;
let finalX = null;

function handleTouchStart(e) {
    initialX = e.touches[0].clientX;
    clearInterval(slideInterval);
}

function handleTouchEnd(e) {
    finalX = e.changedTouches[0].clientX;
    if (initialX > finalX) {
        nextSlide();
    } else {
        prevSlide();
    }
    startSlider();
}

slider.addEventListener("touchstart", handleTouchStart);
slider.addEventListener("touchend", handleTouchEnd);