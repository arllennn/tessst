let demoButtons;

function start(){
    demoButtons = document.querySelectorAll('.js-modify');
    for (const i = 0; i < demoButtons.length; i++) {
        demoButtons[i].addEventListener('click', toggleEffect);
    }

    const saveButtons = document.querySelectorAll('.js-save');
    for (const i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener('click', toggleActive);
    }
}

function toggleEffect() {
    const target = document.querySelector(this.dataset.target);
    target.dataset.effect = this.dataset.effect;
    for (const i = 0; i < demoButtons.length; i++) {
        demoButtons[i].classList.remove('active');
    }
    toggleActive.call(this);
}

function toggleActive(){
    this.classList.toggle('active');
}

window.addEventListener('load', start);