(function($) {

    $.fn.changeNavStyle = function () {
		let	$this = $(this);

        $(window).scroll(function () {    
            let scroll = $(window).scrollTop();
            let topbarHeight = $("#topbar").height();

            if (scroll >= topbarHeight) {
                $this.addClass("topbar--bg");
            } else {
                $this.removeClass("topbar--bg");
            }
        });
    }

})(jQuery);