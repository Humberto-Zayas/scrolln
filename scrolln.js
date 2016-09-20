var elementPosition = $('.social-scroll').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('.social-scroll').css('position','fixed').css('top','0');
        } else {
            $('.social-scroll').css('position','static');
        }    
});