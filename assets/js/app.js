const loginFormBtn = document.querySelector('.login-form');
const registerFormBtn = document.querySelector('.register-form');
const loginForm = document.querySelector('.js-login-form');
const registerForm = document.querySelector('.js-register-form');
const closeBtns = document.querySelectorAll('.js-close');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const switchTos = document.querySelectorAll('.js-switch-to');

function closeForm() {
    modal.classList.remove('open');
    loginForm.classList.remove('hidden');
    registerForm.classList.remove('hidden');
}

function openLogin() {
    modal.classList.add('open');
    registerForm.classList.add('hidden');
}

function openRegister() {
    modal.classList.add('open');
    loginForm.classList.add('hidden');
}
function switchToForm() {
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

loginFormBtn.addEventListener('click', openLogin);
registerFormBtn.addEventListener('click', openRegister);
for(const switchTo of switchTos) {
    switchTo.addEventListener('click', switchToForm);
}
for(const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', closeForm);
}

modalContainer.addEventListener('click', function(e) {
    if(e.target === modalContainer) {
        closeForm();
    }
});
//js for slide show
const listImage = document.querySelector('.list-images')
const imgs = document.querySelectorAll('.slide-show-img')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const length = imgs.length
let current = 0

const handleChangeSlide = () => {
    if (current == length - 1) {
        current = 0
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')

    } else {
        current ++
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
}

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000)

btnRight.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

btnLeft.addEventListener('click', () => {
    clearInterval(handleEventChangeSlide)
    if (current == 0) {
        current = length - 1
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    } else {
        current --
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.index-item-'+ current).classList.add('active')
    }
    handleEventChangeSlide = setInterval(handleChangeSlide, 4000)
})

