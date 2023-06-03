// JavaScript Document

// Cufon fonts replace

Cufon.replace('.top-block a.logo', {
    fontFamily: 'Yanone Kaffeesatz',
    color: "-linear-gradient('#79c113', '#497821')",
    textShadow: '3px 3px 0px #000000'
});

Cufon.replace('.bottom-block h1,.bottom-block h5', {
    fontFamily: 'Yanone Kaffeesatz',
    color: "-linear-gradient('#ffffff', '#a2a2a2')",
    textShadow: '3px 3px 0px #000000'
});

$(document).ready(function() {

    // Start page						   

    $(".energy").delay(500).animate({
        width: "100%"
    },
    {
        duration: 1500,
        specialEasing: {
            width: 'easeOutExpo'
        },
        complete: function() {
            $('a.open img').animate({
                opacity: 1
            },
            100).flash();
        }

    });

    $(".bg-e-button").delay(700).animate({
        opacity: 1
    },
    150);

    // Open Personal vCard

    $(".open").click(function() {
        $(".center-block").fadeIn(1000);
        $(".bottom-block h5").delay(700).animate({
            opacity: 1
        },
        150);
        $(".container").animate({
            marginTop: "-220px"
        },
        {
            duration: 2000,
            specialEasing: {
                marginTop: 'easeOutExpo'
            }
        });

        $("a.open,.energy,.bg-e-button,.bg-button").fadeOut(300);
        $('a.open img').remove();

        $('.data li.search').flash().typewriter();

        $(".scanner-line").delay(1000).animate({
            top: "110px"
        },
        {
            duration: 2500,
            specialEasing: {
                width: 'easeOutExpo'
            },
            complete: function() {
                $(this).remove();

                $('.data li.search').flash().stop(true).fadeOut(500);

                for (var i = 1; i <= $('.search-d').length; i++) {
                    $('.search-d').eq(i - 1).delay(500).delay((i - 1) * 500).fadeIn(500);
                };

                setTimeout(function() {

                    $(".container").animate({
                        marginTop: "-355px"
                    },
                    {
                        duration: 2000,
                        specialEasing: {
                            marginTop: 'easeOutExpo'
                        }
                    });

                    $(".scanner").hide();
                    $(".main").show();
                    $(".load").fadeTo(50, 0.3).fadeIn(2500);

                    $(".shut-left,.shut-right").delay(1500).animate({
                        width: "0px"
                    },
                    {
                        duration: 3500,
                        specialEasing: {
                            width: 'easeOutExpo'
                        },
                        complete: function() {
                            $(this).remove();
                            $(".load").fadeOut(1000);
                        }
                    });

                    setTimeout(function() {

                        $(".page").fadeIn(500,
                        function() {

                            $(".box-content,.box-content-c").delay(300).slideDown(1000,
                            function() {

                                $('.box-content,.box-content-c').jScrollPane(

                                {
                                    verticalDragMinHeight: 103,
                                    verticalDragMaxHeight: 103
                                });

                            });

                        });
                    },
                    1500);

                },
                2500);

            }

        });

        return false;
    });

    // Page open / close

    var pagecont = $('div.cont div[id]');
    pagecont.hide().filter(':first').slideDown(1000);

    $('ul#menu li a').click(function() {
        pagecont.hide();
        pagecont.filter(this.hash).slideDown(1000);

        $('ul#menu li a').removeClass('selected');
        $(this).addClass('selected');
        $('.box-content,.box-content-c').jScrollPane(

        {
            verticalDragMinHeight: 103,
            verticalDragMaxHeight: 103
        }

        );
        return false;
    }).filter(':first').click();

    // Skills setting

    $('a.skill-start').click(function() {
        setTimeout(function() {

            $(".pr1").progression({
                Current: 88,
                // Change Your percent skill
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });

            $(".pr2").progression({
                Current: 75,
                // Change Your percent skill
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });

            $(".pr3").progression({
                Current: 70,
                // Change Your percent skill
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });

            $(".pr4").progression({
                Current: 65,
                // Change Your percent skill
                Easing: 'easeOutExpo',
                aBackgroundImg: 'images/progress.png'
            });

        },
        700);
    });

    // Portfolio page

    $("a[rel^='prettyPhoto']").prettyPhoto();
    $('.gallery').hover(function() {
        $(this).find('.des').css({
            color: '#79c113'
        });
        $(this).find('.block-zoom').slideToggle(900);
        $(this).find('.zoom').animate({
            left: "+=70px"
        },
        {
            duration: 700,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });

        $(this).find('.link').animate({
            right: "+=70px"
        },
        {
            duration: 700,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });

    },
    function() {
        $(this).find('.des').css({
            color: '#518e2e'
        });
        $(this).find('.block-zoom').slideToggle(500);
        $(this).find('.zoom').animate({
            left: "0px"
        },
        {
            duration: 300,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });

        $(this).find('.link').animate({
            right: "0px"
        },
        {
            duration: 300,
            specialEasing: {
                width: 'easeOutExpo'
            }
        });

        return false;
    });

    // Contact page

    $('#send').formValidator({
        scope: '#contactus'
    });

    var options = {

        beforeSubmit: function() {
            $('.sending').show();

        },
        success: function() {
            $('.sending').hide();
            $('.contactusb form').hide();
            $(".mess").show().html('<h4>Thanks !</h4><h4>Your message has been sent.</h4>');// Change Your message post send
            $('.mess').delay(3000).fadeOut(function() {

                $('#contactus').clearForm();
                $('.contactusb form').delay(3500).show();

            });
        },
        url: './php/contact.php'
    };

    $('#contactus').submit(function() {
        $(this).ajaxSubmit(options);
        return false;
    });

});

(function(e) {
    e.fn.flash = function(f) {
        return this.each(function() {
            var g = e.extend({},
            e.fn.flash.defaults, f),
            j = g.count,
            i = e(this);
            function h() {--j;
                i.fadeOut(g.speed,
                function() {
                    i.fadeIn(g.speed,
                    function() {
                        j ? h() : g.callback()
                    })
                })
            }
            h()
        })
    };
    e.fn.flash.defaults = {
        count: 7000,
        speed: 700,
        callback: function() {
            return false
        }
    }
})(jQuery);

jQuery.fn.progression.defaults.Current = 0;
jQuery.fn.progression.defaults.Background = '';
jQuery.fn.progression.defaults.aBackground = '';
jQuery.fn.progression.defaults.TextColor = '';
jQuery.fn.progression.defaults.aTextColor = '';