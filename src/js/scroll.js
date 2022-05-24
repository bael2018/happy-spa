const scrollHandler = (offset , element) => {
    window.scrollTo(window.scrollX, document.querySelector(`.${element}`).offsetTop - offset)
}