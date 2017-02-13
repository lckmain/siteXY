$(function() {

    $("#sticker").sticky({topSpacing:0});

    $('.analytics-left__content').hover(function(){
        $('.first-list').addClass("active");
    },function(){
        $('.menus-lists').removeClass("active");
    });

    $('.rol').hover(function(){
        $('.second-list').addClass("active");
    },function(){
        $('.menus-lists').removeClass("active");
    });

});
