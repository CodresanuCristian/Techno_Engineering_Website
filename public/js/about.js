$(document).ready(function(){

    // BOXES ===================================================================
    $(document).on('scroll', function(){
        var rect_numb = 0;

        if (window.matchMedia("(max-width: 767px)").matches){
            if (($('#rect1 #box1 h2').inView('bottom') == true) || ($('#rect1 #box-text1 p').inView('top') == true)) rect_numb = 1;
            else if (($('#rect2 #box2 h2').inView('bottom') == true) || ($('#rect2 #box-text2 p').inView('top') == true)) rect_numb = 2;
            else if (($('#rect3 #box3 h2').inView('bottom') == true) || ($('#rect3 #box-text3 p').inView('top') == true)) rect_numb = 3;
            else if (($('#rect4 #box4 h2').inView('bottom') == true) || ($('#rect4 #box-text4 p').inView('top') == true)) rect_numb = 4;

        }
        else {
            if (($('#rect1 #box1').inView('top') == true) || ($('#rect1 #box-text1').inView('both') == true)) rect_numb = 1;
            else if (($('#rect2 #box2').inView('top') == true) || ($('#rect2 #box-text2').inView('both') == true)) rect_numb = 2;
            else if (($('#rect3 #box3').inView('top') == true) || ($('#rect3 #box-text3').inView('both') == true)) rect_numb = 3;
            else if (($('#rect4 #box4').inView('top') == true) || ($('#rect4 #box-text4').inView('both') == true)) rect_numb = 4;
        }

        for (let i=1; i<5; i++){
            if (i == rect_numb){
                $('.about #box'+i).removeClass('box'+i+'-not-in-view');
                $('.about #box'+i).addClass('box'+i+'-in-view');
                $('.about #box'+i+' h2').removeClass('text'+i+'-not-in-view');
                $('.about #box'+i+' h2').addClass('text'+i+'-in-view');
                $('.about #rect'+i+' p').removeClass('p'+i+'-not-in-view');
                $('.about #rect'+i+' p').addClass('p'+i+'-in-view');
            }
            else{
                $('.about #box'+i).removeClass('box'+i+'-in-view');
                $('.about #box'+i).addClass('box'+i+'-not-in-view');
                $('.about #box'+i+' h2').removeClass('text'+i+'-in-view');
                $('.about #box'+i+' h2').addClass('text'+i+'-not-in-view');
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
            case 'about-meet-op5': emp_numb = 9; break;
        }


        $('.about .meet .employee-wrap').fadeOut("fast",function(){
            for (let i=1; i<=10; i++){
                if (i<=Math.abs(emp_numb)) $('#about-employee'+i).css({'display':'flex'});
                else                       $('#about-employee'+i).css({'display':'none'});
            }

            switch (emp_numb){
                case 2: 
                    $('.about #about-employee1 h5').html('GIOVANNI DI FOLCO');
                    $('.about #about-employee1 h6').html('Senior Partner & President');
                    $('.about .meet-box #img-emp1').attr('src','/img/GiovanniDiFolco.jpg');
                    $('.about #about-employee1 #linkedin').attr('href','https://www.linkedin.com/in/giovanni-di-folco-fdbf-fpd-faa-cmdrbf-maric-mfidic-b2901627/');
                    $('.about #about-employee2 h5').html('EUGENIA DUNCA');
                    $('.about #about-employee2 h6').html('Senior Partner & Managing Director');
                    $('.about .meet-box #img-emp2').attr('src','/img/EugeniaDunca.jpg');
                    $('.about .meet-box #linkedin').attr('href','');
                    $('.about #about-employee2 #linkedin').attr('href','https://www.linkedin.com/in/eugenia-dunca-483929100/');
                    break;
                case 3:
                    $('.about #about-employee1 h5').html('CERASELA ANGELESCU');
                    $('.about #about-employee1 h6').html('Group Marketing, PR & International Administration Manager');
                    $('.about .meet-box #img-emp1').attr('src','/img/CeraselaAngelescu.jpg');
                    $('.about #about-employee1 #linkedin').attr('href','https://www.linkedin.com/in/cerasela-angelescu-84b3194a/');
                    $('.about #about-employee2 h5').html('ANCA DINU');
                    $('.about #about-employee2 h6').html('Financial & Administrative Director');
                    $('.about .meet-box #img-emp2').attr('src','/img/Anca Dinu.jpg');
                    $('.about #about-employee2 #linkedin').attr('href','https://www.linkedin.com/in/anca-dinu-52a4b0a8/');
                    $('.about #about-employee3 h5').html('ALINA PETRESCU');
                    $('.about #about-employee3 h6').html('Global Business Development Director');
                    $('.about .meet-box #img-emp3').attr('src','/img/Alina Petrescu.jpg');
                    $('.about #about-employee3 #linkedin').attr('href','https://www.linkedin.com/in/alina-petrescu-55b7002/');
                    break;
                case 5: 
                    $('.about #about-employee1 h5').html('CRISTINA BADEA');
                    $('.about #about-employee1 h6').html('Director of Legal Affairs');
                    $('.about .meet-box #img-emp1').attr('src','/img/Cristina Badea.jpg');
                    $('.about #about-employee1 #linkedin').attr('href','https://www.linkedin.com/in/cristina-badea-b0a59775/');
                    $('.about #about-employee2 h5').html('DENITSA HARIZANOVA');
                    $('.about #about-employee2 h6').html('Claims Manager & Country Manager');
                    $('.about .meet-box #img-emp2').attr('src','/img/Denitsa Harizanova.jpg');
                    $('.about #about-employee2 #linkedin').attr('href','https://www.linkedin.com/in/denitsa-harizanova-8b00311b/');
                    $('.about #about-employee3 h5').html('OFELIA GANEA');
                    $('.about #about-employee3 h6').html('Claims Manager & Head of Forensic International');
                    $('.about .meet-box #img-emp3').attr('src','/img/Ofelia Ganea.jpg');
                    $('.about #about-employee3 #linkedin').attr('href','https://www.linkedin.com/in/ofelia-ganea-badea-8544b610/');
                    $('.about #about-employee4 h5').html('GIOVANNI RIGONI');
                    $('.about #about-employee4 h6').html('Claims Manager & Head of Contracts Department International');
                    $('.about .meet-box #img-emp4').attr('src','/img/Giovanni Rigoni.jpg');
                    $('.about #about-employee4 #linkedin').attr('href','https://www.linkedin.com/in/giovanni-battista-rigoni-18142449/');
                    $('.about #about-employee5 h5').html('FLORIN MARES');
                    $('.about #about-employee5 h6').html('Claims Manager and Head of QS & Quantum Department International');
                    $('.about .meet-box #img-emp5').attr('src','/img/Florin Mares.jpg');
                    $('.about #about-employee5 #linkedin').attr('href','https://www.linkedin.com/in/florin-mares-688a2030/');
                    break;
                case -2: 
                    $('.about #about-employee1 h5').html('CLIVE HORRIDGE');
                    $('.about #about-employee1 h6').html('Senior Contracts Advisor');
                    $('.about .meet-box #img-emp1').attr('src','/img/Clive Horridge.jpg');
                    $('.about #about-employee1 #linkedin').attr('href','https://www.linkedin.com/in/clive-horridge-b8110527/');
                    $('.about #about-employee2 h5').html('CRISTINA PIRJAN');
                    $('.about #about-employee2 h6').html('Senior Manager & Quantum Expert of QS & Quantum Department International');
                    $('.about .meet-box #img-emp2').attr('src','/img/Cristina Pirjan.jpg');
                    $('.about #about-employee2 #linkedin').attr('href','https://www.linkedin.com/in/cristina-pirjan-798690ba/');
                    break;
                case 9: 
                    $('.about #about-employee1 h5').html('ERDAL ASIM');
                    $('.about #about-employee1 h6').html('Senior Planning Engineer');
                    $('.about .meet-box #img-emp1').attr('src','/img/Erdal Asim.jpg');
                    $('.about #about-employee1 #linkedin').attr('href','https://www.linkedin.com/in/asim-erdal-751aa02a/');
                    $('.about #about-employee2 h5').html('VIOLETA DINU');
                    $('.about #about-employee2 h6').html('Technical Director and Manager of QS & Quantum Department International');
                    $('.about .meet-box #img-emp2').attr('src','/img/Violeta Dinu.jpg');
                    $('.about #about-employee2 #linkedin').attr('href','https://www.linkedin.com/in/violeta-oana-dinu-b0108b38/');
                    $('.about #about-employee3 h5').html('MIHAELA VULPESCU');
                    $('.about #about-employee3 h6').html('Manager of Contracts Department');
                    $('.about .meet-box #img-emp3').attr('src','/img/Mihaela Vulpescu.png');
                    $('.about #about-employee3 #linkedin').attr('href','https://www.linkedin.com/in/mihaela-vulpescu-14637182/');
                    $('.about #about-employee4 h5').html('IOANA OTILIA ISAC');
                    $('.about #about-employee4 h6').html('Manager of the Claims Coordination Department');
                    $('.about .meet-box #img-emp4').attr('src','/img/Ioana Otilia Isac.jpg');
                    $('.about #about-employee4 #linkedin').attr('href','https://www.linkedin.com/in/otilia-ioana-isac-7851bb9b/');
                    $('.about #about-employee5 h5').html('VERONICA SIDON');
                    $('.about #about-employee5 h6').html('Translations and Editing Manager');
                    $('.about .meet-box #img-emp5').attr('src','/img/no-user-image.png');
                    $('.about #about-employee5 #linkedin').attr('href','https://www.linkedin.com/company/techno-engineering-&-associates/');
                    $('.about #about-employee6 h5').html('CODRUT ISPASOIU');
                    $('.about #about-employee6 h6').html('IT Manager');
                    $('.about .meet-box #img-emp6').attr('src','/img/Codrut Ispasoiu.jpg');
                    $('.about #about-employee6 #linkedin').attr('href','https://www.linkedin.com/in/codrutispasoiu/');
                    $('.about #about-employee7 h5').html('EMILIAN DUMITRU');
                    $('.about #about-employee7 h6').html('Deputy Manager of Forensic Planning Department International');
                    $('.about .meet-box #img-emp7').attr('src','/img/Emilian Dumitru.jpg');
                    $('.about #about-employee7 #linkedin').attr('href','https://www.linkedin.com/in/dumitruemilian/');
                    $('.about #about-employee8 h5').html('RAZVAN DOBRE');
                    $('.about #about-employee8 h6').html('Unit Chief Quantity Surveyor');
                    $('.about .meet-box #img-emp8').attr('src','/img/Razvan Dobre.jpg');
                    $('.about #about-employee8 #linkedin').attr('href','https://www.linkedin.com/in/razvan-dobre-2aaa17168/');
                    $('.about #about-employee9 h5').html('LIVIU MUSA');
                    $('.about #about-employee9 h6').html('Chief Accountant');
                    $('.about .meet-box #img-emp9').attr('src','/img/Liviu Musa.jpg');
                    $('.about #about-employee9 #linkedin').attr('href','https://www.linkedin.com/company/techno-engineering-&-associates/');
                    break;
            }
        }).fadeIn("fast");
    });

    // Hover-----------------------------
    $('.about .meet .employee-wrap').on('mouseenter', '.meet-box', function(){
        let emp_id = $(this).attr('id');
        $('#'+emp_id+' .details').animate({bottom:'0px'});
    });
    $('.about .meet .employee-wrap').on('mouseleave', '.meet-box', function(){
        let emp_id = $(this).attr('id');
        $('#'+emp_id+' .details').animate({bottom:'-50px'});
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
            $('.about .our-values img').attr('src','/img/value-trust.jpg');
        }
        if (val == 'val2'){
            $('#val2').addClass('value-active');
            $('.val-text p').html('We constantly aim towards improving our knowledge through continuous research and development in order to meet and exceed the highest expectations of our clients and industry.<br>Our team is encouraged to look for new ways to improve individual and group performance in order to achieve common goals. Individual rewards and promotions are performance based.');
            $('.about .our-values img').attr('src','/img/value-excellence.jpg');
        }
        if (val == 'val3'){
            $('#val3').addClass('value-active');
            $('.val-text p').html('We take full responsibility for any advice provided by our company. Every issue dealt with is of paramount importance to us. We scrupulously analyze every detail and supervise the projects at hand from the onset until successful closure.<br>Our team is 100% committed to achieving the best possible results, however the Client is always right and has the right to be compensated for any damage encountered as a result of our possible mistakes, which we managed over the years to avoid thanks to our quality assurance system.');
            $('.about .our-values img').attr('src','/img/value-accountability.jpeg');
        }
        if (val == 'val4'){
            $('#val4').addClass('value-active');
            $('.val-text p').html('Is an irreplaceable part of our professional conduct.<br>We are convinced that a successful business is based on hard work and honor and the route to success is only open when one conducts itself in a trustworthy and honorable way. We adhere absolutely to the independence and objectivity requirements under which we do business.');
            $('.about .our-values img').attr('src','/img/value-integrity.jpg');
        }
        if (val == 'val5'){
            $('#val5').addClass('value-active');
            $('.val-text p').html('Our business goals are only met when we see our clients being successful in their endeavors and fairly rewarded.<br>Client satisfaction is the ultimate goal our team strives to achieve by the successful closing of every project we work on. We deliver competitive advantages via pragmatic and sustainable solutions, detailed knowledge and 100% commitment at all times.');
            $('.about .our-values img').attr('src','/img/value-commitment.jpg');
        }
        if (val == 'val6'){
            $('#val6').addClass('value-active');
            $('.val-text p').html('We developed principles that guide us towards giving straightforward and unequivocal advice to clients. Our employees work in an open and including environment and are encouraged to embrace social responsibility for their conduct and decisions they make.<br>TEA is a truly international business which embraces corporate responsibility and makes a real effort to behave ethically and always strives to choose the right course of action.');
            $('.about .our-values img').attr('src','/img/value-ethics.jpg');
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
        if (emp_id == 'about-employee1'){
            $('.about .modal-title').html('GIOVANNI DI FOLCO');
            $('.about .modal-body p').html('Giovanni Di Folco is the Senior Partner and the President of Techno Engineering & Associates. He is a highly motivated expatriate multi-discipline professional Civil Engineer with 30 years of experience in the construction and consulting industry (transportation and heavy civil works). Experienced in Projects / Contracts Management and Claims Expert with extensive international experience gained in multi-disciplinary Civil Engineering Projects in Italy, Iran, Libya, South Africa, Kingdom of Lesotho, Sultanate of Oman, United Arab Emirates, Greece and Romania, who attained professional recognition utilizing 30 years of experience in Civil Engineering.<br><br>Demonstrated acumen for construction and design engineering and management at all levels, acute awareness of cost control and project planning, ability to provide an immediate and calculated response to all situations in the financial, contractual, legal and technical sectors of the profession, proven ability to sustain responsibilities from high level management through to operational level.<br><br>He possesses acute awareness of specific Countries and International Law, the importance of quality and safety and the moral and legal responsibilities that they impose. Trained and operates to the most modern standards of ISO 9000, ICE, NEC, JCT and FIDIC Conditions of Contract and the strict and controlled safety regimes in force internationally. Although specialized as a Pavement Engineer by profession, the international experience he has gained has enabled development of a wide diversity of his skills within the Civil Engineering Industry.<br><br>During his career he has held positions of high responsibility such as “Counsel”, “Engineer” in the sense of “FIDIC”, Project Manager, Country Manager, Claim Expert and Adjudicator on major construction projects. He is a FIDIC expert in his own right. He possesses a vast experience in adjudication using DAB procedures and ICC arbitration either as Expert of opinion, Attorney or Counsel for Claimant or Respondent.<br><br>Quote: “The most powerful force ever known on this planet is human cooperation - a force for construction and destruction.” Jonathan Haidt');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/giovanni-di-folco-fdbf-fpd-faa-cmdrbf-maric-mfidic-b2901627/');
        }
        if (emp_id == 'about-employee2'){
            $('.about .modal-title').html('EUGENIA DUNCA');
            $('.about .modal-body p').html('Eugenia Dunca is the Managing Director and Senior Partner of Techno Engineering & Associates. With a career spanning over 30 years as a qualified Civil Engineer, she has acquired specific expertise in major International civil engineering projects under FIDIC conditions of contract, predominantly in the Road, National Roads Rehabilitation, Motorways and Rail Transport Infrastructure sectors.<br><br>Her experience encompasses the preparation, review and revision of Contract Documentation, Tender Documents, Technical Specifications, Measurement Control, Cost Estimation, Recapitulation of Quantities, Financial Forecasting, Progress Monitoring, Works Programming, Materials and Construction Quality Control according to International procedures. She has been responsible for the complete International procurement and Contract Management of major international contracts, from feasibility study stage, through financing, design, contractors’ procurement and construction supervision, all in accordance with whole renowned International Financing Authorities’ Regulations, which has involved the preparation and approval of Monthly Engineering Reports, Variation Orders, Claims Analyses, Final Account Agreements, through to Close-Out Documentation on more than thirty major international projects.<br><br>Her experience includes an in-depth knowledge of the FIDIC Conditions of Contract, including the preparation of Contract-specific Conditions of Particular Application, Contract and Loan Management and direct liaison with the Financing Authorities.<br><br>She has over the years, developed the ability to communicate at all levels which has matured proven interrelation skills, not only as team leader of over fifty staff, but as team player during the successful administration of projects funded by European lending authorities and World Bank. From 2000 to 2003, she was also entrusted with the position of SAO (Sectorial Authorizing Officer) on ISPA road infrastructure projects in Romania, gaining full practical expertise in accordance with ISPA and EU regulations and procedures.<br><br>Quote: “A woman with organizing skills can run a construction company without ever picking up a hammer and nail.” Warren Farrell');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/eugenia-dunca-483929100/');
        }
    }

    if (op == 'about-meet-op2'){
        if (emp_id == 'about-employee1'){
            $('.about .modal-title').html('CERASELA ANGELESCU');
            $('.about .modal-body p').html("Cerasela Angelescu is an experienced manager with over 20 years’ experience in the construction industry while providing administrative, logistic, commercial and general management for major construction companies, leading multi departmental & disciplined teams to achieve strategic objectives & step change results. Before joining the team of Techno Engineering & Associates as Group Marketing, PR and International Administration Director, Cerasela’s previous key positions were as PR Manager, Purchasing and Administrative Director, Area Manager for Eastern Europe, Executive Director and General Manager for different Greek and Italian companies.<br><br>Cerasela has excellent cross functional organizational skills and leadership abilities along with a strong team orientation. Her main objective is to develop, establish and maintain group marketing strategies to meet our organizational objectives. Essentially she is in charge and responsible for effective management of the marketing, advertising and promotional activities along with establishing all business administration aspects of our international operations.<br><br>Quote: “Nothing is impossible, the word itself says - I'm possible !” Audrey Hepburn");
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/cerasela-angelescu-84b3194a/');
        }
        if (emp_id == 'about-employee2'){
            $('.about .modal-title').html('ANCA DINU');
            $('.about .modal-body p').html('Anca Dinu is a dedicated results oriented financial specialist who holds the position of Administrative & Financial Manager within Techno Engineering & Associates. Except dealing with all the financial aspects of company strategy, analyzing figures and implementing recommendations, Anca is also commercially aware, advising on the best path of growth for the business. Mrs. Dinu plays a critical role in partnering with the senior leadership team in strategic decision making and operations so as Techno Engineering & Associates continues to enhance its quality programming and build capacity. She leads and manages the budgeting process, coordinates corporate finance, manages company policies regarding capital requirements, debt, taxation, equity and acquisitions, controls all financial transactions and accountancy matters, including audit systems, monitors progress and changes and keeps the senior leadership team abreast of the organization’s financial status. Prior to joining Techno Engineering & Associates, Anca held the Financial Manager position for various international construction companies operating worldwide.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/anca-dinu-52a4b0a8/');
        }
        if (emp_id == 'about-employee3'){
            $('.about .modal-title').html('ALINA PETRESCU');
            $('.about .modal-body p').html('Alina Petrescu is the Global Business Development Director of Techno Engineering & Associates Group (TE&A). With an interesting career spanning over 15 years of hands-on experience in financial and operations management, business strategy and development, she has worked at Senior Executive Level with International Boards of Directors, Banks and Consultants.<br><br>She has acquired specialisms and skills in major international civil engineering projects under FIDIC conditions of contract as CFO and Legal Representative for a leading contractor in Portugal and from her former position of Senior Consultant in the Ministry of Economy, Energy and Business Environment in Romania. Her experience encompasses the diverse spectrum of coordination of management activities, preparation of budgets, preparation of tenders, cash flow forecasts, contracts and human resources management.<br><br>Alina holds a Masters Degree from the Faculty of Economics within the University of Porto, Portugal in addition to a Bachelors Degree from the Faculty of Management within the Academy of Economic Studies in Bucharest, Romania. She has astute organizational and negotiation skills and the ability to prioritize multiple and complex tasks, often with high pressure deadlines.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/alina-petrescu-55b7002/');
        }
    }

    if (op == 'about-meet-op3'){
        if (emp_id == 'about-employee1'){
            $('.about .modal-title').html('CRISTINA BADEA');
            $('.about .modal-body p').html('Cristina Badea is a Claims Manager and the Head of Legal Department International with over 10 years’ experience in Romanian and International Construction Law, having represented several company’s interests in front of Courts, Authorities and Institutions, providing legal assistance, preparing and analyzing legal documents, contracts and supporting Human Resource’ Departments in respecting the labor contracts and legislation. She graduated from “Nicolae Titulescu” University, Bucharest, with a degree in Law and International Relations and her main responsibilities in Techno Engineering & Associates are to lead an in-house construction law department comprising 10 construction lawyers and to provide construction law and contract management assistance and specific legal advice in respect of construction law and Romanian Law generally to our clients. She has acted as co-counsel in various ICC arbitrations and Dispute Adjudication procedures.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/cristina-badea-b0a59775/');
        }
        if (emp_id == 'about-employee2'){
            $('.about .modal-title').html('DENITSA HARIZANOVA');
            $('.about .modal-body p').html('Denitsa Harizanova attained an Engineer Master’s Degree from the Technical University of Sofia. She has over 20 years of professional experience in the field of infrastructure construction, which she gathered during her time as a Technical Assistant in a Consulting and Supervising Engineering Company, and the time in her capacity of Quality Assurance Manager, Quantity Surveyor, Deputy Project Manager and Project Manager on prestigious infrastructure projects in Bulgaria under FIDIC Conditions of Contract for Construction and Design-Built.<br><br>Denitsa had also fulfilled a position of Head of Sector “Implementation of Projects” in pre-accession “PHARE Program” Department of the Road Infrastructure Agency on behalf of the Ministry of Regional Development and Public Works of Bulgaria. Her extensive experience provides her with a unique competence and understanding of projects and contracts management and troubleshooting approaches of Contractors, Consulting Engineers and Employers alike, at first hand.<br><br>She undertakes her responsibilities reliably and is hard-working, self-motivated and trustworthy. For the benefit of our clients Denitsa introduces her skills and dedication into Techno Engineering & Associates in the position of the Claims Manager & Country Manager for our operations in Bulgaria.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/denitsa-harizanova-8b00311b/');
        }
        if (emp_id == 'about-employee3'){
            $('.about .modal-title').html('OFELIA GANEA');
            $('.about .modal-body p').html('Ofelia Ganea is Techno Engineering & Associates’ Claims Manager & Head of Forensic International. She is a graduate Mechanical Engineer with a Master Degree in the Engineering in Designing and Manufacturing of Products (Polytechnic University) and she has more than 15 years’ experience in Planning, Progress Monitoring and Management of Delays using “Time Impact Analysis” techniques, Integrated Planning of scheduling and resource allocation. During these years of experience, she was involved in planning of Road and Bridge Projects, Civil Projects, Waste Water Treatment Plant Projects and Contract Management under FIDIC Conditions of Contract.<br><br>She provided consultancy services for the Implementation of Primavera system including assistance of the beneficiary – starting from the determination of the Project Management necessities and ending with project methodology, testing of the prototypes and project development, training services.<br><br>She has spent time in UK and USA dealing with Expert Witnesses in delay analysis regarding international arbitration proceedings. She is an Expert Witness in Forensic Delay Analysis.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/ofelia-ganea-badea-8544b610/');
        }
        if (emp_id == 'about-employee4'){
            $('.about .modal-title').html('GIOVANNI RIGONI');
            $('.about .modal-body p').html('Giovanni Rigoni  is the Claims Manager & Head of Contracts Department of Techno Engineering and has over 35 years of professional experience in the civil engineering industry being involved for many years in Dispute Settlement with FIDIC based contracts and Contract Management thereof, thus providing technical and contract management assistance to many international Consulting Firms and Contractors.<br><br>In the early stages of his career, after obtaining his BSc in Civil Engineering, he acquired site experience on various projects in Italy and Africa. He soon became involved in large dams/hydroelectric power plants projects such as Gilgel Gibe Hydroelectric Dam in Ethyopia. However his project experience includes also highways, motorways and bridges, railways, water supply and sewerage systems, land reclamation and civil buildings.<br><br></br>During more than 20 years of international experience, Giovanni closely worked with international Consulting Firms and Contractors following the contract clauses implementation, coordinating projects both on the Contractor’s and the Engineer’s side. In particular he became skilled in contract management, cost control, cross-checking budget-closing, planning and managing plant requirements and subcontractors. Recently, he has obtained a Master of Laws with Merit after having followed an approved postgraduate programme in Construction Law and Arbitration. He undertakes his responsibilities reliably and is hard working, self-motivated and trustworthy.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/giovanni-battista-rigoni-18142449/');
        }
        if (emp_id == 'about-employee5'){
            $('.about .modal-title').html('FLORIN MARES');
            $('.about .modal-body p').html('Florin Mares is Claims Manager and Head of QS & Quantum Department International. He is a Graduate Civil Engineer with more than 20 years’ experience in Quantity Surveying and Contract Management within the civil engineering industry environment (roads, major bridges, light rail and airports). During his work experience he was involved in all aspects of measurement of works, financial administration of medium and major civil engineering projects and Contract Management under FIDIC Conditions of Contract.<br><br>Adept at all aspects of financial control in respect of all the routine site based duties such as variation orders, rates’ preparation and agreement, interim payment certifications, final accounts, estimations, cash-flows’ forecast and claims’ resolutions. He specializes in quantum analysis forming part of cost based claims for damages and loss.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/florin-mares-688a2030/');
        }
    }

    if (op == 'about-meet-op4'){
        if (emp_id == 'about-employee1'){
            $('.about .modal-title').html('CLIVE HORRIDGE');
            $('.about .modal-body p').html('Clive Horridge has a career in Civil Engineering spanning more than 45 years. Most of his experience was gained with Corderoy on numerous major Motorway projects in the United Kingdom under the ICE 4th and 5th Edition and the various CESSM Conditions of Contract. More recently, over the last 10 years he gained specific experience on major projects in the Middle East while with Parsons Group working in Romania and in Middle East.<br><br>Since joining Techno Engineering & Associates in 2006, Clive has become involved with Motorway, Road and Rail Rehabilitation projects under the FIDIC Conditions of Contract in its various forms. Over the years, Clive has developed an in-depth knowledge of Construction Contract generally, not only under the Forms of Contract above, but an understanding of the working practice, interpretation and of course, project specific application of contract.<br><br>As a seasoned “veteran” in the Construction industry, he has played a significant part in Contract Management for many years, founded on “old school” principles and offering unbiased contractual guidance to Project Managers in both the role of the Engineer and the Contractor. Utilizing his professional experience, Clive has contributed vital input into claim assessment both in quantum and more specifically, contractual validity.<br><br>As Senior Contracts Advisor, Clive will approach each of the challenging and widely varied spectrum of tasks with an open-mind and impartiality, required to achieve Client expectations. Clive is an Expert Witness who has given evidence on Quantum matters in numerous ICC arbitrations and Dispute Adjudication procedures.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/clive-horridge-b8110527/');
        }
        if (emp_id == 'about-employee2'){
            $('.about .modal-title').html('CRISTINA PIRJAN');
            $('.about .modal-body p').html('Cristina Pirjan is an experienced civil engineer who has been involved in contract management, design studies for industrial projects, claims resolution and quantity surveying, currently holding the position of Senior QS Advisor within Techno Engineering & Associates. After graduating from the Faculty of Electromechanical Engineering / Industrial Robots section she has spent the early stages of her professional development working for a Belgian company where she performed various technical designs. Afterwards, she moved back to Romania and her career matured in the field of Civil Engineering where she was exposed to major railway, motorway, roads and bridges, water and wastewater projects while obtaining a second degree from the Faculty of Civil Engineering.<br><br>Ever since then, she performed contract management assistance, contract risk events identification, quantity surveying, quantum compendium claim preparation, preparation of Contractor’s Statement of Case for disputes related to technical issues and preparation of reports on Contractor’s Variation Proposals to be appended to the Contractor’s Statement of Case.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/cristina-pirjan-798690ba/');
        }
    }

    if (op == 'about-meet-op5'){
        if (emp_id == 'about-employee1'){
            $('.about .modal-title').html('ERDAL ASIM');
            $('.about .modal-body p').html('Erdal Asim studied Civil Engineering and he matured into the area of Planning, Budget and Cost Control during over 20 years of experience in fields like Civil and Industrial works, Nuclear Power and Gas Power. During his international career Erdal has provided services to medium and major companies across Europe, S-E Asia and the Middle East.<br><br>Erdal introduces his skills and dedication into Techno Engineering & Associates as the Manager of Forensic Planning Department International. He has an extensive background in resources and cost analysis, engineering analysis, civil engineering, project planning and Critical Path Method project Scheduling (by the use of Oracle / Primavera specialized software), focusing on large civil works (highways, roads, infrastructures, etc.) Erdal has gathered a large experience in planning, preparation and presentation of Technical Specifications and Method Statements, Time Impact Analysis for Dispute resolution and Extension of Time.<br><br>As Senior Planning Engineer, one of his roles was also the measurement of executed works for interim and final accounts and the preparation and presentation of designs – written parts and drawings under AutoCAD and Chief Architect X2 software – for construction works.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/asim-erdal-751aa02a/');
        }
        if (emp_id == 'about-employee2'){
            $('.about .modal-title').html('VIOLETA DINU');
            $('.about .modal-body p').html('Violeta Dinu is a Nuclear Power Systems Engineer specialized in Power Systems Design Engineering and Construction Contract Management with 25 years of professional experience. Violeta has gathered most of her experience during her time as a designer, consulting engineer and works supervisor within projects of various disciplines in Romania and USA, including Conventional Power Plants. Violeta has worked as a systems engineer for projects in USA and for the last ten years she was working on several civil construction projects in Bucharest. During her professional career, Violeta has gathered a broad knowledge and professional understanding of the structure of civil construction technical design and contract management, from both perspectives having been the Systems Engineer and Tendering and Contracting Consultant as well as a member of the Contractor’s senior management staff. Her know-how and experience provide her with a global understanding of project management as well as project technical design. For the benefit of our clients, Violeta introduces her skills and dedication into Techno Engineering & Associates as being our Technical Director and Manager of QS & Quantum Department International. ');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/violeta-oana-dinu-b0108b38/');
        }
        if (emp_id == 'about-employee3'){
            $('.about .modal-title').html('MIHAELA VULPESCU');
            $('.about .modal-body p').html('Mihaela Vulpescu graduated as Civil Engineer and she is holding a Master Degree in Construction Management and over 7 years’ experience in procurement process for the contracts of services and works needed to implement the projects financed by the European Commission funds (EX-ISPA, Cohesion, European Regional Development Funds), as well as the projects financed by the un-refundable / refundable funds within International Financing Institutions (International Bank for Reconstruction and Development, European Investment Bank, European Bank for Reconstruction and Development, Japan Bank for Investment and Cooperation). She has acquired specific expertise in procurement for major international projects under FIDIC Conditions of Contract, predominantly in the roads, national roads rehabilitation, motorways and bypasses sectors. She has over 10 year experience in contract management and she has developed a thorough knowledge of various types of contracts, both the FIDIC Forms of Contract. She demonstrates an openly communicative disposition at every level of management, with consultants, contractors, owners / employers and with any other representatives of official institutions.<br><br>Mihaela introduces her skills and dedication into Techno Engineering & Associates as the Manager of Contracts Department, standing as a most valuable asset for the many projects in which she is involved.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/mihaela-vulpescu-14637182/');
        }
        if (emp_id == 'about-employee4'){
            $('.about .modal-title').html('IOANA OTILIA ISAC');
            $('.about .modal-body p').html('Ioana Isac graduated from Bucharest University with a degree in Romanian Law and together with her natural attention to detail her abilities have been complimented by formal FIDIC training with regular attendance to professionally organized seminars. On many occasions, Ioana has been responsible for the preparation of complete packages of referrals to Dispute Adjudication and has been specifically involved with the preparation and control of documentation and exhibits for submissions to the ICC Court of Arbitration.<br><br>In her capacity of Manager of the Claims Coordination Department, Ioana provides guidance and support to all departments involved in the complex activity of producing claims for our clients, predominantly those for Extension of Time for Completion and associated costs and claims for Changes in costs and legislation. Ioana also acts as a mediator between the company and the clients during the intensive process of exchanging information whilst the claim and its report are being prepared. Further, Ioana and her team perform the quality check of all the documents forming such submissions, which are produced by the Legal, Contracts, Planning and Technical Departments during the preparation and issuance of the claims.<br><br>Her department keeps a tight schedule to ensure that claims are submitted to the Engineer/Employer timely in accordance with the respective contracts our clients have with their Employers and the Consultancy Service Agreements entered into with TE&A. Ioana Isac is also responsible for essential in-house training with reference to the respective Contract, the nexus between the applicable legislation and the Conditions of Contract, Risk Assessment, Claims preparation, Dispute resolution and all other interrelated aspects of our services.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/otilia-ioana-isac-7851bb9b/');
        }
        if (emp_id == 'about-employee5'){
            $('.about .modal-title').html('VERONICA SIDON');
            $('.about .modal-body p').html('Veronica Sidon is the manager of the Translation & Editing Department and a graduate from Bucharest University, in French and Romanian language and literature. Soon after the graduation she got her Cambridge Certificate in Advanced English (CAE) and started a career as a translator, specializing in technical and legal translations and interpretation.<br><br>She has a long experience with TE&A, being one of the first members of the team since the establishment of the company. Her interests and professional activities go beyond the field of technical documents. Veronica translated several books for a reputable publishing house in Bucharest. Her linguistic skills recommend her as a suitable coordinator of her department, who supervises the timely delivery of qualitative and accurate contractual translations (i.e. claim and dispute reports, legal requests submitted to the court, technical reports etc.), which are essential in the process of legal representation of our clients’ interests before the international arbitral courts.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/company/techno-engineering-&-associates/');
        }
        if (emp_id == 'about-employee6'){
            $('.about .modal-title').html('CODRUT ISPASOIU');
            $('.about .modal-body p').html('Codrut Ispasoiu is a dependable, conscientious, detailed-oriented certified IT Professional with a background experience in multinational environment of more than 15 years with progressively increasing level of responsibility. Highly skilled in Microsoft technologies, with extensive experience in project and program management including cost, schedule and technical baseline management, Codrut has been part of many projects involving numerous resources and succeeded to deliver a cost-effective solution every time.<br><br>Specialized in a wide variety of software solution provided by Symantec, HP, DELL, Oracle, Adobe he’s a reliable specialist with up to date knowledge. As part of the Techno Engineering & Associates team he is actively involved in the development of the IT infrastructure with regards to our company’s expansion programme.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/codrutispasoiu/');
        }
        if (emp_id == 'about-employee7'){
            $('.about .modal-title').html('EMILIAN DUMITRU');
            $('.about .modal-body p').html('Mr. Emilian Dumitru is a high caliber professional possessing diverse technical knowledge gained over 14 years of extensive experience in the construction industry and a motivated and talented professional keen to develop long term and sustainable career path within Techno Engineering & Associates Group. He graduated as a Civil Engineer from the Faculty of Railways, Roads and Bridges, and over the years has gained proven expertise in design and construction of railway and infrastructure projects around the world, and by serving over 2 years of professional experience with recognized international contractors and possessing  in-depth knowledge of both tender and contract planning practice. He is a certified Project Management Professional and well accustomed in the use of current and innovative planning tools and software packages such as MS Project, Primavera, AutoCAD. He joined our company initially in 2007 as a Planning Engineer and rejoined us in 2016 as Senior Planning Engineer and Delay Analyst, and was promoted to Deputy Manager of our Forensic Planning Department International effective 1 December 2017. His new responsibilities include shared managerial workload, reviewing the work produced in the department in order to ensure we continue to provide high quality services to our clients. His diverse knowledge of the construction industry makes him an appreciated and well respected member of any project team.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/dumitruemilian/');
        }
        if (emp_id == 'about-employee8'){
            $('.about .modal-title').html('RAZVAN DOBRE');
            $('.about .modal-body p').html('Mr. Razvan Dobre is an enthusiastic and highly motivated professional currently in the position of Unit Chief Quantity Surveyor in the Quantity Surveying & Quantum Department International of Techno Engineering & Associates. His academic record includes a Bachelor’s Degree in Building Engineering and a Master’s Degree in Construction and Contract Management. In the early stages of his career he gained valuable experience during his time as a Site Engineer and Cost Controller in major infrastructure projects. Since then, he has specialized in construction cost based variations and quantum damages analysis services for International Contractors. For the past four years, he has been involved in the preparation of quantum, dealing with a broad range of cost disciplines such as variations dealing with prolongation, disruption damages, financing charges and profit and the like. He has a clear understanding of the role and responsibilities associated with civil, building and industrial engineering. Having the ability to provide support for multiple concurrent priorities, he is able to establish, maintain and develop effective working relationships with service users, operational teams, partners and colleagues alike. He possesses a broad range of technical, personal effectiveness and leadership skills and the use of rigorous logic and methodologies to ascertain effective solutions to complex problems.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/in/razvan-dobre-2aaa17168/');
        }
        if (emp_id == 'about-employee9'){
            $('.about .modal-title').html('LIVIU MUSA');
            $('.about .modal-body p').html('Liviu Musa is an experienced Chief Accountant with over 13 years’ experience in the financial-accounting field, with a specialist background of taxation, matters gained within an audit, tax and consultancy company, where during a period of 5 years, he accumulated valuable expertise and experience. He has been a member of the Romanian Chartered and Authorized Accountants (CECCAR) since 2006 and a member of the Romanian Chamber of Tax Advisers since 2007. In 2002 and 2003, he completed two post-graduate studies, specializing in “Audit and Accounting Management” and “Management Information Systems”, at the Academy of Economic Studies in Bucharest.');
            $('.about .modal-footer #linkedin-modal').attr('href','https://www.linkedin.com/company/techno-engineering-&-associates/');
        }
    }
}