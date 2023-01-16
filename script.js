'use strict';
let elems = document.getElementsByTagName('input');
let tag = document.getElementById('test');
for (let i=0; i<elems.length; i++) {
    elems[i].addEventListener('blur', func);
}
function func() {
    tag.innerHTML = this.value;
}
