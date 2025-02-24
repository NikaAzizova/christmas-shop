const phoneCard = document.querySelector('.phone-card');
const phoneNumberText = document.querySelector('.phone-number')
const card = document.querySelector('.card');




card.addEventListener('mouseover', ()=>{
 phoneNumberText.classList.add('active');

})

card.addEventListener('mouseout', ()=>{
    phoneNumberText.classList.remove('active');

})