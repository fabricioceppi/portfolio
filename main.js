// Dynamic portfolio main functionalities

// Menu Toggle

const body = document.querySelector('body');
const menu = document.getElementById('menu-button');
const dynamicContent = document.querySelectorAll('.dynamic');
let contentCursor = 0;

menu.addEventListener('click', () => {
    let backColor = contentCursor === 1 ? 'rgb(6, 6, 6)' : 'rgb(229, 41, 27)';
    let rectWidth = Number(getComputedStyle(body).width.replace('px', ''));
    let rectHeight = Number(getComputedStyle(body).height.replace('px', ''));
    let diam = Number(getComputedStyle(menu).width.replace('px', ''));
    let augmentBy;

    if (rectWidth > rectHeight) {
        augmentBy = (Math.sqrt(rectWidth**2 *2)) / diam;
    } else {
        augmentBy = (Math.sqrt(rectHeight**2 *2)) / diam;
    };
    augmentBy *= 2;
    menu.style.transition = 'background-color 0.4s, transform 0.8s';
    menu.style.backgroundColor = backColor;
    menu.style.transform = `scale(${augmentBy})`;

    setTimeout(() => {
        menu.style.transition = 'opacity 0.3s';
        body.style.backgroundColor = backColor;
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

// Menu items setting

const contactBtn = document.getElementById('m-contact');
const aboutBtn = document.getElementById('m-about');
const workBtn = document.getElementById('m-work');
const mainBtn = document.getElementById('to-main');

mainBtn.addEventListener('click', () => {
    contentCursor = 0;
    updateContent();
    body.style.backgroundColor = 'rgb(6, 6, 6)';
});

aboutBtn.addEventListener('click', () => {
    contentCursor = 2;
    updateContent();
});

