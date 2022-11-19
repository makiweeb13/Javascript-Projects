const sidebarToggle = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const modalBtn = document.querySelector('.modal-btn')
const modalCloseBtn = document.querySelector('.modal-close-btn')


sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar')
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})

modalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal')
})

modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})
