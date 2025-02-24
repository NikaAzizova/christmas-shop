import { info } from "./info.js";

const randomIndexOne = Math.floor(Math.random() * (info.length-1)+0);
const randomIndexTwo = Math.floor(Math.random() * (info.length-1)-0);
const randomIndexThree = Math.floor(Math.random() * (info.length-1)+0);
const randomIndexFour = Math.floor(Math.random() * info.length);


const cardOne = info[randomIndexOne];
const cardTwo = info[randomIndexTwo];
const cardThree = info[randomIndexThree];
const cardFour = info[randomIndexFour];


window.addEventListener('load', function () {
    const giftSection = document.querySelector('.gift-section__second-wrapper');

const cardsHTML=`
 <div class="gift-section__inner-wrapper">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${cardOne.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_blue">${cardOne.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${cardOne.name}</p>
                                </div>
                            </div>
                        </div>
                        <!--Второй блок с подарком-->
                        <div class="gift-section__inner-wrapper">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${cardTwo.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_green">${cardTwo.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${cardTwo.name}</p>
                                </div>
                            </div>
                        </div>
                        <!--Третий блок с подарком-->
                        <div class="gift-section__inner-wrapper">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${cardThree.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_blue">${cardThree.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${cardThree.name}</p>
                                </div>
                            </div>
                        </div>
                        <!--Четвертый блок с подарком-->
                        <div class="gift-section__inner-wrapper">
                            <div class="gift__wrapper">
                                <img class="gift__img" src="${cardFour.image}" alt="gift picture">
                            </div>
                            <div class="gift-description">
                                <div class="gift-description__title">
                                    <p class="description__title description__title_pink">${cardFour.category}</p>
                                </div>
                                <div class="gift-description__subtitle">
                                    <p class="description__subtitle">${cardFour.name}</p>
                                </div>
                            </div>
                        </div>
`;

giftSection.innerHTML = cardsHTML;
});
