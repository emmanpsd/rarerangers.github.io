$(document).on('ready',function(){
    "use strict";

    
    /* =============== Ajax Contact Form ===================== */
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
        $('#message').hide();
            $('#submit')
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');
        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val(),
            verify: $('#verify').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );
        });
        return false;
    });  

    /* Full Screen Menu */
    $('#open-full-screen').on('click', function(){
        $('header').toggleClass('active-full-menu');
        $('.full-screen-menu').fadeToggle();
        $('html').toggleClass('no-scoll');
        $(this).toggleClass('open');
        $('.full-screen-menu > ul > li.menu-item-has-children > ul').slideUp();
        $('.full-screen-menu > ul > li.menu-item-has-children').removeClass('active');
    });

    /* Minimal Menu Dropdown */
    $("header").on("click",function(e){
        e.stopPropagation();
    });
    $(".full-screen-menu > ul > li.menu-item-has-children > a").on("click",function(){
        $(this).parent().siblings().children("ul").slideUp();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().children("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    }); 

    /* Open Fixed Menu */
    $('#open-fixed-menu').on('click', function(){
        $(this).toggleClass('open');
        $('header.minimal-header.still').toggleClass('slidein');
        
    });

    /* contact btn */
    $('.contact-btn').on('click', function(){
        $(this).addClass('active');
        $('html').addClass('no-scoll');
        $('.contact-popup-sec').fadeIn();
    });
    
    /* contact close */
    $('.close-contact-popup').on('click', function(){
        $('.contact-btn').removeClass('active');
        $('html').removeClass('no-scoll');      
        $('.contact-popup-sec').fadeOut();
    });

    /* Scroll top */
    $(".scroll-top").on('click', function(){
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    /* Open Minimal Screen */
    $('#open-minimal-screen').on('click', function(){
        $(this).toggleClass('open');
        $('header').toggleClass('active');
    });


    /* Minimal Menu Dropdown */
    $("header").on("click",function(e){
        e.stopPropagation();
    });
    $(".minimal-menu nav > ul > li.menu-item-has-children > a").on("click",function(){
        $(this).parent().siblings().children("ul").slideUp();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().children("ul").slideToggle();
        $(this).parent().toggleClass("active");
        return false;
    }); 

    $('.page-loading > span').on('click', function(){
        $(this).parent().fadeOut();
    });

});



$(window).on('load',function(){
    "use strict";

    $('.page-loading').fadeOut();
    
    var full_height = $(window).height();
    $(".full-portfolio-images li > div, .full-portfolio-images").css({"height":full_height});

});