const nav = document.querySelector(".whole-nav");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= 615) {
    nav.classList.add("whole-nav");
  } else {
    nav.classList.remove("whole-nav");
  }
}

window.addEventListener("scroll", fixNav);

$(document).ready(function() {
  // animate on scroll Section features
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  // animate on scroll app section
  $(".js--wp-2").waypoint(
    function(direction) {
      console.log("helliooo");
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  // animate on scroll
  $(".js--wp-3").waypoint(
    function(direction) {
      console.log("helliooo");
      $(".js--wp-3").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );
  // animate on scroll
  $(".js--wp-4").waypoint(
    function(direction) {
      console.log("helliooo");
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  /* MObile navigation */

  $('.js--nav-icon').click(function() {
    $('.main-nav').slideToggle(500);
    //add   <ion-icon name="close"></ion-icon>

  })
});
