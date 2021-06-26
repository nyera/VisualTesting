$(document).ready(function () {
    var canSee = true;
    var scroll_pos = 0;
    $("#intro-background").delay(0).show("puff", { percent: 300 }, 1500, function () {
        $(".nav-top").delay(0).fadeIn(1000);


        $(document).scroll(function () {
            scroll_pos = $(this).scrollTop();
            var width = $(window).width();


            if (width >= 400) {

                if (scroll_pos > 10 && canSee) {
                    $("#logo").animate({ left: "118%" }, 1500);
                    $("#intro-background").animate({ width: "110%" }, 1400);
                    $(".bio-1").delay(000).fadeIn(1500);
                    $(".bio-2").delay(250).fadeIn(1500);
                    $(".bio-3").delay(750).fadeIn(1500);
                    $(".bio-4").delay(2000).fadeIn(1000);
                    

                    $("#logo").animate({ left: "119%" }, 3000, function () {
                        $("#logo").animate({ left: "120%" }, 50);
                    });

                    canSee = false;
                }

                else if (scroll_pos <= 10 && !canSee) {

                    $("#logo").animate({ left: "119%" }, 50, function () {
                        $(".bio-1").hide(350);
                        $(".bio-2").hide(350);
                        $(".bio-3").hide(350);
                        $(".bio-4").hide(350);

                // To be fair, can definitely improve on the hide motion

                        $("#logo").animate({ left: "118%" }, 50, function () {
                            $("#logo").animate({ left: "50%" }, 1600);
                            $("#intro-background").animate({ width: "50%" }, 1400);

                        });
                    });
                    canSee = true;
                }
            }
        });
    });
});