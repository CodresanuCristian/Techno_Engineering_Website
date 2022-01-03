$(document).ready(function(){


    // AVAILABLE POSITION ====================================================================
    // Desktop options - click
    $('.available-position .desktop').on('click','.col-md-3', function(){
        let desktop_op = $(this).attr('id');
        
        if (desktop_op == 'desktop-op1'){
            $('#desktop-wrap1').slideDown();
            $('#desktop-wrap2').slideUp();
            $('#desktop-wrap3').slideUp();
            $('#desktop-wrap4').slideUp();
        }
        if (desktop_op == 'desktop-op2'){
            $('#desktop-wrap2').slideDown();
            $('#desktop-wrap1').slideUp();
            $('#desktop-wrap3').slideUp();
            $('#desktop-wrap4').slideUp();
        }
        if (desktop_op == 'desktop-op3'){
            $('#desktop-wrap3').slideDown();
            $('#desktop-wrap1').slideUp();
            $('#desktop-wrap2').slideUp();
            $('#desktop-wrap4').slideUp();
        }
        if (desktop_op == 'desktop-op4'){
            $('#desktop-wrap4').slideDown();
            $('#desktop-wrap1').slideUp();
            $('#desktop-wrap2').slideUp();
            $('#desktop-wrap3').slideUp();
        }
    });
    //Mobile options - click
    $('.available-position .mobile').on('click','.mob-op', function(){
        let mobile_op = $(this).attr('id');

        if (mobile_op == 'mob-op1'){
            $('#mobile-details-op2').slideUp();
            $('#mobile-details-op3').slideUp();
            $('#mobile-details-op4').slideUp();
            $('#mobile-details-op1').slideDown();
        }
        if (mobile_op == 'mob-op2'){
            $('#mobile-details-op1').slideUp();
            $('#mobile-details-op3').slideUp();
            $('#mobile-details-op4').slideUp();
            $('#mobile-details-op2').slideDown();
        }
        if (mobile_op == 'mob-op3'){
            $('#mobile-details-op1').slideUp();
            $('#mobile-details-op2').slideUp();
            $('#mobile-details-op4').slideUp();
            $('#mobile-details-op3').slideDown();
        }
        if (mobile_op == 'mob-op4'){
            $('#mobile-details-op1').slideUp();
            $('#mobile-details-op2').slideUp();
            $('#mobile-details-op3').slideUp();
            $('#mobile-details-op4').slideDown();
        }
    });






    // EMPLOYEE ==============================================================================
    // Employee tooltip
    $('[data-toggle="tooltip"]').tooltip();   

    // Employee click 
    $('.testimonials .footer').on('click', '.employee-box img', function(){
        let employee_id = $(this).attr('id');

        $('.employee-box').removeClass('employee-box-selected');
    
        switch (employee_id){
            case 'employee1': 
                $('.testimonials .section #msg').html('“Here at TE&A, we are avid believers that the best results are achieved through the diversity of ideas shared between individuals. Consensus decision–making between personnel with a variety of talents have led to great achievements. TE&A encourages the flow of ideas and assists each and every member of our team to improve and expand on their natural talents. It is that special authentic mix of diversity which offers an unparalleled solid base for sustained development.”');
                $('.testimonials .section #author').html('Robert Cruceru – Senior Lawyer');
                $('.testimonials .section #avatar').attr('src','/img/1.jpg');
                $('#employee-box1').addClass('employee-box-selected');
                break;
            case 'employee2': 
                $('.testimonials .section #msg').html('“In TE&A we accept nothing less than well-grounded and precisely produced work for each product we deliver with utmost care. My fellow planning team and I aim beyond the highest professional standards, to guarantee the success of our mission.<br>TE&A has developed a rich environment of multicultural and multinational professionals who possess an unparalleled diversity of knowledge, background, experience, and innovative approaches to problem analysis and resolution. This environment has encouraged all of us to broaden our vision and “thinking out of the box” when our clients are facing certain challenges, which are often crippling. It heartened us, at both individual and team levels, to support each other and our clients to offer fresh prospective to facilitate successful outcomes to any situation that any of us may be faced with.”');
                $('.testimonials .section #author').html('Lotfy Abdel Kader – Manager of Planning & Scheduling Department Middle East');
                $('.testimonials .section #avatar').attr('src','/img/2.jpg');
                $('#employee-box2').addClass('employee-box-selected');
                break;
            case 'employee3':
                $('.testimonials .section #msg').html('“To be member of TE&A’s team is a great experience, a stimulating challenge and a privilege for broad-minded professionals.”');
                $('.testimonials .section #author').html('Athanasios Stigas – Executive Director');
                $('.testimonials .section #avatar').attr('src','/img/3.jpg');
                $('#employee-box3').addClass('employee-box-selected');
                break;            
            case 'employee4':
                $('.testimonials .section #msg').html('“Working at TE&A offers major challenges whilst at the same time provides a unique opportunity to develop skills and experience. It encourages us to further mature as professionals and to assist others to grow; we are given the chance to achieve a high level of professionalism in the various fields of the industry, which encourages dedication and promotes our best efforts in everything we do. This is a multinational and multi specialized environment requiring high demands which are extremely satisfying when our efforts prove successful outcomes.”');
                $('.testimonials .section #author').html('Denitsa Harizanova – Claims Manager & Country Manager Bulgaria');
                $('.testimonials .section #avatar').attr('src','/img/1.jpg');
                $('#employee-box4').addClass('employee-box-selected');
                break;
            case 'employee5':
                $('.testimonials .section #msg').html('“Working at TE&A is a wonderful opportunity for all those striving for excellence. Such a combination of different professional skills together with continuous attention for professional development and training helps employees to grow, besides ensuring high quality services to our clients.”');
                $('.testimonials .section #author').html('Ugo Galli – Claims Manager & Head of Middle East Operations');
                $('.testimonials .section #avatar').attr('src','/img/2.jpg');
                $('#employee-box5').addClass('employee-box-selected');
                break;
            case 'employee6':
                $('.testimonials .section #msg').html('“At TE&A I found a working environment that values my entrepreneurial instincts, offering me the opportunity to develop my strengths and expand my knowledge.”');
                $('.testimonials .section #author').html('Cerasela Angelescu – Group Marketing, PR & International Administration Director');
                $('.testimonials .section #avatar').attr('src','/img/3.jpg');
                $('#employee-box6').addClass('employee-box-selected');
                break;
                
            case 'employee7':
                $('.testimonials .section #msg').html('“One of the refreshing advantages of working with TE&A is receiving continuous support from fellow colleagues. It takes a short time to acknowledge the real impact of this environment and how much it assists developing knowledge and independence, ultimately arriving to a position to reciprocate the same support to other colleagues.”');
                $('.testimonials .section #author').html('Lino Morini – Financial & Administrative Manager');
                $('.testimonials .section #avatar').attr('src','/img/1.jpg');
                $('#employee-box7').addClass('employee-box-selected');
                break;
                
            case 'employee8':
                $('.testimonials .section #msg').html('“The interdisciplinary departments at TE&A give opportunities to identify relevant information and gather it together as pieces of a puzzle, to produce a panoramic picture forming sound advice suitably tailored for our clients. Great individuals become exceptional when working together.”');
                $('.testimonials .section #author').html('Violeta Dinu – Claims Manager & Head of Quantity Surveying and Quantum Department');
                $('.testimonials .section #avatar').attr('src','/img/2.jpg');
                $('#employee-box8').addClass('employee-box-selected');
                break;
                
            case 'employee9':
                $('.testimonials .section #msg').html('“In my opinion, the preparation of successful claims is the most challenging and satisfying activity within the construction consulting industry. It requires a combination of pride, passion, experience and an in-depth knowledge of all prerequisite components of a robust claim, as it marks the first essential milestone of the multi-tiered dispute resolution mechanism provided under the various forms of our clients’ Contracts. A claim prepared in a professional manner, using the appropriate methods recommended by the industry and recognised by DABs, arbitrators and the courts, will enhance the likelihood of achieving a successful outcome to the satisfaction of our clients, TE&A and at a personal level.”');
                $('.testimonials .section #author').html('Ioana Otilia Isac – Manager of the Claims Coordination Department');
                $('.testimonials .section #avatar').attr('src','/img/3.jpg');
                $('#employee-box9').addClass('employee-box-selected');
                break;
        }
    });

});
