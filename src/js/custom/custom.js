const customBtn = document.querySelectorAll('.block__custom--cards__card--btn')


customBtn.forEach((el) => {
    el.addEventListener('click', () => {
        if(el.textContent === 'добавить в корзину'){
            el.innerHTML = 'удалить из корзины'
        }else{
            el.innerHTML = 'добавить в корзину'
        }
    })
})