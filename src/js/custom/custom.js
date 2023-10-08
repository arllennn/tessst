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

const custom = document.querySelector('#section__custom');


custom.addEventListener('scroll', () => {
    const scrollY = custom.scrollTop;
    
    if (scrollY > 39) {
        custom.style.backgroundImage = `url('https://images.unsplash.com/photo-1528784351875-d797d86873a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=1900&q=60')`;
        custom.style.backgroundRepeat = 'no-repeat';
        custom.style.backgroundSize = 'cover'
        custom.style.backgroundPosition = 'center'
        
    } else {
        custom.style.backgroundImage = '';
        localStorage.removeItem('background');
    }
});

