function screenSizeDetection () {
    let screenWidth = window.innerWidth;
    if (screenWidth < 740) {
        return 'sm';
    } else if (screenWidth < 1024) {
        return 'md';
    } else {
        return 'lg';
    }
}

function responsive () {
    let listColumn;
    listColumn = document.querySelectorAll('[class*="none"]');
    if (listColumn.length > -1) {
        let arrClassName = [];
        for (let i = 0; i < listColumn.length; i++) {
            arrClassName = listColumn[i].className.split(' ');
            for (let j = 0; j < arrClassName.length; j++) {
                if (arrClassName[j].includes('none')) {
                    arrClassName[j] = arrClassName[j].replace('none', '')
                }
            }
            listColumn[i].className = arrClassName.join(' ');
        }
    }
    if (screenSizeDetection () == 'sm') {
        listColumn = document.querySelectorAll('[class*="col-md-"]');
        if (listColumn.length > -1) {
            let arrClassName = [];
            for (let i = 0; i < listColumn.length; i++) {
                arrClassName = listColumn[i].className.split(' ');
                for (let j = 0; j < arrClassName.length; j++) {
                    if (arrClassName[j].includes('col-md-')) {
                        arrClassName[j] += 'none';
                    }
                }
                listColumn[i].className = arrClassName.join(' ');
            }
        }
        listColumn = document.querySelectorAll('[class*="col-lg-"]');
        if (listColumn.length > -1) {
            let arrClassName = [];
            for (let i = 0; i < listColumn.length; i++) {
                arrClassName = listColumn[i].className.split(' ');
                for (let j = 0; j < arrClassName.length; j++) {
                    if (arrClassName[j].includes('col-lg-')) {
                        arrClassName[j] += 'none';
                    }
                }
                listColumn[i].className = arrClassName.join(' ');
            }
        }
    } else if (screenSizeDetection () == 'md') {
        listColumn = document.querySelectorAll('[class*="col-sm-"]');
        if (listColumn.length > -1) {
            let arrClassName = [];
            for (let i = 0; i < listColumn.length; i++) {
                arrClassName = listColumn[i].className.split(' ');
                for (let j = 0; j < arrClassName.length; j++) {
                    if (arrClassName[j].includes('col-sm-')) {
                        arrClassName[j] += 'none';
                    }
                }
                listColumn[i].className = arrClassName.join(' ');
            }
        }
        listColumn = document.querySelectorAll('[class*="col-lg-"]');
        if (listColumn.length > -1) {
            let arrClassName = [];
            for (let i = 0; i < listColumn.length; i++) {
                arrClassName = listColumn[i].className.split(' ');
                for (let j = 0; j < arrClassName.length; j++) {
                    if (arrClassName[j].includes('col-lg-')) {
                        arrClassName[j] += 'none';
                    }
                }
                listColumn[i].className = arrClassName.join(' ');
            }
        }
    } else {
        listColumn = document.querySelectorAll('[class*="col-sm-"]');
        if (listColumn.length > -1) {
            let arrClassName = [];
            for (let i = 0; i < listColumn.length; i++) {
                arrClassName = listColumn[i].className.split(' ');
                for (let j = 0; j < arrClassName.length; j++) {
                    if (arrClassName[j].includes('col-sm-')) {
                        arrClassName[j] += 'none';
                    }
                }
                listColumn[i].className = arrClassName.join(' ');
            }
        }
        listColumn = document.querySelectorAll('[class*="col-md-"]');
        if (listColumn.length > -1) {
            let arrClassName = [];
            for (let i = 0; i < listColumn.length; i++) {
                arrClassName = listColumn[i].className.split(' ');
                for (let j = 0; j < arrClassName.length; j++) {
                    if (arrClassName[j].includes('col-md-')) {
                        arrClassName[j] += 'none';
                    }
                }
                listColumn[i].className = arrClassName.join(' ');
            }
        }
    }
}

window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);