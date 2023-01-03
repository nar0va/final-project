// function testimonials_hover(){

//     var list = jQuery('.testimonials .testimonials_inner .right .image_list ul li');

//     list.on('mouseenter',function(){
//         var element = jQuery(this);

//         var elIndex = element.index()+1;

//         list.removeClass('active');
//         element.addClass('active');
//         element.closest('.testimonials').find('.quotes ul li').removeClass('active');
//         element.closest('.testimonials').find('.quotes ul li:nth-child('+elIndex+')').addClass('active');
//     });
// }

// testimonials_hover();

// function person2(){

//   // var show = document.getElementsByClassName("person1");

//   $(document).ready(function(){
//     $("#hide").click(function(){
//       $("person1").hide();
//     });
//     $("#show").click(function(){
//       $("person2").show();
//     });
//   });
// }

// person2();


function waxon_tm_modalbox_about(){

    var modalBox	= jQuery('.waxon_tm_modalbox_about');
    var opener		= jQuery('.about .btnn a');
    var closer		= modalBox.find('.close');

    opener.on('click',function(){
        modalBox.addClass('opened');
        return false;
    });
    closer.on('click',function(){
        modalBox.removeClass('opened');
        return false;
    });
}
waxon_tm_modalbox_about();




// function tdProgress(container){

//     container.find('.progress_inner').each(function() {
//         var progress 		= jQuery(this);
//         var pValue 			= parseInt(progress.data('value'), 10);
//         var pColor			= progress.data('color');
//         var pBarWrap 		= progress.find('.bar');
//         var pBar 			= progress.find('.bar_in');
//         pBar.css({width:pValue+'%', backgroundColor:pColor});
//         setTimeout(function(){pBarWrap.addClass('open');});
//     });
// }

// jQuery('.waxon_progress').each(function() {

//     var pWrap 			= jQuery(this);
//     pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
// });


function waxon_tm_filter_opener(){

    var button	= jQuery('.portfolio .portfolio_filter .wrapper a');
    var list	= jQuery('.portfolio .portfolio_filter ul li');

    button.on('click',function(){
        var element = jQuery(this);
        if(element.hasClass('opened')){
            element.removeClass('opened');
            list.removeClass('opened');
        }else{
            element.addClass('opened');
            list.each(function(i){
                var ele = jQuery(this);
                setTimeout(function(){ele.addClass('opened');},i*100);
            });
        }
        return false;
    });
}
waxon_tm_filter_opener();


function portfolio(){

    if(jQuery().isotope) {

        // Needed variables
        var list 		 = jQuery('.portfolio .portfolio_inner ul');
        var filter		 = jQuery('.portfolio .portfolio_filter ul');

        if(filter.length){
            // Isotope Filter 
            filter.find('a').on('click', function(){
                var selector = jQuery(this).attr('data-filter');
                list.isotope({ 
                    filter				: selector,
                    animationOptions	: {
                        duration			: 750,
                        easing				: 'linear',
                        queue				: false
                    }
                });
                return false;
            });	

            // Change active element class
            filter.find('a').on('click', function() {
                filter.find('a').removeClass('current');
                jQuery(this).addClass('current');
                return false;
            });	
        }
    }
}
portfolio();


function waxon_tm_testimonials_effect(){

    var list	= jQuery('.waxon_tm_testimonials .testi_inner .right .image_list ul li');

    list.on('mouseenter',function(){
        var element = jQuery(this);
        var elIndex = element.index()+1;
        list.removeClass('active');
        element.addClass('active');
        element.closest('.waxon_tm_testimonials').find('.quote_list ul li').removeClass('active');
        element.closest('.waxon_tm_testimonials').find('.quote_list ul li:nth-child('+elIndex+')').addClass('active');
    });
}
waxon_tm_testimonials_effect();

