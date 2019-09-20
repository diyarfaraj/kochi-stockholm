const nav = document.querySelector('.whole-nav');
const topOfNav = nav.offsetTop;

function fixNav() {
    
    if(window.scrollY >= 615){
        nav.classList.add('whole-nav');
    } else {
        nav.classList.remove('whole-nav');
    }
}

window.addEventListener('scroll', fixNav); 


$(document).ready(function() {

    // animate on scroll 
     $('.js--wp-1').waypoint(function(direction) {
         console.log('helliooo')
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
 

    //menu fade
   /*  $(window).scroll(function () {
        if ($(this).scrollDown() > 100) {
            console.log('10000000')
            $('.whole-nav').animate({opacity: 0.5}, 1000);   
            } 
        if ($(this).scrollTop() > 300) {
            console.log('30000000')

            $('.whole-nav').animate({opacity: 1}, 1000);
            }
     });
     */
});
 