$(document).ready(function(){
        // MY CAROUSEL ========================================
    $('#autoWidth').lightSlider({
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cS-hidden');
        }
    });




    // OUR PORTFOLIO - NAVBAR ===================================================================
    $('.home-portfolio-nav').on('tap','ul li a', function(){
        alert('da');
    });
    $('.home-portfolio-nav').on('click','ul li a', function(){
        let nav_link_id = $(this).attr('id');

        $('.home-portfolio-nav ul li a').removeClass('home-portfolio-active');
        $("#"+nav_link_id).addClass('home-portfolio-active');


        var img_path = '';
        var text_path = '';
        if (nav_link_id == 'home-portfolio-op1') {img_path = '/national/nat';         text_path = 1;}
        if (nav_link_id == 'home-portfolio-op2') {img_path = '/railways/rail';        text_path = 2;}
        if (nav_link_id == 'home-portfolio-op3') {img_path = '/wwtp/wwtp';            text_path = 3;}
        if (nav_link_id == 'home-portfolio-op4') {img_path = '/miscellaneous/miscel'; text_path = 4;}

        $('.home-portfolio .album').fadeOut('slow', function(){
            for(let i=1; i<=6; i++){
                $('.home-portfolio #album-box'+i+' img').attr('src','/img/'+img_path+i+'.jpg');
                $('.home-portfolio #album-box-text'+i).html(GetText(i, text_path));
            }
        }).fadeIn('slow');
    });
    
    // DEFAULT NATIONAL ROADS AND MOTORWAY
    for(let i=1; i<=6; i++){
        $('.home-portfolio #album-box'+i+' img').attr('src','/img/national/nat'+i+'.jpg');
        $('.home-portfolio #album-box-text'+i).html(GetText(i,1));
    }
    // OUR PORTFOLIO - ALBUM HOVER 
    $('.home-portfolio .album').on('mouseenter', '.album-box', function(){
        let box_id = $(this).attr('id');  
        $('#'+box_id+' img').animate({marginTop: '-250px'});
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
        $('html').animate({scrollTop:0});
        $('.content-page').load('about');
    });
    // OUR SERVICES BUTTON ============================================
    $('.carousel').on('click','#home-services-btn',function(){
        $('ul li a').removeClass('link-active');
        $('#services').addClass('link-active');
        $('.mob-nav-options li a').removeClass('mob-link-active');
        $('#mob-services').addClass('mob-link-active');
        $('html').animate({scrollTop:0});
        $('.content-page').load('services');
    });
    // PORTFOLIO BUTTON ============================================
    $('.home-portfolio').on('click','#home-portfolio-btn',function(){
        $('ul li a').removeClass('link-active');
        $('#portfolio').addClass('link-active');
        $('.mob-nav-options li a').removeClass('mob-link-active');
        $('#mob-portfolio').addClass('mob-link-active');
        $('html').animate({scrollTop:0});
        $('.content-page').load('portfolio');
    });
});





// MY FUNCTIONS =====================================================================================

function GetText(index, option)
{
    let text = '';

    if (option == 1)
    {
        switch (index)
        {
            case 1: text = 'Rehabilitation of NR 1H Zalau – Alesd, Lot 1: km 0+000 – km 26+510 JV OHL – Peyber Hispanica SL – Societate de intretinere si reparatii drumuri – Timisoara SA'; break;
            case 2: text = 'Rehabilitation of NR 76, Contract 5R13, Stei – Beius, km 102+660 – 133+66, Romania, Grupo Azvi'; break;
            case 3: text = 'Rehabilitation of DN 66, Bumbesti Jiu – Petrosani, km 96+500 – km 126+000 COPISA Constructora Pirenaica S.A. Barcelona'; break;
            case 4: text = 'Design and Build of DN 1C Dej – Baia Mare, Contract 6R10 FCC Construccion SA Barcelona Bucharest Branch'; break;
            case 5: text = 'Rehabilitation of NR 6 Alexandria – Craiova, Lot 1, km 90+190 – km 132+435 Shapir Structures SRL'; break;
            case 6: text = 'Design and Build NR 18, Moisei – Iacobeni Shapir Structures SRL'; break;
        }
    }
    else if (option == 2)
    {
        switch (index)
        {
            case 1: text = ''; break;
            case 2: text = ''; break;
            case 3: text = ''; break;
            case 4: text = ''; break;
            case 5: text = ''; break;
            case 6: text = ''; break;
        }
    }
    else if (option == 3)
    {
        switch (index)
        {
            case 1: text = ''; break;
            case 2: text = ''; break;
            case 3: text = ''; break;
            case 4: text = ''; break;
            case 5: text = ''; break;
            case 6: text = ''; break;
        }
    }
    else if (option == 4)
    {
        switch (index)
        {
            case 1: text = ''; break;
            case 2: text = ''; break;
            case 3: text = ''; break;
            case 4: text = ''; break;
            case 5: text = ''; break;
            case 6: text = ''; break;
        }
    }

    return text;
}