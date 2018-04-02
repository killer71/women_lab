var options = {
    offset: 700
};

var header = new Headhesive('.top_line', options);

// function getValue() {
//     var text = document.getElementsByTagName("input")[6];
//
//     document.getElementById("show-value").innerHTML = text.value;
// }

$(document).ready(function() {

    // summa in #hidden_form
    $("#value").change(function(){
        var text;
        var value = $("#value").val();

        if (value.length) {
            text = value + " руб.";
        } else {
            text = "";
        }

        $("#show-value").html(text);
    })

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main_mnu").slideToggle();
        return false;
    });

    $(".popup_c").magnificPopup();

    new WOW().init();

    $(".main_mnu a, .mouse_wrap a, .main_mnu_bottom a").mPageScroll2id();

    //E-mail Ajax Send
    $("#hidden_form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо за подписку!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $("#call_back").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Мы вам перезвоним!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $("#podpisat").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Спасибо за подписку!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    //fancybox options
    $.fancybox.defaults.animationEffect = "fade";

});