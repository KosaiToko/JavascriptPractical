'use strict';
let elems = document.getElementsByTagName('input');
for (let i=0; i<elems.length; i++) {
    elems[i].addEventListener('blur', func);
}
function func() {
    if (this.dataset.length == this.value.length) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
}