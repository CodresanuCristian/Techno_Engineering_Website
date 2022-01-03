$(document).ready(function(){

    $('.content-page').load('home');

    // ================ HEADER =====================================================
    // Toggle language 
    $('header').on('click','.dropdown-lang-title', function(){
        $('.dropdown-lang').slideToggle();
    });

    // Select language
    $('.dropdown-lang').on('click','p', function(){
        let lang_selected = $(this).attr('id');
        
        $('.dropdown-lang p').removeClass('lang-active');
        $('#'+lang_selected).addClass('lang-active');
        $('.mob-nav-lang li a').removeClass('mob-lang-active');
        if (lang_selected == 'en') $('#mobile-en').addClass('mob-lang-active');
        if (lang_selected == 'ro') $('#mobile-ro').addClass('mob-lang-active');
        if (lang_selected == 'es') $('#mobile-es').addClass('mob-lang-active');
    });






    // ================= NAVBAR ===================================================
    // Select pages
    $('.desktop-nav').on('click','ul li a', function(){
        let op_selected = $(this).attr('id');

        $('ul li a').removeClass('link-active');
        $('#'+op_selected).addClass('link-active');
        $('.mob-nav-options li a').removeClass('mob-link-active');
        if (op_selected == 'home')         $('#mob-home').addClass('mob-link-active');
        if (op_selected == 'about')        $('#mob-about').addClass('mob-link-active');
        if (op_selected == 'services')     $('#mob-services').addClass('mob-link-active');
        if (op_selected == 'portfolio')    $('#mob-portfolio').addClass('mob-link-active');
        if (op_selected == 'publications') $('#mob-publications').addClass('mob-link-active');
        if (op_selected == 'contact')      $('#mob-contact').addClass('mob-link-active');
        if (op_selected == 'careers')      $('#mob-careers').addClass('mob-link-active');

        $('html').animate({scrollTop:0});
        $('.content-page').fadeOut('fast', function(){
            $('.content-page').css({'opacity':'0'});
            $('.content-page').load(ChangePage(op_selected));
        }).fadeIn('fast', function(){
            // $('.submit-fail').css({'display':'none'});
            // $('.submit-success').css({'display':'none'});
            $('.content-page').animate({'opacity':'1'});
        });
    });

    // Animate desktop navbar when scroll
    $(document).on('scroll', function(){
        let scroll_val = $(window).scrollTop();
    
        if (scroll_val > 100){
            $('#animation-navbar-option').removeClass('lg-option'); 
            $('#animation-navbar-option').addClass('sm-option');
            $('#animation-navbar-brand').removeClass('lg-brand');
            $('#animation-navbar-brand').addClass('sm-brand');
            $('.desktop-nav').addClass('desktop-nav-dark');
        }
        else if ($('.dropdown-lang-title').inView('bottom') == true){
            $('#animation-navbar-option').removeClass('sm-option'); 
            $('#animation-navbar-option').addClass('lg-option');
            $('#animation-navbar-brand').removeClass('sm-brand'); 
            $('#animation-navbar-brand').addClass('lg-brand');
            $('.desktop-nav').removeClass('desktop-nav-dark');
        }
    });










    // ================ MOBILE NAVBAR ============================================
    // Brgr click -> toggle mobile navbar
    $('.mobile-navbar').on('click','.brgr-btn',function(){
        MobileNavbarToggle();
    });

    // Select pages
    $('.mobile-navbar').on('click','.mob-nav-options li a', function(){
        let op_selected = $(this).attr('id');

        $('.mob-nav-options li a').removeClass('mob-link-active');
        $('#'+op_selected).addClass('mob-link-active');
        $('.desktop-nav ul li a').removeClass('link-active');
        if (op_selected == 'mob-home')         $('#home').addClass('link-active');
        if (op_selected == 'mob-about')        $('#about').addClass('link-active');
        if (op_selected == 'mob-services')     $('#services').addClass('link-active');
        if (op_selected == 'mob-portfolio')    $('#portfolio').addClass('link-active');
        if (op_selected == 'mob-publications') $('#publications').addClass('link-active');
        if (op_selected == 'mob-contact')      $('#contact').addClass('link-active');
        if (op_selected == 'mob-careers')      $('#careers').addClass('link-active');


        $('html').animate({scrollTop:0});
        $('.content-page').fadeOut('fast', function(){
            $('.content-page').css({'opacity':'0'});
            $('.content-page').load(ChangePage(op_selected));
        }).fadeIn('fast', function(){
            // $('.submit-fail').css({'display':'none'});
            // $('.submit-success').css({'display':'none'});
            $('.content-page').animate({'opacity':'1'});
        });
        MobileNavbarToggle();
    });

    // Language select
    $('.mobile-navbar').on('click','.mob-nav-lang li a', function(){
        let lang_selected = $(this).attr('id');

        $('.mob-nav-lang li a').removeClass('mob-lang-active');
        $('#'+lang_selected).addClass('mob-lang-active');
        $('.dropdown-lang p').removeClass('lang-active');
        if (lang_selected == 'mobile-en') $('#en').addClass('lang-active');
        if (lang_selected == 'mobile-ro') $('#ro').addClass('lang-active');
        if (lang_selected == 'mobile-es') $('#es').addClass('lang-active');
    });
});






// ========================================== MY FUNCTIONS ===========================================

// OPEN/CLOSE MOBILE NAVBAR. ==============================================
function MobileNavbarToggle()
{
    $(".first-line").animate({})
    $(".second-line").css("transform","rotate(-40deg)"); 
    $(".third-line").css("transform","rotate(-45deg)"); 
    $(".icon").toggleClass("close");
    $(".mininavlist").slideToggle("350");
    $('.mobile-nav-list').slideToggle();
}



// CHANGE PAGES =============================================================
function ChangePage(page_id)
{
    let page_selected;

    if ((page_id == 'home')         || (page_id == 'mob-home'))         page_selected = 'home';
    if ((page_id == 'about')        || (page_id == 'mob-about'))        page_selected = 'about';
    if ((page_id == 'services')     || (page_id == 'mob-services'))     page_selected = 'services';
    if ((page_id == 'portfolio')    || (page_id == 'mob-portfolio'))    page_selected = 'portfolio';
    if ((page_id == 'publications') || (page_id == 'mob-publications')) page_selected = 'publications';
    if ((page_id == 'contact')      || (page_id == 'mob-contact'))      page_selected = 'contact';
    if ((page_id == 'careers')      || (page_id == 'mob-careers'))      page_selected = 'careers';

    return '/'+page_selected;
}



// RETURN true IF AN ELEMENT IS IN VIEWPORT ================================
$.fn.inView = function(inViewType){
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    switch(inViewType){
      case 'bottom':
        return ((bounds.bottom <= viewport.bottom) && (bounds.bottom >= viewport.top));
      case 'top':
        return ((bounds.top <= viewport.bottom) && (bounds.top >= viewport.top));
      case 'both':
        return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));         
      default:     
        return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));        
    }
};



// RETURN true IF FORM WAS SUBMITED
function Submited(url){
    let submited;

    $.ajax({
        type:'get',
        url:'/'+url,
        success: function(submit){
            alert(submit.response);
        }
    });
}
