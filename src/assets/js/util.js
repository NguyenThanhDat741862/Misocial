(function($) {

    let throttle = (cb, wait) => {
        let time = Date.now();
        return function() {
            if ((time + wait - Date.now()) < 0) {
                cb();
                time = Date.now();
            }
        }
    }

    $.horizontalScrollProgress = function () {
        let winScroll = $('body,html').scrollTop();
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        $("#progress__bar").css("width", `${scrolled}%`);
    }

    $.addToTopBtn = function () {
        

        $(window).scroll(throttle(function () {    
            let scroll = $(window).scrollTop();
            let bannerHeight = $("#banner").height();

            if (scroll >= bannerHeight) {
                $this.addClass("visible");
            } else {
                $this.removeClass("visible");
            }
        }, 90));
    }

    $.fn.changeNavStyle = function () {
		let	$this = $(this);

        $(window).scroll(throttle(function () {    
            let scroll = $(window).scrollTop();
            let topbarHeight = $this.height() - 5;

            if (scroll >= topbarHeight) {
                $this.addClass("topbar--bg");
            } else {
                $this.removeClass("topbar--bg");
            }
        }, 90));
    }

})(jQuery);