const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const modalOverlay = document.querySelector('.modal-overlay')
const modalBtn = document.querySelector('.modal-btn')
const modalCloseBtn = document.querySelector('.modal-close-btn')

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
})

modalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal')
})

modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})


