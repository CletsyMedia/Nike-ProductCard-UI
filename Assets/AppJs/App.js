let card = document.querySelector('.card-head');
let cardBtn = document.querySelector('.btn');
let cloX = document.querySelector('.clox');

cardBtn.addEventListener('click', () => {
    card.classList.add('active');
})
cloX.addEventListener('click', () => {
    card.classList.remove('active');
})