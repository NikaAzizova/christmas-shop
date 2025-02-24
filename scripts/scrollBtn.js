//Кнопка Scroll-to-Top

const scrollBtn = document.getElementById('scrollBtn');
const btnWrapper = document.querySelector('.button-wrapper');

function scrollToTopFunction() {
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', e => {
    btnWrapper.style.display = window.scrollY > 300 ? 'block' : 'none';
})
