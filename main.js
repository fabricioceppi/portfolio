// Dynamic portfolio main functionalities

// Menu Toggle elements
const body = document.querySelector('body');
const menu = document.getElementById('menu-button');

// create an array with all the dynamic content blocks
const dynamicContent = document.querySelectorAll('.dynamic');

// a content counter beginning in 0
let contentCursor = 0;

// display menu when menu with animations
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

// updateContent main function
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
const contactForm = document.getElementById('contact-form');
const closeBtn = document.getElementById('close');
const contactBtn2 = document.getElementById('contact2');

mainBtn.addEventListener('click', () => {
    contentCursor = 0;
    updateContent();
    body.style.backgroundColor = 'rgb(6, 6, 6)';
});

aboutBtn.addEventListener('click', () => {
    contentCursor = 2;
    updateContent();
});

workBtn.addEventListener('click', () => {
    contentCursor = 3;
    updateContent();
});

contactBtn.addEventListener('click', () => {
    contactForm.style.zIndex = '3';
    contactForm.style.opacity = '1';
});

closeBtn.addEventListener('click', () => {
    contactForm.style.zIndex = '-1';
    contactForm.style.opacity = '0';
});

contactBtn2.addEventListener('click', () => {
    contactForm.style.zIndex = '3';
    contactForm.style.opacity = '1';
});

// work items show and hide details when hover (desktop only)
const kodak = document.getElementById('kodak');
const macula = document.getElementById('macula');
const kodakArray = document.querySelectorAll('.kodak');
const maculaArray = document.querySelectorAll('.macula');

function showDetails(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.add('show');
    }
}

function hideDetails(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('show');
    }
}

kodak.onmouseover = () => {showDetails(kodakArray)};
kodak.onmouseleave = () => {hideDetails(kodakArray)};

macula.onmouseover = () => {showDetails(maculaArray)};
macula.onmouseleave = () => {hideDetails(maculaArray)};

// Form submition actions

const form = document.querySelector("form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "There it goes! I will get back to you shortly";
      form.reset();
      setTimeout(() => {
        status.innerHTML = '';
      }, 2000);
    })
    .catch((error) => {
      status.innerHTML = "There was a problem with your data. Please verify it or try it later";
    });
}
form.addEventListener("submit", handleSubmit);

// fixing mobile relative height problems

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// fix when resizing
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

