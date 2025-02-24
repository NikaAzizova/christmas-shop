import { info } from "./info.js";

const title = document.querySelector('#title');
const subtitle = document.querySelector('#subtitle');
const description = document.querySelector('#description');
/*SCORE */
const liveScore = document.querySelector('#live-score');
const liveVisual = document.querySelector('#live-visual');
const createScore = document.querySelector('#create-score');
const createVisual = document.querySelector('#create-visual');
const loveScore = document.querySelector('#love-score');
const loveVisual = document.querySelector('#love-visual');
const dreamScore = document.querySelector('#dream-score');
const dreamVisual = document.querySelector('#dream-visual');
const imageCard = document.querySelector('#img-card');

window.addEventListener('load', () => {

    const cards = document.querySelectorAll('.gift-section__inner-wrapper');
    const modalWindowCard = document.querySelector('.modal-window');
    const modalClose = document.querySelector('.modal-window__cross');
    const body = document.querySelector('.body');

    function closeModal() {
        body.classList.remove('body-overflow');
        modalWindowCard.style.display = 'none';
    }

    cards.forEach((card) => {

        card.addEventListener('click',  function openModal() {
            body.classList.add('body-overflow');
            modalWindowCard.style.display = 'block';
            imageCard.removeAttribute('src');


            info.forEach((elem)=>{
                if(card.id === elem.id){
                    title.textContent = elem.category;
                    subtitle.textContent = elem.name;
                    description.textContent = elem.description;
                    liveScore.textContent = elem.superpowers.live;
                    createScore.textContent = elem.superpowers.create;
                    loveScore.textContent = elem.superpowers.love;
                    dreamScore.textContent = elem.superpowers.dream;
                    imageCard.setAttribute('src', elem.image);
                    /*LIVE*/
                    if(elem.superpowers.live) {
                        const slicedNum = elem.superpowers.live.slice(1);
                        const quantity = slicedNum / 100;
                        liveVisual.textContent = '';
                        for(let i = 0; i < quantity; i++){
                            liveVisual.textContent += "*";
                        }
                    }
                    /*CREATE*/
                    if(elem.superpowers.create) {
                        const slicedNum = elem.superpowers.create.slice(1);
                        const quantity = slicedNum / 100;
                        createVisual.textContent = '';
                        for(let i = 0; i < quantity; i++){
                            createVisual.textContent += "*";
                        }
                    }
                    /*LOVE*/
                    if(elem.superpowers.love) {
                        const slicedNum = elem.superpowers.love.slice(1);
                        const quantity = slicedNum / 100;
                        loveVisual.textContent = '';
                        for(let i = 0; i < quantity; i++){
                            loveVisual.textContent += "*";
                        }
                    }
                    /* DREAM*/
                    if(elem.superpowers.dream) {
                        const slicedNum = elem.superpowers.dream.slice(1);
                        const quantity = slicedNum / 100;
                        dreamVisual.textContent = '';
                        for(let i = 0; i < quantity; i++){
                            dreamVisual.textContent += "*";
                        }
                    }
                }
            })
        });
    })

    modalClose.addEventListener('click', closeModal);
})








