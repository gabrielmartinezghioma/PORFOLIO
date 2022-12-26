const parallax = document.querySelector('.section__article--parallax');
const front = document.querySelector('.article--front');
const back = document.querySelector('.article--back');

const sFront = 70;
const sBack = 150;

parallax.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
    translate(
        ${x / sFront}%, 
        ${y / sFront}%
    )`; 

    back.style.transform = `
    translate(
        ${x / sBack}%, 
        ${y / sBack}%
     )`;
});


