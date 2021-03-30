

$(function () {

    $(window).scroll(function () { 
        if($(window).scrollTop() > 50)
        {
            $("#nav").css("top","0px");
            $("#nav").css("background-color","rgba(255,255,255,1)");
             

        }
        else{
            $("#nav").css("top","98px");
            $("#nav").css("background-color","rgba(255,255,255,0.8)");

        }
    });


     // Select all links with hashes
     $('nav a[href*="#"] , #getStarted a[href*="#"], footer a[href*="#home"]')
     // Remove links that don't actually link to anything
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function (event) {

         // On-page links
         if (
             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
             &&
             location.hostname == this.hostname
         ) {
             // Figure out element to scroll to
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             // Does a scroll target exist?
             if (target.length) {
                 // Only prevent default if animation is actually gonna happen
                 event.preventDefault();
                 $('html, body').animate({
                     scrollTop: target.offset().top - 50
                 }, 1000);
             }
         }
     });
     //sidebar
    // width of sidebar
    let sidebarWidth = $("#sidebar").innerWidth();

    // close the sidebar
    $(".sidebar-container").css("right", `-${sidebarWidth}px`);
    $(".setting").css("right", `-${sidebarWidth}px`);

    // when sidebar cliked
    $('.setting').click(function () {


        let sidebarrightProperty = $(".sidebar-container").css("right");

        if (sidebarrightProperty == "0px") {

            // if sidebar menu opend then close 
            $(".sidebar-container").animate({ right: `-${sidebarWidth}px` }, 500);
        }
        else {
            // if close then open it 
            $(".sidebar-container").animate({ right: `0px` }, 500);

        }

    });

    //  $(".logo-card").fadeOut(1000);
    //  $(".logo-card").fadeIn(500);
    //  $(".logo-card").css("opacity","1");
    //  $(".logo-card").css("opacity","0");
    //  $(".logo-card").hover(function () {
    //          // over
             
             
    //      }, function () {
    //          // out
            
    //      }
    //  );;


});

