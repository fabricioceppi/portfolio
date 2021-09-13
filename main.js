// Dynamic portfolio main functionalities

const body = document.querySelector('body');
const mainComponents = document.getElementById('main-components');
const menu = document.getElementById('menu-button');
const dynamicContent = document.querySelectorAll('.dynamic');
let contentCursor = 0;

menu.addEventListener('click', () => {
    let backColor = contentCursor === 1 ? 'rgb(6, 6, 6)' : 'rgb(229, 41, 27)';
    let rectWidth = Number(getComputedStyle(mainComponents).width.replace('px', ''));
    let rectHeight = Number(getComputedStyle(mainComponents).height.replace('px', ''));
    let diam = Number(getComputedStyle(menu).width.replace('px', ''));
    let augmentBy;

    if (rectWidth > rectHeight) {
        augmentBy = (Math.sqrt(rectWidth**2 *2)) / diam;
    } else {
        augmentBy = (Math.sqrt(rectHeight**2 *2)) / diam;
    };
    augmentBy *= 2;
    menu.style.transition = 'background-color 0.5s, transform 0.8s';
    menu.style.backgroundColor = backColor;
    menu.style.transform = `scale(${augmentBy})`;

    setTimeout(() => {
        menu.style.transition = 'opacity 0.3s';
        mainComponents.style.backgroundColor = backColor;
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.backgroundColor = '#f1f1f1';
            menu.style.transform = 'scale(1)';
            menu.style.opacity = '1';
        },400);
    }, 400);

    if (contentCursor === 1) {
        contentCursor = 0;
    } else {
        contentCursor = 1;
    }
    updateContent();
});

function updateContent() {
    for (let i = 0; i < dynamicContent.length; i++) {
        if (dynamicContent[i].classList[1] === 'active') {
            dynamicContent[i].classList.remove('active');
        }
    }
    dynamicContent[contentCursor].classList.add('active');
}

