$(document).ready(function(){
    $('.portfolio .portfolio-nav').on('click','ul li a', function(){
        let nav_link_id = $(this).attr('id');
    
        $('.portfolio .portfolio-nav ul li a').removeClass('portfolio-active');
        $("#"+nav_link_id).addClass('portfolio-active');
    
        let img_path = '';
        let text_path = '';
        let album_id = '';
        let box_numb = 0;
        if (nav_link_id == 'portfolio1') {img_path = '/national/nat';         text_path = 1; box_numb = 35; album_id = '#national';}
        if (nav_link_id == 'portfolio2') {img_path = '/railways/rail';        text_path = 2; box_numb = 5; album_id = '#railways';}
        if (nav_link_id == 'portfolio3') {img_path = '/wwtp/wwtp';            text_path = 3; box_numb = 12; album_id = '#wwtp';}
        if (nav_link_id == 'portfolio4') {img_path = '/miscellaneous/miscel'; text_path = 4; box_numb = 3; album_id = '#miscel';}

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
                $('#album-pic'+i+' img').attr('src','/img/'+img_path+i+'.jpg');
                $('#album-text'+i).html(GetTextPortfolio(i, text_path));
            }
        }).fadeIn('slow');
    });
    



    // DEFAULT NATIONAL ROADS AND MOTORWAY
    const default_box_numb = 35;
    for(let i=1; i<=default_box_numb; i++){
        $('#album-pic'+i+' img').attr('src','/img/national/nat'+i+'.jpg');
        $('#album-text'+i).html(GetTextPortfolio(i, 1));
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


function GetTextPortfolio(index, option)
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
            case 7: text = 'Design and Build of NR 18 Baia Mare – Sighetul Marmatiei AKTOR SA'; break;
            case 8: text = 'Rehabilitation and Partial Reconstruction of Road II-19, Section “Razlog – Bansko – Gotse – Delchev - Sadovo” PROODEFTIKI SA'; break;
            case 9: text = 'Rehabilitation of NR 76, Beius – Oradea SCT Group'; break;
            case 10: text = 'Rehabilitation of NR 6, Section Domasnea – Caransebes, km 408+895 – km 449+960, including construction of Domasnea bypass PANTECHNIKI SA'; break;
            case 11: text = 'Rehabilitation and modernization – CR 107 and CR 107D Alba – Mures MONTEADRIANO ENGENHARIA & CONSTRUCAO SA'; break;
            case 12: text = 'Rehabilitation NR 66, Section Filiasi – Rovinari, km 0+000 – km 48+900 FCC CONSTRUCCION SA'; break;
            case 13: text = 'Bridges rehabilitation on NR 15, km 182+880 at Toplita, NR 12A km 70+235 and km 70+820 at Ciobanus, NR 12 A km 71+592 – Ciobanus km 74+315 – Straja CARENA SA Italy '; break;
            case 14: text = 'Rehabilitation of NR 1 (E68), Section Sercaia – Brasov County Limit/Sibiu, km 173+800 – km 220+000 SC ASHROICH ROMANIA SRL'; break;
            case 15: text = 'Transit Roads Rehabilitation Project III, Lot 9, Rehabilitation of the Road I-1, Vidin – Montana STRABAG'; break;
            case 16: text = 'Rehabilitation of NR 6, Section Drobeta Turnu Severin – Lugoj, km 450+960 – km 495+500 COLAS'; break;
            case 17: text = 'Traffic Fluidization and widening NR1, Section Baneasa Airport – Otopeni Overpass, km 7+535 – km 11+938 LENA ENGENHARIA CONSTRUCOES SA'; break;
            case 18: text = 'Rehabilitation of National Road 1(E68), Section County Limit Brasov/Sibiu – Vestem, km 261+130 – km 296+293 COLAS'; break;
            case 19: text = 'Rehabilitation of National Road 1 (E68), Section Sercaia – Sibiu, Lot C, km 220+000 – km 261+130 COLAS'; break;
            case 20: text = 'Rehabilitation of NR 1C, Section Dej – Cluj and Section Livada – Dej, km 0+000 – km 6+500 and km 38+000 – km 61+528 FCC CONSTRUCCION SA'; break;
            case 21: text = 'Civil Road Rehabilitation works for CR 607 C Development of Ilovita – Bahna – Ciresu – Marga road INTRAKAT Contratista principal: UTE Athinaiki Techniki – C. Balafas SA'; break;
            case 22: text = 'Rehabilitation of NR 56A, Bucura – Simian, km 45+000 – km 79+140 TIRRENA SCAVI'; break;
            case 23: text = 'Rehabilitation of CR 131 in order to improve the regional traffic TIRRENA SCAVI'; break;
            case 24: text = 'Rehabilitation of NR 6, Section Mehadia – Domasnea, km 388+000 – km 408+895 TIRRENA SCAVI'; break;
            case 25: text = 'Rehabilitation of NR 6, Section Bahna – Mehadia, km 358+000 – km 388+000, including Mehadia bypass TIRRENA SCAVI'; break;
            case 26: text = 'Rehabilitation of NR 6, Section Drobeta Turnu Severin – Bahna, km 332+150 – km 358+000, including Drobeta Turnu Severin Bypass TIRRENA SCAVI'; break;
            case 27: text = 'Rehabilitation of NR 5, Section Adunatii Copaceni – Giurgiu, km 23+200 – km 59+100 GRASSETTO LAVORI SA'; break;
            case 28: text = 'Construction of Levan (near Fier) – Tepelene road, Albania UTE PIR – POOL – IDROESSE SA'; break;
            case 29: text = 'Rehabilitation of NR 6, Section Craiova – Filiasi, km 233+200 – km 268+390 GRASSETTO LAVORI SA'; break;
            case 30: text = 'Rehabilitation works for NR 1C Cluj – Livada, km 8+300 – km 38+000  FCC CONSTRUCCION SA'; break;
            case 31: text = 'Rehabilitation of NR 66, Section Petrosani – Baru, km 131+000 – km 154+000 ITALSTRADE SpA'; break;
            case 32: text = 'Rehabilitation of NR 17 County limit Cluj/ Bistrita Nasaud – Bistrita, km 6+500 – km 58+900 PROODEFTIKI SA'; break;
            case 33: text = 'Road Rehabilitation IV Project, NR 66 Petrosani – Simeria, Section Baru – Hateg, km 154+000 – km 179+917 UTE PROODEFTIKI SA – CONTRANSIMEX SA'; break;
            case 34: text = 'Rehabilitation of NR 6, Section Craiova – Drobeta Turnu Severin, km 298+000, km 332+150 STRABAG AG RF BRVZ ROMANIA'; break;
            case 35: text = 'Rehabilitation of NR 6, Section Craiova – Drobeta Turnu Severin, km 268+390 – km 298+000 UTE PROODEFTIKI SA – ATHENA SA'; break;
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

