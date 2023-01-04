function about_modal(){

    var modalBox	= jQuery('.about_modal');
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
about_modal();



function filter_open(){

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
filter_open();


function testimonials_hover(){

    var list	= jQuery('.testimonials .testimonials_inner .right .image_list ul li');

    list.on('mouseenter',function(){
        var element = jQuery(this);
        var elIndex = element.index()+1;
        list.removeClass('active');
        element.addClass('active');
        element.closest('.testimonials').find('.quote_list ul li').removeClass('active');
        element.closest('.testimonials').find('.quote_list ul li:nth-child('+elIndex+')').addClass('active');
    });
}
testimonials_hover();


const list = document.querySelector('.list'),
items = document.querySelectorAll('.block-items')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch(targetId) {
            case 'all':
                getItems('block-items')
                break
            case 'vimeo':
                getItems(targetId)
                break
            case 'youtube':
                getItems(targetId)
                break
            case 'soundcloud':
                getItems(targetId)
                break
            case 'image':
                getItems(targetId)
                break
        }

    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}
