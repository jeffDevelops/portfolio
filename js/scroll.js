document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => console.log(window.scrollY));


  // init controller
  var controller = new ScrollMagic.Controller();

  // create a scene
  new ScrollMagic.Scene({
    offset: 130,     // start this scene after scrolling for 50px
    duration: 1460   // the scene should last for a scroll distance of 100px
  })
    .setPin("#specializations_card") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
});