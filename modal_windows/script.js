'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModalFunction = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModalFunction = function() {
     modal.classList.add('hidden');
     overlay.classList.add('hidden');
}

// For Loop checking if any of the tabs are clicked to open the Modal
for (let i = 0; i < btnOpenModal.length; i++) btnOpenModal[i].addEventListener('click', openModalFunction);

// CLose Modal when X button is clicked
btnCloseModal.addEventListener('click', closeModalFunction);
overlay.addEventListener('click',closeModalFunction);

// Closing Modal when ESC is pressed
document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalFunction();
    }
});