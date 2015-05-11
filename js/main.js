jQuery(document).ready(function ($) {

    WebFontConfig = {
        google: {families: ['Chivo:400,400italic,900:latin']}
    };
    (function () {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(".flip-container").addClass("hover");
            $(".front,.flip-container").css("height","30px");
            $("#nav-top").addClass("shadow-menu");
            $('#sub-menu').fadeIn(500);
        } else {



            $(".flip-container").removeClass("hover");
            $(".front,.flip-container").css("height","50px");
            $('#sub-menu').fadeOut(500);
            $("#nav-top").removeClass("shadow-menu");
        }
    });



    $(".delete-entity").click(function () {
        var button = $(this);
        $("button").attr("disabled", "disabled");
        $.ajax({
            type: "POST",
            url: $(this).attr('data-route'),
            success: function (response) {
                if (response.success == true) {
                    button.closest("tr").fadeOut();
                    showalert($("#response-div"), "Eliminato con successo!", "success");

                } else {
                    showalert($("#response-div"), "Errore nell'eliminazione", "error");
                }
                $("button").removeAttr("disabled");

            }
        });
    });


    $(".dropdown-toggle").click(function(){
       if($(this).find("i").hasClass("fa-bars")){
           $(this).find("i").switchClass("fa-bars","fa-arrow-left");
       }else{
           $(this).find("i").switchClass("fa-arrow-left","fa-bars");
       }
    });


});