$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 0,
        duration: "50%"
    })
    .setPin("#intro")
    .addTo(controller);

    var slideParallaxScene = new ScrollMagic.Scene ({
        triggerElement: "#intro-parallax",
        triggerHook: 1,
        duration: "170%"
    })
    .setTween(TweenMax.from('.image-1', 1, {y:"-40%", ease: Power0.easeNone}))
    .addTo(controller);

});