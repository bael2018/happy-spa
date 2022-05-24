const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')
const section = document.getElementById('dark-mode')
const title = document.getElementById('dark-mode__title')

darkBtn.addEventListener('click' , () => {
    section.classList.add('dark-mode_active')
    title.classList.remove('section-title_light')
})

lightBtn.addEventListener('click' , () => {
    section.classList.remove('dark-mode_active')
    title.classList.add('section-title_light')
})