$(document).ready(function(){
    $('.portfolio .portfolio-nav').on('click','ul li a', function(){
        let nav_link_id = $(this).attr('id');
    
        $('.portfolio .portfolio-nav ul li a').removeClass('portfolio-active');
        $("#"+nav_link_id).addClass('portfolio-active');
    
        let img_path = '';
        let text_path = '';
        let album_id = '';
        let box_numb = 0;
        if (nav_link_id == 'portfolio1') {img_path = '1'; text_path = 'National roads';     box_numb = 20; album_id = '#national';}
        if (nav_link_id == 'portfolio2') {img_path = '2'; text_path = 'Railways and metro'; box_numb = 10; album_id = '#railways';}
        if (nav_link_id == 'portfolio3') {img_path = '3'; text_path = 'WWTP';               box_numb = 5;  album_id = '#wwtp';}
        if (nav_link_id == 'portfolio4') {img_path = '4'; text_path = 'Miscellaneous';      box_numb = 40; album_id = '#miscel';}

        $('.portfolio .album-wrap').fadeOut('slow', function(){
            $('.portfolio #national').css({'display':'none'});
            $('.portfolio #railways').css({'display':'none'});
            $('.portfolio #wwtp').css({'display':'none'});
            $('.portfolio #miscel').css({'display':'none'});

            if (album_id == '#national') $('.portfolio #national').css({'display':'flex'});
            if (album_id == '#railways') $('.portfolio #railways').css({'display':'flex'});
            if (album_id == '#wwtp')     $('.portfolio #wwtp').css({'display':'flex'});
            if (album_id == '#miscel')   $('.portfolio #miscel').css({'display':'flex'});

            for(let i=1; i<=box_numb; i++){
                $('#album-pic'+i+' img').attr('src','/img/'+img_path+'.jpg');
                $('#album-text'+i).html(text_path);
            }
        }).fadeIn('slow');
    });
    



    // DEFAULT NATIONAL ROADS AND MOTORWAY
    for(let i=1; i<=20; i++){
        $('#album-pic'+i+' img').attr('src','/img/'+1+'.jpg');
        $('#album-text'+i).html('National roads');
    }


    
    // BOX HOVER 
    $('.portfolio .album').on('mouseenter', '.album-box', function(){
        let box_id = $(this).attr('id');  
        $('#'+box_id+' img').animate({marginTop: '-150px'});
    });
    $('.portfolio .album').on('mouseleave', '.album-box', function(){
        let box_id = $(this).attr('id');  
        $('#'+box_id+' img').animate({marginTop: '-0px'});
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

