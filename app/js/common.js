$(function() {

	$("#sticker").sticky({topSpacing:0});

    $('.analytics').hover(function(){
        $('.first-list').addClass("active");
    },function(){
        $('.menus-lists').removeClass("active");
    });

    $('.rol').hover(function(){
        $('.second-list').addClass("active");
    },function(){
        $('.menus-lists').removeClass("active");
    });

		$('.prodvigenie-wrap').hover(function(){
        $('.six-list').addClass("active");
    },function(){
        $('.menus-lists').removeClass("active");
    });

		//scroll
		function getTargetTop(a) {
		    var c = a.attr("href");
		    var b = 0;
		    return $(c).offset().top - b
		}
		$('.menus-lists[href^="#"]').click(function (a) {
		    var b = getTargetTop($(this));
		    $("html, body").animate({scrollTop: b}, 1500);
		    a.preventDefault()
		});
		var sections = $('.menus-lists[href^="#"]');
		function checkSectionSelected(c) {
		    var a = 100;
		    var b;
		    for (b = 0; b < sections.length; b++) {
		        var e = $(sections[b]);
		        var d = getTargetTop(e);
		        if (c > d - a && c < d + a) {
		            sections.removeClass("active");
		            e.addClass("active")
		        }
		    }
		}
});
