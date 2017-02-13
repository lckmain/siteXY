$(function() {

    $("#sticker").sticky({topSpacing:0});

    $('.rol').hover(function(){
        $('.second-list').addClass("active");
    },function(){
        $(this).prev().removeClass("active");
    });

});
