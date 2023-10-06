const acardeonContent = document.querySelectorAll('.block__acardeon--content')
const acardeonTop = document.querySelector('.block__acardeon--content__top')
const acardeonBottom = document.querySelectorAll('.block__acardeon--content__bottom')

acardeonContent.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('block__acardeon--content__active')
        setTimeout(function(){
        el.classList.remove('block__acardeon--content__active')
    }, 17000);
    })
})
acardeonBottom.forEach(el => {
    el.addEventListener('click', (e) => {
       e.stopPropagation()
    })
})
