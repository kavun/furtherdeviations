define(['jquery'], function () {

	var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
	g.src='//www.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s)}(document,'script'));

	/**
	* Log all jQuery AJAX requests to Google Analytics
	*/
	if (typeof _gaq !== "undefined" && _gaq !== null) {
	    $(document).ajaxSend(function(event, xhr, settings){
	        _gaq.push(['_trackPageview', settings.url]);
	    });
	}

	/**
	* Log all js errors to Google Analytics
	*/
	(function(window, _gaq){
	    var undefined,
	        link = function (href) {
	            var a = window.document.createElement('a');
	            a.href = href;
	            return a;
	        };
	    window.onerror = function (message, file, row) {
	        var host = link(file).hostname;
	        _gaq.push([
	            '_trackEvent',
	            (host == window.location.hostname || host == undefined || host == '' ? '' : 'external ') + 'error',
	            message, file + ' LINE: ' + row, undefined, undefined, true
	        ]);
	    };
	}(window, _gaq));

	return _gaq;
});