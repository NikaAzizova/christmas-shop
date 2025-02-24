//Открываем модальное окно
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-close');
const modalWindow = document.querySelector('.modal-block');
const active = document.querySelector('.active');
const body = document.querySelector('.body');


const link2 = document.querySelector('#link2');
const link3 = document.querySelector('#link3');
const link4 = document.querySelector('#link4');




burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    modalWindow.classList.toggle('open');
    body.classList.toggle('body-overflow');

});

link2.addEventListener('click', () => {
    burger.classList.remove('active');
    body.classList.remove('body-overflow');
    modalWindow.classList.remove('open');

})

link3.addEventListener('click', () => {
    burger.classList.remove('active');
    body.classList.remove('body-overflow');
    modalWindow.classList.remove('open');

})

link4.addEventListener('click', () => {
    burger.classList.remove('active');
    body.classList.remove('body-overflow');
    modalWindow.classList.remove('open');

})