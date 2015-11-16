define(['jquery'], function ($) {

    var exports = function(element, options) {
        this._element = element;
        this._options = options || {};
        this._initialize();
    };
    
    exports.prototype = {

        /**
         * Initialize module.
         *
         * @memberof 
         * @static
         * @private
         */
        _initialize: function () {
            console.log('Initialized app/viewport-monitor with options', this._options, 'on', new Date());
            var _this = this;
            $(window).on("resize", function() {
                $(_this._element).text($(this).width());
            }).resize();
        },

        /**
         * Clean up when unloading this module.
         *
         * @memberof 
         * @static
         * @public
         */
        unload: function () {

        }

    };
    return exports;
});