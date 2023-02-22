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


//cuenta regresiva
const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Set the date you want to count down to
const countDownDate = new Date("Mar 05, 2023 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = "EXPIRED";
  }
}, 1000);

const paragraphs = document.querySelectorAll('.article__p');

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener('click', () => {
    paragraph.classList.toggle('active');
  });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    
    accordionItem.classList.toggle('active');
  });
});



// Obtener elementos del DOM
const slider = document.querySelector('.section__ul--projects');
const slides = document.querySelectorAll('.section__ul--liProjects');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let slideInterval;
let touchStartX = 0;
let touchEndX = 0;

// Función para iniciar el auto movimiento
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 400000);
}

// Función para mostrar la siguiente diapositiva
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Función para mostrar la diapositiva anterior
function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Función para detener el auto movimiento
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Función para manejar el gesto de deslizar
function handleSwipe() {
    if (touchEndX < touchStartX) {
        nextSlide();
    }
    if (touchEndX > touchStartX) {
        prevSlide();
    }
}

// Iniciar auto movimiento
startSlideshow();

// Agregar evento touchstart para dispositivos táctiles
slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    stopSlideshow();
});



// Agregar evento mouseover y mouseout para escritorio
slider.addEventListener('mouseover', stopSlideshow);
slider.addEventListener('mouseout', startSlideshow);


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


// Email js

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_czf3zwk';
        const templateID = 'template_a7l18vm';
    
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                this.reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Muchas gracias por tu comentario! Estoy emocionado de seguir mejorando gracias a tu opinión.',
                    showConfirmButton: false,
                    timer: 5000
                  })
                 
            }, (err) => {
                btn.value = 'Send Email';
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Lo sentimos, ha ocurrido un problema. Por favor, haz clic en  ENLACE que aparece al final de este mensaje para enviar tu comentario por email',
                    footer: '<a href="mailto:gabrielghioma@gmail.com">ENLACE</a>'
                })
                this.reset();
            });
    });
