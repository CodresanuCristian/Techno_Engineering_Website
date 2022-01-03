$(document).ready(function(){
    // CHANGE COUNTRY
    $('.contact .left-side').on('click','li a', function(){
        ChangeOffice($(this).attr('id'));
        ClearForm();
    });

    $('.contact .middle-side').on('click','li a', function(){
        ChangeOffice($(this).attr('id'));
        ClearForm();
    });


    // SEND THE MESSAGE BUTTON
    $('.contact .contact-form').on('click', 'button', function(){
        let success = true;
        $('#err-type1').css({'display':'none'});
        $('#err-type2').css({'display':'none'});
        $('#err-type3').css({'display':'none'});
        $('#err-type4').css({'display':'none'});
        $('#err-type5').css({'display':'none'});

        if ($('#contact-fullname').val() == ''){
            success = false;
            $('#err-type1').css({'display':'inherit'});
            $('contact-fullname').val('');
        }
        if ($('#contact-email').val() == ''){
            success = false;
            $('#err-type2').css({'display':'inherit'});
            $('contact-email').val('');
        }
        if (ValidateEmail($('#contact-email').val()) == false){
            success = false;
            $('#err-type3').css({'display':'inherit'});
            $('contact-email').val('');
        }
        if ($('#contact-subject').val() == ''){
            success = false;
            $('#err-type4').css({'display':'inherit'});
            $('contact-subject').val('');
        }
        if ($('#contact-message').val() == ''){
            success = false;
            $('#err-type5').css({'display':'inherit'});
            $('contact-message').val('');
        }

        if (success == true){
            $('.contact-message .alert-danger').slideUp();
            $('.contact-message .alert-success').slideDown();
            SendAjaxRequest();
        }
        else{
            $('.contact-message .alert-success').slideUp();
            $('.contact-message .alert-danger').slideDown();
        }
    });
});




// MY FUNCTIONS======================================

function ValidateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}



function SendAjaxRequest()
{

    $.ajax({
        type: 'GET',
        url: '/send-email',
        data:{name: $('#contact-fullname').val(), 
              email: $('#contact-email').val(), 
              subject: $('#contact-subject').val(), 
              message: $('#contact-message').val()},
        success: function(data){
            $('#contact-fullname').val('');
            $('#contact-email').val('');
            $('#contact-subject').val('');
            $('#contact-message').val('');
        }
    });
}



function ClearForm()
{
    $('.contact-message .alert-dancer').slideUp();
    $('.contact-message .alert-success').slideUp();
    $('#contact-fullname').val('');
    $('#contact-email').val('');
    $('#contact-subject').val('');
    $('#contact-message').val('');
}



function ChangeOffice(nav_option)
{
    $('.contact li a').removeClass('contact-form-active');
    // Romania
    if((nav_option == 'nav-ro-left') || (nav_option == 'nav-ro-mid')){
        // left-side
        if (nav_option == 'nav-ro-mid'){
            $('.contact .left-side h2').fadeOut(function (){
                $('.contact .left-side h2').html('ROMANIA');
            }).fadeIn();
        }else{
            $('.contact .left-side h2').html('ROMANIA');
        }
        $('.contact .left-side .contact-address p').fadeOut(function (){
            $('.contact .left-side .contact-address p').html('22 Muzelor Street, Sector 4, 040191, Bucharest, Romania');
        }).fadeIn();
        $('.contact .left-side .contact-phone p').fadeOut(function (){
            $('.contact .left-side .contact-phone p').html('+40 21 336 30 76/77');
        }).fadeIn();
        $('.contact .left-side .contact-fax p').fadeOut(function (){
            $('.contact .left-side .contact-fax p').html('+40 21 336 30 78');
        }).fadeIn();
        $('.contact .left-side .contact-email p').fadeOut(function (){
            $('.contact .left-side .contact-email p').html('techno.engineering@technoeng.com');
        }).fadeIn();
        // middle-side
        $('#nav-ro-left').addClass('contact-form-active');
        $('#nav-ro-mid').addClass('contact-form-active');
        $('.contact .middle-side .green-span').fadeOut(function (){
            $('.contact .middle-side .green-span').html('ROMAINA');
        }).fadeIn();
        // right-side
        $('iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.577830396339!2d26.09785641552291!3d44.42130807910252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff11c9e0a54f%3A0xb7dbe59d22944707!2sStrada%20Muzelor%2022%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1628784162876!5m2!1sen!2sro');
    }
    
    // Bulgaria
    if((nav_option == 'nav-bg-left') || (nav_option == 'nav-bg-mid')){
        // left-side
        if (nav_option == 'nav-bg-mid'){
            $('.contact .left-side h2').fadeOut(function (){
                $('.contact .left-side h2').html('BULGARIA');
            }).fadeIn();
        }else{
            $('.contact .left-side h2').html('BULGARIA');
        }
        $('.contact .left-side .contact-address p').fadeOut(function (){
            $('.contact .left-side .contact-address p').html('Vitinya Street, BENI Building, Entrance C, Floor 2 1517, “Haji Dimitar” Residential Area 2J Sofia, Bulgaria');
        }).fadeIn();
        $('.contact .left-side .contact-phone p').fadeOut(function (){
            $('.contact .left-side .contact-phone p').html('+ 359 2 421 92 92 (3)');
        }).fadeIn();
        $('.contact .left-side .contact-fax p').fadeOut(function (){
            $('.contact .left-side .contact-fax p').html(' + 359 2 421 92 94');
        }).fadeIn();
        $('.contact .left-side .contact-email p').fadeOut(function (){
            $('.contact .left-side .contact-email p').html('techno.engineeringbg@technoeng.com');
        }).fadeIn();
        // middle-side
        $('#nav-bg-left').addClass('contact-form-active');
        $('#nav-bg-mid').addClass('contact-form-active');
        $('.contact .middle-side .green-span').fadeOut(function (){
            $('.contact .middle-side .green-span').html('BULGARIA');
        }).fadeIn();
        // right-side
        $('iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11726.728516739038!2d23.368015!3d42.710451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59158e1dcbfe60e6!2sTechno%20Engineering%20%26%20Associates!5e0!3m2!1sen!2sro!4v1628775100250!5m2!1sen!2sro');
    }
    
    // Qatar
    if((nav_option == 'nav-qa-left') || (nav_option == 'nav-qa-mid')){
        // left-side
        if (nav_option == 'nav-qa-mid'){
            $('.contact .left-side h2').fadeOut(function (){
                $('.contact .left-side h2').html('QATAR');
            }).fadeIn();
        }
        else{
            $('.contact .left-side h2').html('QATAR');
        }
        $('.contact .left-side .contact-address p').fadeOut(function (){
            $('.contact .left-side .contact-address p').html('Grand Hamad Street, Mashreq Bank Building 1st floor, flat 3, P.O. Box 205103 Doha, Qatar');
        }).fadeIn();
        $('.contact .left-side .contact-phone p').fadeOut(function (){
            $('.contact .left-side .contact-phone p').html('+974 4465 3649');
        }).fadeIn();
        $('.contact .left-side .contact-fax p').fadeOut(function (){
            $('.contact .left-side .contact-fax p').html('+974 4465 4958');
        }).fadeIn();
        $('.contact .left-side .contact-email p').fadeOut(function (){
            $('.contact .left-side .contact-email p').html('techno.engineeringqa@technoeng.com');
        }).fadeIn();
        // middle-side
        $('#nav-qa-left').addClass('contact-form-active');
        $('#nav-qa-mid').addClass('contact-form-active');
        $('.contact .middle-side .green-span').fadeOut(function (){
            $('.contact .middle-side .green-span').html('QATAR');
        }).fadeIn();
        // right-side
        $('iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.011727355069!2d51.50629881544987!3d25.27019093493552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dab16ad98483%3A0xc9e26a368efac223!2sTechno%20Engineering%20%26%20Associates%20Qatar!5e0!3m2!1sen!2sro!4v1628784379415!5m2!1sen!2sro');
    }
}