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


    var loadBox = false;
  /*  $(".box-home").mouseover(function () {

            loadBox = true;
            var overBox = $(this).find(".over-box");
            var title = $(this).find("h2");
            if (overBox.css('display') == "none") {
                loadBox = true;
                overBox.slideToggle({
                    direction: "up"
                }, 100);
                title.animate({
                    'marginTop': '0px'
                }, 300);


            }


    });

    $(".over-box").mouseout(function () {
        var title = $(this).parent().find("h2");

        if ($(this).css('display') == "block") {
            title.animate({
                'marginTop': '100px'
            }, 300);
            $(this).slideToggle();

        }
        loadBox = false;
    }); */

});