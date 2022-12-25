
// // incorporo contenido html
// const bodyHtml = document.querySelector('.body');
// bodyHtml.innerHTML+='<h2>holu</h2>'

// //cambio de clase
// bodyHtml.classList.contains('aa')

const parallax = document.querySelector('.section__article--parallax');
const front = document.querySelector('.article--front');
const back = document.querySelector('.article--back');

const sFront = 150;
const sBack = 400;

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


