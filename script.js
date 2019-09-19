const nav = document.querySelector('.whole-nav');
const topOfNav = nav.offsetTop;

function fixNav() {
    console.log('hellooo');
    if(window.scrollY >= 615){
        nav.classList.add('whole-nav');
    } else {
        nav.classList.remove('whole-nav');
    }
}

window.addEventListener('scroll', fixNav);

$(document).ready(function() {

    console.log("JQUERY");
})
