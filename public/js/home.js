$(document).ready(function(){
    // OUR SERVICES - CAROUSEL =================================================================
    $('#recipeCarousel').carousel({
        interval: 5000
    });
    $('.carousel .carousel-item').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
        next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            
            next.children(':first-child').clone().appendTo($(this));
        }
    });






    // OUR PORTFOLIO - NAVBAR ===================================================================
    $('.home-portfolio-nav').on('click','ul li a', function(){
        let nav_link_id = $(this).attr('id');

        $('.home-portfolio-nav ul li a').removeClass('home-portfolio-active');
        $("#"+nav_link_id).addClass('home-portfolio-active');


        let img_path = '';
        let text_path = '';
        if (nav_link_id == 'home-portfolio-op1') {img_path = '1'; text_path = 'National roads';}
        if (nav_link_id == 'home-portfolio-op2') {img_path = '2'; text_path = 'Railways and metro';}
        if (nav_link_id == 'home-portfolio-op3') {img_path = '3'; text_path = 'WWTP';}
        if (nav_link_id == 'home-portfolio-op4') {img_path = '4'; text_path = 'Miscellaneous';}

        $('.album').fadeOut('slow', function(){
            for(let i=1; i<=6; i++){
                $('#album-box'+i+' img').attr('src','/img/'+img_path+'.jpg');
                $('#album-box-text'+i).html(text_path);
            }
        }).fadeIn('slow');
    });
    // DEFAULT NATIONAL ROADS AND MOTORWAY
    for(let i=1; i<=6; i++){
        $('#album-box'+i+' img').attr('src','/img/'+1+'.jpg');
        $('#album-box-text'+i).html('National roads');
    }
    // OUR PORTFOLIO - ALBUM HOVER 
    $('.home-portfolio .album').on('mouseenter', '.album-box', function(){
        let box_id = $(this).attr('id');  
        $('#'+box_id+' img').animate({marginTop: '-150px'});
    });
    $('.home-portfolio .album').on('mouseleave', '.album-box', function(){
        let box_id = $(this).attr('id');  
        $('#'+box_id+' img').animate({marginTop: '-0px'});
    });





    // SUBSCRIBE - VALIDATE ===============================================
    $('.home-subscribe').on('click', '#subscribe-btn', function(){
        if (ValidateEmail($('#subscribe-field').val())){
            $.ajax({
                type:'GET',
                url:'/subscribe',
                data: {subscribe: $('#subscribe-field').val()},
                success: function(){
                    $('.submit-fail').slideUp('fast');
                    $('.submit-success').slideDown('fast');
                }
            });
        }
        else{
            $('.submit-success').slideUp('fast');
            $('.submit-fail').slideDown('fast');
        }
        $('#subscribe-field').val('');

        function ValidateEmail(email) {
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    });




    // SHORT LINKS ===============================================================================
    // ABOUT US BUTTON ============================================
    $('.home-about').on('click','#home-about-btn',function(){
        $('ul li a').removeClass('link-active');
        $('#about').addClass('link-active');
        $('.mob-nav-options li a').removeClass('mob-link-active');
        $('#mob-about').addClass('mob-link-active');
        $('.content-page').load('about');
    });
    // OUR SERVICES BUTTON ============================================
    $('.home-services').on('click','#home-services-btn',function(){
        $('ul li a').removeClass('link-active');
        $('#services').addClass('link-active');
        $('.mob-nav-options li a').removeClass('mob-link-active');
        $('#mob-services').addClass('mob-link-active');
        $('.content-page').load('services');
    });
    // PORTFOLIO BUTTON ============================================
    $('.home-portfolio').on('click','#home-portfolio-btn',function(){
        $('ul li a').removeClass('link-active');
        $('#portfolio').addClass('link-active');
        $('.mob-nav-options li a').removeClass('mob-link-active');
        $('#mob-portfolio').addClass('mob-link-active');
        $('.content-page').load('portfolio');
    });
});