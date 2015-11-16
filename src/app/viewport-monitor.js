define(['jquery'], function ($) {

    var exports = function(element,options) {
        var viewport = $(element);
        $(window).on("resize", function() {
            viewport.text($(this).width());
        }).resize();
        // the element parameter contains a reference
        // to the '<a data-module="IMap"> ... </a>' node
    };
    return exports;
});