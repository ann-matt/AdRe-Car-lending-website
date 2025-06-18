const navMenu = document.querySelector('.nav__container');
const burger = document.querySelector('.nav__burger');
const modal = document.querySelector('.modal__container');
const closure = document.querySelector('.modal__closure');

burger.addEventListener('click', () => {
    navMenu.classList.add('nav--hidden');
    modal.classList.add('modal--show');
});

closure.addEventListener('click', () => {
    navMenu.classList.remove('nav--hidden');
    modal.classList.remove('modal--show');
});

