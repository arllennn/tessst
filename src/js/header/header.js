const backdrop = document.querySelector('.backdrop')
const nav = document.querySelector('.block__header--nav__menu')

backdrop.addEventListener('click', () => {
    nav.classList.toggle('navActive')
    backdrop.classList.toggle('navActive')
})