'use strict';
let elems = document.getElementsByTagName('input');
for (let i=0; i<elems.length; i++) {
    elems[i].addEventListener('click', func);
}
function func() {
    alert(this.value);
    this.removeEventListener('click', func);
}