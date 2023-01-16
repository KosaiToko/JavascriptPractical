'use strict';
let elems = document.querySelectorAll('p');
for (let i=0; i<elems.length; i++) {
    elems[i].addEventListener('click', func);
}
function func() {
    this.innerHTML = +this.innerHTML * +this.innerHTML
}