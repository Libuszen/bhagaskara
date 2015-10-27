$(function(){

    var menu = $("#menu");
    var lastPositionTop = 0;
    var menuHeight = menu.height();
    var sections = $("section");
    var links = $ (".nav a")


    $(window).scroll(function(event){
        if( menu.hasClass("sticky")=== false &&
            $(this).scrollTop() > menu.offset().top){
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
        }
        if(menu.hasClass("sticky") &&
            $(this).scrollTop() < lastPositionTop) {
            menu.removeClass("sticky");
        }
    });

    $(links).click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
       $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 2000);
    });

    var categories = $(".categories")
    var windowWidth = $(window).width();
    var rwdMenu = $(".rwdMenu")
    if(windowWidth > 320 ) {
        categories.show();
        rwdMenu.hide();
    }
    else {
        categories.hide();
        rwdMenu.show();
    }


    var rwdMenu = $(".rwdMenu p")
    rwdMenu.on("click", function(event){
        if(categories.is(":visible")){
            categories.hide();
        }
        else{
            categories.show();

        };
    });

