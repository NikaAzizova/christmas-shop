const daysHtml = document.querySelector('#days');
const hoursHtml = document.querySelector('#hours');
const minutesHtml = document.querySelector('#minutes');
const secondsHtml = document.querySelector('#seconds');

function timer() {
    const now = new Date();
    const newYearsDate = new Date(2025, 11, 31, 0, 0, 0, 0);

    const result = (newYearsDate - now) + 1000;


    const seconds = Math.floor((result / 1000) % 60);
    const minutes = Math.floor((result / 1000 / 60) % 60);
    const hours = Math.floor((result / 1000 / 60 / 60) % 24);
    const days = Math.floor((result / 1000 / 60 / 60 / 24));

    daysHtml.textContent = days;
    hoursHtml.textContent = hours;
    minutesHtml.textContent = minutes;
    secondsHtml.textContent = seconds;

    setTimeout(() => {
    timer();
    }, 1000)

}

window.onload = function () {
    timer();
}