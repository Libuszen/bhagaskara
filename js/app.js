$(function(){

    var menu = $("#menu");
    var lastPositionTop = 0;
    var menuHeight = menu.height();
    var sections = $("section");
    var links = $ (".nav a")


    $(window).scroll(function(event){
        if( menu.hasClass("sticky")=== false &&
            $(this).scrollTop() > menu.offset().top {
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



        var leftArrow = $("#left");
        var rightArrow = $("#right");

        var person1 = $(".emplyee1");
        var person2 = $(".emplyee2");
        var person3 = $(".emplyee3");

        var skills1 = $(".skills1");
        var skills2 = $(".skills2");
        var skills3 = $(".skills3");

        var allPersons = $("#carousel");
    var h5 =

        rightArrow.on("click", function(event){
console.log("right");
            event.preventDefault();
            var people = $(".person");

            people.eq(2).clone(true).prependTo(allPersons);
            people.eq(2).remove();

            if(people.eq(0).hasClass("emplyee1")) {
                skills2.hide(500);
                skills3.hide(500);
                skills1.show(500);
            } else if (people.eq(0).hasClass("emplyee2")) {
                skills1.hide(500);
                skills3.hide(500);
                skills2.show(500);
            } else if (people.eq(0).hasClass("emplyee3")) {
                skills1.hide(500);
                skills2.hide(500);
                skills3.show(500);
            }

        });

        leftArrow.on("click", function(event){
            event.preventDefault();
            var people = $(".person");

            people.eq(0).clone(true).appendTo(allPersons);
            people.eq(0).remove();

            if(people.eq(2).hasClass("emplyee1")) {
                skills2.hide(700);
                skills3.hide(700);
                skills1.show(700);
            } else if (people.eq(2).hasClass("emplyee2")) {
                skills1.hide(700);
                skills3.hide(700);
                skills2.show(700);
            } else if (people.eq(2).hasClass("emplyee3")) {
                skills1.hide(700);
                skills2.hide(700);
                skills3.show(700);
            }

        });




    $('.image').click(function(){
        console.log(this)
        var elem = $(this).children("img")[0]

        var  data = $(elem).data('large')
        var img = "<img src='"+ data + "'>"


        if ($('#lightbox').length > 0) {
            $('#content').html("<img src='"+ data + "'>");
            $('#lightbox').show();
        }
        else {
            var lightbox =
                '<div id="lightbox">' +
                '<p>Click to close</p>' +
                '<div id="content">' +
                "<img src='"+ data + "'>" +
                '</div>' +
                '</div>';
            $('body').append(lightbox);
        }
        $('#lightbox').click(function() {
            $('#lightbox').hide();
        });

    });


    var buttonWeb = $('input[value="web"]');
    var buttonAll = $('input[value="all"]');
    var buttonApps = $('input[value="apps"]');
    var buttonIcons = $('input[value="icons"]');
    var buttonWatchMore = $('input[value="Watch more"]');
    var example = $(".example");




    buttonWeb.on("click", function(event){
        example.css("display", "none");
        $(".ui").css("display", "inline-block");
        buttonWatchMore.addClass("non-visible");
    });

    buttonApps.on("click", function(event){
        example.css("display", "none");
        $(".apps").css("display", "inline-block");
        buttonWatchMore.css("display", "none");
    });

    buttonIcons.on("click", function(event){
        example.css("display", "none");
        $(".icons").css("display", "inline-block");
        buttonWatchMore.css("display", "none");

    });

    buttonAll.on("click", function(event){
        example.css("display", "inline-block");
        buttonWatchMore.css("display", "inline-block");
    });




});



