$(document).ready(function(){

    // BOXES ===================================================================
    $(document).on('scroll', function(){
        var rect_numb = 0;

        if ($('#rect1').inView('both') == true) rect_numb = 1;
        if ($('#rect2').inView('both') == true) rect_numb = 2;
        if ($('#rect3').inView('both') == true) rect_numb = 3;
        if ($('#rect4').inView('both') == true) rect_numb = 4;

        for (let i=1; i<5; i++){
            if (i == rect_numb){
                $('.about #box'+i).removeClass('box'+i+'-not-in-view');
                $('.about #box'+i).addClass('box'+i+'-in-view');
                $('.about #rect'+i+' p').removeClass('p'+i+'-not-in-view');
                $('.about #rect'+i+' p').addClass('p'+i+'-in-view');
            }
            else{
                $('.about #box'+i).removeClass('box'+i+'-in-view');
                $('.about #box'+i).addClass('box'+i+'-not-in-view');
                $('.about #rect'+i+' p').removeClass('p'+i+'-in-view');
                $('.about #rect'+i+' p').addClass('p'+i+'-not-in-view');
            }
        }
    });



    // MEET THE TEAM ===========================================================
    // Nav-bar-------------------------
    var op = 'about-meet-op1';
    $('.about .meet .about-meet-nav').on('click', 'li a', function(){
        op = $(this).attr('id');

        for (let i=1; i<=5; i++)
            $('#about-meet-op'+i).removeClass('about-meet-active');

        for (let i=1; i<=5; i++)
            if (op == 'about-meet-op'+i) 
                $('#about-meet-op'+i).addClass('about-meet-active');

        
        let emp_numb = 0;
        switch (op){    
            case 'about-meet-op1': emp_numb = 2; break;
            case 'about-meet-op2': emp_numb = 3; break;
            case 'about-meet-op3': emp_numb = 5; break;
            case 'about-meet-op4': emp_numb = -2; break;
            case 'about-meet-op5': emp_numb = 10; break;
        }


        $('.about .meet .employee-wrap').fadeOut(function(){
            for (let i=1; i<=10; i++){
                if (i<=Math.abs(emp_numb)) $('#employee'+i).css({'display':'flex'});
                else                       $('#employee'+i).css({'display':'none'});
            }

            switch (emp_numb){
                case 2: 
                    $('.about #employee1 h5').html('GIOVANNI DI FOLCO');
                    $('.about #employee1 h6').html('President');
                    $('.about #employee2 h5').html('EUGENIA DUNCA');
                    $('.about #employee2 h6').html('President');
                    break;
                case 3:
                    $('.about #employee1 h5').html('CERASELA ANGELESCU');
                    $('.about #employee1 h6').html('Manager');
                    $('.about #employee2 h5').html('ANCA DINU');
                    $('.about #employee2 h6').html('Administrative & Financial Manager');
                    $('.about #employee3 h5').html('ALINA PETRESCU');
                    $('.about #employee3 h6').html('Global Business Development Director');
                    break;
                case 5: 
                    $('.about #employee1 h5').html('CRISTINA BADEA');
                    $('.about #employee1 h6').html('Head of Legal Department International');
                    $('.about #employee2 h5').html('DENITSA HARIZANOVA');
                    $('.about #employee2 h6').html('Claims Manager');
                    $('.about #employee3 h5').html('OFELIA GANEA');
                    $('.about #employee3 h6').html('Head of Forensic International');
                    $('.about #employee4 h5').html('GIOVANNI RIGONI');
                    $('.about #employee4 h6').html('Head of Contracts Department');
                    $('.about #employee5 h5').html('FLORIN MARES');
                    $('.about #employee5 h6').html('Head of QS & Quantum Department International');
                    break;
                case -2: 
                    $('.about #employee1 h5').html('CLIVE HORRIDGE');
                    $('.about #employee1 h6').html('Civil Engineering');
                    $('.about #employee2 h5').html('CRISTINA PIRJAN');
                    $('.about #employee2 h6').html('Senior QS Advisor');
                    break;
                case 10: 
                    $('.about #employee1 h5').html('ERDAL ASIM');
                    $('.about #employee1 h6').html('Senior Planning Engineer');
                    $('.about #employee2 h5').html('VIOLETA DINU');
                    $('.about #employee2 h6').html('Construction Contract Management');
                    $('.about #employee3 h5').html('MIHAELA VULPESCU');
                    $('.about #employee3 h6').html('Manager of Contracts Department');
                    $('.about #employee4 h5').html('IOANA OTILIA ISAC');
                    $('.about #employee4 h6').html('Manager of the Claims Coordination Department');
                    $('.about #employee5 h5').html('VERONICA SIDON');
                    $('.about #employee5 h6').html('Manager of the Translation & Editing Department');
                    $('.about #employee6 h5').html('CODRUT ISPASOIU');
                    $('.about #employee6 h6').html('IT Specialist');
                    $('.about #employee7 h5').html('EMILIAN DUMITRU');
                    $('.about #employee7 h6').html('Deputy Manager');
                    $('.about #employee8 h5').html('ALEXANDRU PALADE');
                    $('.about #employee8 h6').html('Unit Chief Quantity Surveyor ');
                    $('.about #employee9 h5').html('RAZVAN DOBRE');
                    $('.about #employee9 h6').html('Unit Chief Quantity Surveyor');
                    $('.about #employee10 h5').html('LIVIU MUSA');
                    $('.about #employee10 h6').html('Chief Accountant');
                    break;
            }
        }).fadeIn();
    });

    // Hover-----------------------------
    $('.about .meet .employee-wrap').on('mouseenter', '.meet-box', function(){
        let emp_id = $(this).attr('id');
        $('#'+emp_id+' .details').animate({bottom:'0px'});
    });
    $('.about .meet .employee-wrap').on('mouseleave', '.meet-box', function(){
        let emp_id = $(this).attr('id');
        $('#'+emp_id+' .details').animate({bottom:'-60px'});
    });

    // Click-------------------------------
    $('.about .meet .employee-wrap').on('click', '.meet-box', function(){
        let emp_id = $(this).attr('id');
        ModalDetails(op, emp_id);
    });




    // OUR VALUES =======================================================================
    $('.about .our-values .values-block').on('mouseenter', 'p', function(){
        let val = $(this).attr('id');

        for(let i=1; i<=6; i++)
            $('#val'+i).removeClass('value-active');

        if (val == 'val1'){
            $('#val1').addClass('value-active');
            $('.val-text p').html('Our reputation as a trustworthy business partner is of paramount importance to our team and is absolutely critical to our present and future business success.<br>Honesty, professionalism and ethical behavior play an integral part in our communication and the way we provide our services. ');
            $('.about .our-values img').attr('src','/img/2.jpg');
        }
        if (val == 'val2'){
            $('#val2').addClass('value-active');
            $('.val-text p').html('We constantly aim towards improving our knowledge through continuous research and development in order to meet and exceed the highest expectations of our clients and industry.<br>Our team is encouraged to look for new ways to improve individual and group performance in order to achieve common goals. Individual rewards and promotions are performance based.');
            $('.about .our-values img').attr('src','/img/1.jpg');
        }
        if (val == 'val3'){
            $('#val3').addClass('value-active');
            $('.val-text p').html('We take full responsibility for any advice provided by our company. Every issue dealt with is of paramount importance to us. We scrupulously analyze every detail and supervise the projects at hand from the onset until successful closure.<br>Our team is 100% committed to achieving the best possible results, however the Client is always right and has the right to be compensated for any damage encountered as a result of our possible mistakes, which we managed over the years to avoid thanks to our quality assurance system.');
            $('.about .our-values img').attr('src','/img/3.jpg');
        }
        if (val == 'val4'){
            $('#val4').addClass('value-active');
            $('.val-text p').html('Is an irreplaceable part of our professional conduct.<br>We are convinced that a successful business is based on hard work and honor and the route to success is only open when one conducts itself in a trustworthy and honorable way. We adhere absolutely to the independence and objectivity requirements under which we do business.');
            $('.about .our-values img').attr('src','/img/1.jpg');
        }
        if (val == 'val5'){
            $('#val5').addClass('value-active');
            $('.val-text p').html('Our business goals are only met when we see our clients being successful in their endeavors and fairly rewarded.<br>Client satisfaction is the ultimate goal our team strives to achieve by the successful closing of every project we work on. We deliver competitive advantages via pragmatic and sustainable solutions, detailed knowledge and 100% commitment at all times.');
            $('.about .our-values img').attr('src','/img/2.jpg');
        }
        if (val == 'val6'){
            $('#val6').addClass('value-active');
            $('.val-text p').html('We developed principles that guide us towards giving straightforward and unequivocal advice to clients. Our employees work in an open and including environment and are encouraged to embrace social responsibility for their conduct and decisions they make.<br>TEA is a truly international business which embraces corporate responsibility and makes a real effort to behave ethically and always strives to choose the right course of action.');
            $('.about .our-values img').attr('src','/img/3.jpg');
        }
    });
});






//  MY FUNCTIONS ======================================================================
// RETURN true IF AN ELEMENT IS IN VIEWPORT -------------------------------------------
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

// WRITE DATA IN MODAL FORM -------------------------------------------------------------
function ModalDetails(op, emp_id)
{
    if (op == 'about-meet-op1'){
        if (emp_id == 'employee1'){
            $('.about .modal-title').html('GIOVANNI DI FOLCO');
            $('.about .modal-body p').html('Giovanni Di Folco is the Senior Partner and the President of Techno Engineering & Associates. He is a highly motivated expatriate multi-discipline professional Civil Engineer with 30 years of experience in the construction and consulting industry (transportation and heavy civil works). Experienced in Projects / Contracts Management and Claims Expert with extensive international experience gained in multi-disciplinary Civil Engineering Projects in Italy, Iran, Libya, South Africa, Kingdom of Lesotho, Sultanate of Oman, United Arab Emirates, Greece and Romania, who attained professional recognition utilizing 30 years of experience in Civil Engineering.<br><br>Demonstrated acumen for construction and design engineering and management at all levels, acute awareness of cost control and project planning, ability to provide an immediate and calculated response to all situations in the financial, contractual, legal and technical sectors of the profession, proven ability to sustain responsibilities from high level management through to operational level.<br><br>He possesses acute awareness of specific Countries and International Law, the importance of quality and safety and the moral and legal responsibilities that they impose. Trained and operates to the most modern standards of ISO 9000, ICE, NEC, JCT and FIDIC Conditions of Contract and the strict and controlled safety regimes in force internationally. Although specialized as a Pavement Engineer by profession, the international experience he has gained has enabled development of a wide diversity of his skills within the Civil Engineering Industry.<br><br>During his career he has held positions of high responsibility such as “Counsel”, “Engineer” in the sense of “FIDIC”, Project Manager, Country Manager, Claim Expert and Adjudicator on major construction projects. He is a FIDIC expert in his own right. He possesses a vast experience in adjudication using DAB procedures and ICC arbitration either as Expert of opinion, Attorney or Counsel for Claimant or Respondent.');
        }
        if (emp_id == 'employee2'){
            $('.about .modal-title').html('EUGENIA DUNCA');
            $('.about .modal-body p').html('Eugenia Dunca is the Managing Director and Senior Partner of Techno Engineering & Associates. With a career spanning over 30 years as a qualified Civil Engineer, she has acquired specific expertise in major International civil engineering projects under FIDIC conditions of contract, predominantly in the Road, National Roads Rehabilitation, Motorways and Rail Transport Infrastructure sectors.<br><br>Her experience encompasses the preparation, review and revision of Contract Documentation, Tender Documents, Technical Specifications, Measurement Control, Cost Estimation, Recapitulation of Quantities, Financial Forecasting, Progress Monitoring, Works Programming, Materials and Construction Quality Control according to International procedures. She has been responsible for the complete International procurement and Contract Management of major international contracts, from feasibility study stage, through financing, design, contractors’ procurement and construction supervision, all in accordance with whole renowned International Financing Authorities’ Regulations, which has involved the preparation and approval of Monthly Engineering Reports, Variation Orders, Claims Analyses, Final Account Agreements, through to Close-Out Documentation on more than thirty major international projects.<br><br>Her experience includes an in-depth knowledge of the FIDIC Conditions of Contract, including the preparation of Contract-specific Conditions of Particular Application, Contract and Loan Management and direct liaison with the Financing Authorities.<br><br>She has over the years, developed the ability to communicate at all levels which has matured proven interrelation skills, not only as team leader of over fifty staff, but as team player during the successful administration of projects funded by European lending authorities and World Bank. From 2000 to 2003, she was also entrusted with the position of SAO (Sectorial Authorizing Officer) on ISPA road infrastructure projects in Romania, gaining full practical expertise in accordance with ISPA and EU regulations and procedures.');
        }
    }

    if (op == 'about-meet-op2'){
        if (emp_id == 'employee1'){
            $('.about .modal-title').html('CERASELA ANGELESCU');
            $('.about .modal-body p').html('Cerasela Angelescu is an experienced manager with over 20 years’ experience in the construction industry while providing administrative, logistic, commercial and general management for major construction companies, leading multi departmental & disciplined teams to achieve strategic objectives & step change results. Before joining the team of Techno Engineering & Associates as Group Marketing, PR and International Administration Director, Cerasela’s previous key positions were as PR Manager, Purchasing and Administrative Director, Area Manager for Eastern Europe, Executive Director and General Manager for different Greek and Italian companies.<br><br>Cerasela has excellent cross functional organizational skills and leadership abilities along with a strong team orientation. Her main objective is to develop, establish and maintain group marketing strategies to meet our organizational objectives. Essentially she is in charge and responsible for effective management of the marketing, advertising and promotional activities along with establishing all business administration aspects of our international operations.');
        }
        if (emp_id == 'employee2'){
            $('.about .modal-title').html('ANCA DINU');
            $('.about .modal-body p').html('Anca Dinu is a dedicated results oriented financial specialist who holds the position of Administrative & Financial Manager within Techno Engineering & Associates. Except dealing with all the financial aspects of company strategy, analyzing figures and implementing recommendations, Anca is also commercially aware, advising on the best path of growth for the business. Mrs. Dinu plays a critical role in partnering with the senior leadership team in strategic decision making and operations so as Techno Engineering & Associates continues to enhance its quality programming and build capacity. She leads and manages the budgeting process, coordinates corporate finance, manages company policies regarding capital requirements, debt, taxation, equity and acquisitions, controls all financial transactions and accountancy matters, including audit systems, monitors progress and changes and keeps the senior leadership team abreast of the organization’s financial status. Prior to joining Techno Engineering & Associates, Anca held the Financial Manager position for various international construction companies operating worldwide.');
        }
        if (emp_id == 'employee3'){
            $('.about .modal-title').html('ALINA PETRESCU');
            $('.about .modal-body p').html('Alina Petrescu is the Global Business Development Director of Techno Engineering & Associates Group (TE&A). With an interesting career spanning over 15 years of hands-on experience in financial and operations management, business strategy and development, she has worked at Senior Executive Level with International Boards of Directors, Banks and Consultants.<br><br>She has acquired specialisms and skills in major international civil engineering projects under FIDIC conditions of contract as CFO and Legal Representative for a leading contractor in Portugal and from her former position of Senior Consultant in the Ministry of Economy, Energy and Business Environment in Romania. Her experience encompasses the diverse spectrum of coordination of management activities, preparation of budgets, preparation of tenders, cash flow forecasts, contracts and human resources management.<br><br>Alina holds a Masters Degree from the Faculty of Economics within the University of Porto, Portugal in addition to a Bachelors Degree from the Faculty of Management within the Academy of Economic Studies in Bucharest, Romania. She has astute organizational and negotiation skills and the ability to prioritize multiple and complex tasks, often with high pressure deadlines.');
        }
    }

    //  if (emp_id == 'employee3'){
    //     $('.about .modal-title').html('');
    //     $('.about .modal-body p').html('');
    // }
}