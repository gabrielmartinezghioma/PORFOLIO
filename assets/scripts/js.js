//menu
let navDivMenuResponsive = document.querySelector('.nav__div--menuResponsive');

let navUl = document.querySelector('.nav__ul');


navDivMenuResponsive.addEventListener('click', () => {
    navUl.classList.toggle('nav__ul--toggle')

})










//header
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


// slider auto
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 8000);


