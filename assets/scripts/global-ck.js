/* ---------------------------------------------------------------------
Global JavaScript
Authors: Patrick Jannette
------------------------------------------------------------------------ */// Namespace Object
var CITY = CITY || {};

(function(e, t) {
    e(function() {
        t.MobileNavToggle.init();
        t.AdvancedSearchToggle.init();
        t.BrowserDeviceDetection.init();
        t.IsoptopeInitializer.init();
    });
    t.MobileNavToggle = {
        $navContainer: undefined,
        $toggleBtn: undefined,
        init: function() {
            var t = e(".js-globalNav-target"), n = e(".js-globalNav-toggle");
            if (!t.length || !n.length) return;
            this.$navContainer = t;
            this.$toggleBtn = n;
            this.bind();
        },
        bind: function() {
            var e = this;
            this.$toggleBtn.on("click", function(t) {
                t.preventDefault();
                e.toggleNav();
            });
        },
        toggleNav: function() {
            this.$navContainer.toggleClass("globalNav-isOpen");
            this.$toggleBtn.toggleClass("isActive");
        }
    };
    t.AdvancedSearchToggle = {
        $advSearchContainer: undefined,
        $advSearchBtn: undefined,
        init: function() {
            var t = e(".js-advSearchTarget"), n = e(".js-advSearchToggle");
            if (!t.length || !n.length) return;
            this.$advSearchContainer = t;
            this.$advSearchBtn = n;
            this.bind();
        },
        bind: function() {
            var e = this;
            this.$advSearchBtn.on("touchstart click", function(t) {
                t.preventDefault();
                e.toggleAdvSearch();
            });
        },
        toggleAdvSearch: function() {
            this.$advSearchContainer.toggleClass("advSearch-isOpen");
            this.$advSearchBtn.toggleClass("isActive");
        }
    };
    t.BrowserDeviceDetection = {
        userAgent: undefined,
        $html: undefined,
        init: function() {
            t.Features = t.Features || {};
            this.userAgent = navigator.userAgent.toLowerCase();
            this.$html = e("html");
            this.noTouch();
            this.isTouch();
            this.isIE10();
            this.isIE9();
            this.testIPad();
        },
        noTouch: function() {
            if (!("ontouchstart" in window)) {
                t.Features.noTouch = !1;
                this.$html.addClass("notouch");
                return;
            }
            t.Features.noTouch = !1;
        },
        isTouch: function() {
            if ("ontouchstart" in window) {
                t.Features.isTouch = !1;
                this.$html.addClass("istouch");
                return;
            }
            t.Features.isTouch = !1;
        },
        isIE10: function() {
            if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
                this.$html.addClass("isIE10");
                t.Features.isIE10 = !0;
                return;
            }
            t.Features.isIE10 = !1;
        },
        isIE9: function() {
            if (navigator.appVersion.indexOf("MSIE 9") !== -1) {
                this.$html.addClass("isIE9");
                t.Features.isIE9 = !0;
                return;
            }
            t.Features.isIE9 = !1;
        },
        testIPad: function() {
            if (this.userAgent.indexOf("ipad") > -1) {
                this.$html.addClass("ipad");
                t.Features.isIPad = !0;
                return;
            }
            t.Features.isIPad = !1;
        }
    };
    t.IsoptopeInitializer = {
        $isotopContainer: undefined,
        init: function() {
            var t = e(".wrapForIsotope");
            if (!t.length) return;
            this.$isotopContainer = t;
            this.bind();
        },
        bind: function() {
            e(function() {
                var t = e("#js-postTileContainer"), n = e(window);
                t.isotope({
                    itemSelector: ".js-postTileItem",
                    layoutMode: "masonry"
                });
                e(window).smartresize(function() {
                    var e = n.width();
                    e > 1110 ? t.isotope({
                        masonry: {
                            columnWidth: t.width() / 4
                        }
                    }) : e < 1110 && e > 800 ? t.isotope({
                        masonry: {
                            columnWidth: t.width() / 3
                        }
                    }) : e < 800 && e > 580 ? t.isotope({
                        masonry: {
                            columnWidth: t.width() / 2
                        }
                    }) : e < 580 && e > 420 && t.isotope({
                        masonry: {
                            columnWidth: t.width() / 2
                        }
                    });
                });
            });
        }
    };
})(jQuery, CITY);