const buttons = document.querySelectorAll('aside nav button');
const title = document.querySelector('.section1 h1');

// появление элементов первой секции (кнопки меню и название отеля)
buttons.forEach((button, index) => {
    setTimeout(() => {
        anime({
            targets: button,
            duration: 100,
            translateX: '0%',
            opacity: 1,
            easing: 'easeOutExpo',
            complete: function() {
                
                if (index === buttons.length - 1) {
                    setTimeout(() => {
                        anime({
                            targets: title,
                            duration: 1500,
                            translateY: '0',
                            opacity: 1,
                            easing: 'easeOutExpo'
                        });
                    }, 300);
                }
            }
        });
    }, 500 * (index + 1)); // Задержка для каждой кнопки
});
