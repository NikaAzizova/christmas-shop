import { info } from "./info.js";
//карточки подарков

const giftCardsWrapper = document.querySelector('.gift-section__second-wrapper');
//при загрузке страницы выводим все карточки
window.addEventListener('load', function () {
    info.forEach((item) => {


        giftCardsWrapper.insertAdjacentHTML('beforeend', ` <div class="gift-section__inner-wrapper" id="${item.id}">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${item.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_${item.color}">${item.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${item.name}</p>
                                </div>
                            </div>
                        </div>
`)
    });
})

const all = document.getElementById('all');
const work = document.getElementById('work');
const health = document.getElementById('health');
const harmony = document.getElementById('harmony');

//при клике на слово "ALL" выводим все карточки

all.addEventListener('click', () => {
    giftCardsWrapper.innerHTML = '';

    info.forEach((item) => {
        giftCardsWrapper.insertAdjacentHTML('beforeend', ` <div class="gift-section__inner-wrapper" id="${item.id}">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${item.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_${item.color}">${item.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${item.name}</p>
                                </div>
                            </div>
                        </div>
`)
    });
})

//при клике на слово "FOR WORK" выводим только те карточки у которых есть категория "FOR WORK"

work.addEventListener('click', () => {

    giftCardsWrapper.innerHTML = '';

    info.filter((elem) => {
        if (elem.category === 'For Work') {
            giftCardsWrapper.insertAdjacentHTML('beforeend', ` <div class="gift-section__inner-wrapper">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${elem.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_${elem.color}">${elem.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${elem.name}</p>
                                </div>
                            </div>
                        </div>
`)
        }
    })
})

//при клике на слово "FOR HEALTH" выводим только те карточки у которых есть категория "FOR HEALTH"

health.addEventListener('click', () => {

    giftCardsWrapper.innerHTML = '';

    info.filter((elem) => {
        if (elem.category === 'For Health') {
            giftCardsWrapper.insertAdjacentHTML('beforeend', ` <div class="gift-section__inner-wrapper">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${elem.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_${elem.color}">${elem.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${elem.name}</p>
                                </div>
                            </div>
                        </div>
`)
        }
    })
})

//при клике на слово "FOR HARMONY" выводим только те карточки у которых есть категория "FOR HARMONY"

harmony.addEventListener('click', () => {

    giftCardsWrapper.innerHTML = '';

    info.filter((elem) => {
        if (elem.category === 'For Harmony') {
            giftCardsWrapper.insertAdjacentHTML('beforeend', ` <div class="gift-section__inner-wrapper">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${elem.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_${elem.color}">${elem.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${elem.name}</p>
                                </div>
                            </div>
                        </div>
`)
        }
    })
})