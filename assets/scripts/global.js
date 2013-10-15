/* ---------------------------------------------------------------------
Global JavaScript
Authors: Patrick Jannette
------------------------------------------------------------------------ */

// Namespace Object
var PHDL = PHDL || {};

// Pass reference to jQuery and Namespace
(function($, APP) {

    // DOM Ready Function
    $(function() {
        APP.MobileNavToggle.init();
        APP.AdvancedSearchToggle.init();
        APP.BrowserDeviceDetection.init();
    });

/* -------------------------------------------------------------------- 
MobileNavToggle
Toggles the mobile navigation
-------------------------------------------------------------------- */

APP.MobileNavToggle = {
    $navContainer: undefined,
    $toggleBtn: undefined,
    
    init: function() {
        var $navContainer = $('.js-globalNav-target');
        var $toggleBtn = $('.js-globalNav-toggle');
        if (!$navContainer.length || !$toggleBtn.length) {
            return;
        }
        this.$navContainer = $navContainer;
        this.$toggleBtn = $toggleBtn;
        this.bind();
    },
    
    bind: function() {
        var self = this;
        this.$toggleBtn.on('click', function(e) {
            e.preventDefault();
            self.toggleNav();
        });
    },
    
    toggleNav: function() {
        this.$navContainer.toggleClass('globalNav-isOpen');
        this.$toggleBtn.toggleClass('isActive');
    }
};

/* -------------------------------------------------------------------- 
AdvancedSearchToggle
Toggles the mobile navigation
-------------------------------------------------------------------- */

APP.AdvancedSearchToggle = {
    $advSearchContainer: undefined,
    $advSearchBtn: undefined,
    
    init: function() {
        var $advSearchContainer = $('.js-advSearchTarget');
        var $advSearchBtn = $('.js-advSearchToggle');
        if (!$advSearchContainer.length || !$advSearchBtn.length) {
            return;
        }
        this.$advSearchContainer = $advSearchContainer;
        this.$advSearchBtn = $advSearchBtn;
        this.bind();
    },
    
    bind: function() {
        var self = this;
        this.$advSearchBtn.on('click', function(e) {
            e.preventDefault();
            self.toggleAdvSearch();
        });
    },
    
    toggleAdvSearch: function() {
        this.$advSearchContainer.toggleClass('advSearch-isOpen');
        this.$advSearchBtn.toggleClass('isActive');
    }
};

/* ---------------------------------------------------------------------
Browser and Feature Detection

Creates APP.BrowserFeatureDetection object containing booleans for the following,
and if true, adds a class to the HTML element:
    noTouch   -> adds 'notouch' class to HTML element
    isTouch   -> adds 'istouch' class to HTML element
    isIE10 -> adds 'isIE10' class to HTML element

    isIPhone  -> adds 'iphone' class to HTML element
    isAndroid -> adds 'android' class to HTML element
------------------------------------------------------------------------ */

APP.BrowserDeviceDetection = {
    userAgent: undefined,
    $html: undefined,

    init: function() {
        APP.Features = APP.Features || {};
        this.userAgent = navigator.userAgent.toLowerCase();
        this.$html = $('html');
        this.noTouch();
        this.isTouch();
        this.isIE10();
        this.isIE9();
        this.testIPad();
        // this.testAndroid();
        // this.testIPhone();
    },

    noTouch: function() {
        if (!('ontouchstart' in window)) {
            APP.Features.noTouch = false;
            this.$html.addClass('notouch');
            return;
        }
        APP.Features.noTouch = false;
    },

    isTouch: function() {
        if ('ontouchstart' in window) {
            APP.Features.isTouch = false;
            this.$html.addClass('istouch');
            return;
        }
        APP.Features.isTouch = false;
    },

    isIE10: function() {
        if(navigator.appVersion.indexOf("MSIE 10") !== -1) {
            this.$html.addClass('isIE10');
            APP.Features.isIE10 = true;
            return;
        }
        APP.Features.isIE10 = false;
    },

    isIE9: function() {
        if(navigator.appVersion.indexOf("MSIE 9") !== -1) {
            this.$html.addClass('isIE9');
            APP.Features.isIE9 = true;
            return;
        }
        APP.Features.isIE9 = false;
    },

    testIPad: function() {
        if(this.userAgent.indexOf("ipad") > -1) {
            this.$html.addClass('ipad');
            APP.Features.isIPad = true;
            return;
        }
        APP.Features.isIPad = false;
    }

    // testAndroid: function() {
    //     if(this.userAgent.indexOf("android") > -1) {
    //         this.$html.addClass('android');
    //         APP.Features.isAndroid = true;
    //         return;
    //     }
    //     APP.Features.isAndroid = false;
    // },

    // testIPhone: function() {
    //     if(this.userAgent.indexOf("iphone") > -1 || this.userAgent.indexOf("ipod") > -1) {
    //         this.$html.addClass('iphone');
    //         APP.Features.isIPhone = true;
    //         return;
    //     }
    //     APP.Features.isIPhone = false;
    // },

};

}(jQuery, PHDL));