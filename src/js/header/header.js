const backdrop = document.querySelector('.backdrop')
const nav = document.querySelector('.block__header--nav__menu')

backdrop.addEventListener('click', () => {
    nav.classList.toggle('navActive')
    backdrop.classList.toggle('navActive')
})
const qrcodeBtn = document.querySelector('.block__header--contacts__btn')
const qrcode = document.querySelector('.qrcode')
qrcodeBtn.addEventListener('click', () => {
    qrcode.classList.toggle('qrcode__active')
    setTimeout(() => {
        qrcode.classList.remove('qrcode__active')
    }, 19000)
})

