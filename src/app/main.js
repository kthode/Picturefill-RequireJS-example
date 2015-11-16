define(['jquery', 'picturefill'], function ($) {
    var viewport = $("#viewport");
    $(window).on("resize", function() {
        viewport.text($(this).width());
    }).resize();
});