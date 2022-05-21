// dark-mode

const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')
const section = document.getElementById('dark-mode')
const title = document.getElementById('dark-mode-title')

darkBtn.addEventListener('click' , () => {
    section.classList.add('dark_mode-active')
    title.classList.remove('section_title-light')
})

lightBtn.addEventListener('click' , () => {
    section.classList.remove('dark_mode-active')
    title.classList.add('section_title-light')
})