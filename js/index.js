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

