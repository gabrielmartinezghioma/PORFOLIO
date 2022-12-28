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

let counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4 ){
        counter = 1;
    }
},8000);


