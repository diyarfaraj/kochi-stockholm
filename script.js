const nav = document.querySelector('.whole-nav');
const topOfNav = nav.offsetTop;

function fixNav() {
    if(window.scrollY >= 599){
        nav.classList.add('whole-nav');
    } else {
        nav.classList.remove('sticky');
    }
}

window.addEventListener('scroll', fixNav);
