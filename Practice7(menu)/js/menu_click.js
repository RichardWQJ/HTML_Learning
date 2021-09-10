jQuery(document).ready(function () {
    $(".menu-list .first-menu").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find("ul").slideToggle(500);
        $(this).siblings().find("ul").hide();
    })

    $(".menu-list .second-menu").click(function () {
        var $this = $(this);
        $(".second-menu").each(function () {
            if ($(this).hasClass("current")) {
                $(this).removeClass("current");
            }
        })
        $this.addClass("current").siblings().removeClass("current");
    })

    //  阻止事件冒泡
    $(".menu-list .first-menu ul").bind("click", function (event) {
        event.stopPropagation();
    });
});