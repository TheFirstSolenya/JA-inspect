var VideoEmbedComponent=function(n){function r(){t.each(function(){var t=n(this),r=n(this).find(".video-control");r.on("click",function(){i(t,n(this))});r.on("keydown",function(){e.key==="Enter"&&i(t,n(this))})})}function i(n,t){var i=new Vimeo.Player(n.find("iframe"));t.hasClass("video-paused")?(t.removeClass("video-paused"),i.play()):(t.addClass("video-paused"),i.pause())}function u(){t.length&&r()}var t=n("body").find(".video-embed-component");return{init:u}}(jQuery);$(window).on("load",function(){VideoEmbedComponent.init()})