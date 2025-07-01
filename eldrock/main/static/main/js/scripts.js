const buttons = document.querySelectorAll('.nav-btn');
const title = document.querySelector('.section1 h1');
const buttonDates = document.getElementById("scroll-dates");


// Анимация кнопок и заголовка
buttons.forEach((button, index) => {
    setTimeout(() => {
        anime({
            targets: button,
            duration: 1500,
            translateX: '0%',
            opacity: 1,
            easing: 'easeOutExpo',
            complete: () => {
                if (index === 0) {
                    const scrollBtn = document.getElementById("scroll-dates");
                    if (scrollBtn) {
                        anime({
                            targets: scrollBtn,
                            duration: 1000,
                            opacity: 1,
                            easing: 'easeOutExpo'
                        });
                    }
                }
                if (index === 0) {
                    setTimeout(() => {
                        anime({
                            targets: title,
                            duration: 1500,
                            translateY: '0%',
                            opacity: 1,
                            easing: 'easeOutExpo'
                        });
                    }, 0);
                }
            }
        });
    }, 400 * (index + 1));
});


const popupTriggers = document.querySelectorAll('.popup-trigger');
const body = document.body;
const timeout = 800;
let unlock = true;

// подборка модальных окон
if (popupTriggers.length > 0) {
    for (let index = 0; index < popupTriggers.length; index++) {
        const popupTrigger = popupTriggers[index];
        
        if (popupTrigger) {
            const popupName = popupTrigger.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupTrigger.addEventListener('click', function(e) {
                // e.preventDefault();
                openPopup(currentPopup);
            });
        }
    }
}

// закрытие модальных окон
const popupClose = document.querySelectorAll('.popup-close');
if (popupClose.length > 0) {
    for (let index = 0; index < popupClose.length; index++) {
        const el = popupClose[index];
        el.addEventListener('click', function(e) {
            // e.preventDefault();
            closePopup();
        });
    }
}

// открытие окна
function openPopup(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            closePopup(popupActive, false);
        } else {
            bodyLock();            
        }
        body.classList.add('open');
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function(e) {
            if (!e.target.closest('.popup-content')) {
                closePopup(e.target.closest('.popup'));
            }
        });
    }
}

// закрытие окна
function closePopup(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

// блокировка прокрутки
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('main').offsetWidth + 'px';
    
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

// разблокировка прокрутки
function bodyUnlock() {
    setTimeout(() => {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

// формочка для ввода телефона
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        Inputmask("+7 (999) 999-99-99").mask(phoneInput);
    }
});


const FormHead = document.getElementById('toggle-form');
const FormWrapper = document.getElementById('form-wrapper');

FormHead.addEventListener('click', function () {
    FormWrapper.classList.toggle('open');
=======
    }, 500 * (index + 1)); // Задержка для каждой кнопки
>>>>>>> e502024e0826d2c1a728934492800eaacc3507b5
});
