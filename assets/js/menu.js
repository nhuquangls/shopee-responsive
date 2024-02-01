let fixPosition = 0;
let scale = 0;
let maxCount = 0;
let items = document.getElementsByClassName("items");

function moveRight () {
    if (maxCount == 0) return;
    fixPosition -= scale * 100;
    for (let i = 0; i < items.length; i++) {
        items[i].style.transform = `translateX(${fixPosition}%)`;
    }
    maxCount --;
}
function moveLeft () {
    if (fixPosition > -1) return;
    fixPosition += scale * 100;
    for (let i = 0; i < items.length; i++) {
        items[i].style.transform = `translateX(${fixPosition}%)`;
    }
    maxCount ++;
}

function findScale () {
    fixPosition = 0;
    for (let i = 0; i < items.length; i++) {
        items[i].style.transform = 'translateX(0%)';
    }
    let screenWidth = window.innerWidth;
    if (screenWidth > 1023) {
        scale = 10;
    } else {
        scale = 5;
    }
    maxCount = Math.floor((items.length - 1) / scale);
}
window.addEventListener('resize', findScale);
window.addEventListener('load', findScale);
