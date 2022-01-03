$(document).ready(function(){

    // TOOLTIP =====================================
    $('[data-toggle="tooltip"]').tooltip();


    // OUR PORTFOLIO - ALBUM HOVER =============================================
    $('.portfolio .content').on('mouseenter', '.album-box', function(){
        let box_id = $(this).attr('id');  
        $('#'+box_id+' img').animate({marginTop: '-150px'});
    });
    $('.portfolio .content').on('mouseleave', '.album-box', function(){
        let box_id = $(this).attr('id');  
        $('#'+box_id+' img').animate({marginTop: '-0px'});
    });



    // SCROLL ==============================================================
    $(document).on('scroll', function(){
        if (($('#portfolio-chapter1 .title').inView('both') == true) || ($('#end-chapter1').inView('both') == true)){
            for (let i=1; i<5; i++)
                $('#bullet'+i).removeClass('bullet-active');
            $('#bullet1').addClass('bullet-active');
        }
        if (($('#portfolio-chapter2 .title').inView('both') == true) || ($('#end-chapter2').inView('both') == true)){
            for (let i=1; i<5; i++)
                $('#bullet'+i).removeClass('bullet-active');
            $('#bullet2').addClass('bullet-active');
        }
        if (($('#portfolio-chapter3 .title').inView('both') == true) || ($('#end-chapter3').inView('both') == true)){
            for (let i=1; i<5; i++)
                $('#bullet'+i).removeClass('bullet-active');
            $('#bullet3').addClass('bullet-active');
        }
        if (($('#portfolio-chapter4 .title').inView('both') == true) || ($('#end-chapter4').inView('both') == true)){
            for (let i=1; i<5; i++)
                $('#bullet'+i).removeClass('bullet-active');
            $('#bullet4').addClass('bullet-active');
        }
    });



    // BULLET CLICK =========================================================
    $('.portfolio .nav-bar').on('click', '.bullet', function(){
        let bullet = $(this).attr('id');

        for (let i=1; i<5; i++)
            $('#bullet'+i).removeClass('bullet-active');

        if (bullet == 'bullet1'){
            document.getElementById("portfolio-chapter1").scrollIntoView();
            $('#bullet1').addClass('bullet-active');
        }
        if (bullet == 'bullet2'){
            document.getElementById("portfolio-chapter2").scrollIntoView();
            $('#bullet2').addClass('bullet-active');
        }
        if (bullet == 'bullet3'){
            document.getElementById("portfolio-chapter3").scrollIntoView();
            $('#bullet3').addClass('bullet-active');
        }
        if (bullet == 'bullet4'){
            document.getElementById("portfolio-chapter4").scrollIntoView();
            $('#bullet4').addClass('bullet-active');
        }

    });
});


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