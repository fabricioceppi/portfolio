// Dynamic portfolio main functionalities

const body = document.querySelector('body');
const mainComponents = document.getElementById('main-components');
const menu = document.getElementById('menu-button');

menu.addEventListener('click', () => {
    let backColor = getComputedStyle(mainComponents).backgroundColor === 'rgb(229, 41, 27)' ? 'rgb(6, 6, 6)' : 'rgb(229, 41, 27)';
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let diam = Number(getComputedStyle(menu).width.slice(0, 2));
    let augmentBy;

    if (screenWidth > screenHeight) {
        augmentBy = (Math.sqrt(screenWidth**2 *2)) / diam;
    } else {
        augmentBy = (Math.sqrt(screenHeight**2 *2)) / diam;
    };

    augmentBy *= 2;
    menu.style.backgroundColor = backColor;
    menu.style.transform = `scale(${augmentBy})`;
    setTimeout(() => {
        menu.style.transition = 'opacity 0.5s';
        mainComponents.style.backgroundColor = backColor;
        menu.style.opacity = 0;
        setTimeout(() => {
            menu.style.backgroundColor = '#f1f1f1';
            menu.style.transform = 'scale(1)';
            menu.style.opacity = '1';
        },500);
    }, 500);
    menu.style.transition = 'background-color 0.5s, transform 0.8s';
});