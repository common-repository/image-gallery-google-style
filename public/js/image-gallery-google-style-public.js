// fix for ie in case console.log left uncommented
if (!window.console) console = {log: function() {}};

// Paul Irish window debounce
(function(jQuery,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');

/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,o=i[n];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];o;){var s=r&&r[o];s&&(this.off(e,o),delete r[o]),o.apply(this,t),n+=s?0:1,o=i[n]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}function o(e,t,r){return this instanceof o?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=n(e),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(e,t,r)}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


// VARIABLES
// set up a single object namespace for the bigflannel thumbgrid app
var iggs = {};

// data
// window height
iggs.windowHeight;
// screen height
iggs.screenHeight;
// thumb container width
iggs.thumbGridContainerWidth;
// might amend this later based on screen height and rows wanted
iggs.thumbGridRowTargetHeight = 200;
iggs.thumbGridSpacing = 5;
// device pixel ratio for determining which images to load
iggs.devicePixelRatio = window.devicePixelRatio;
// the amount a title or caption overflows a thumbgrid panel
iggs.overflowHeight;
// the scrollTop position of the page after placing a panel
iggs.pageScrollTop;
// for debugging
iggs.finalRowNumber = new Array;

// status
// whether thumb grid panel open
iggs.thumbGridPanelStatus = false;
// click events added
iggs.clickEventStatus = false;

// objects
// array to contain thumb grids
iggs.thumbGrids;
// array to contain the thumbs
iggs.thumbGridThumbs;
// array to contain a row of thumbs
iggs.thumbRow;
// last clicked thumb in thumb grid
iggs.lastClickedThumb;
// parents of last clicked thumb
iggs.lastClickedThumbParents;

// counters
var h;
var i;
var j;


// INITIALIZE

jQuery(document).ready(function() {
	//console.log('document ready');
	iggs.thumbGridInit();
});


// FUNCTIONS

iggs.thumbGridInit = function() {
	//console.log('iggs.thumbGridInit');
	// set variables used throughout
	// could add in something here to do with retina
	iggs.screenHeight = screen.height;
	iggs.windowHeight = jQuery(window).height();
	// align thumbs in the grid
	iggs.thumbGridAlign();
	// add a debounce
	jQuery(window).smartresize(function() {
		iggs.windowResized();
	});
}

iggs.thumbGridAlign = function() {
	//console.log('iggs.thumbGridAlign');
	iggs.thumbGrids = jQuery('.iggs-thumbgrid');
	for (h = 0; h < iggs.thumbGrids.length; h++) {
		iggs.thumbGridContainerWidth = jQuery(iggs.thumbGrids[h]).width();
		iggs.thumbGridThumbs = jQuery(iggs.thumbGrids[h]).find('.iggs-grid-thumb');
		// variables used to align thumbs
		var thumbsInRow = 0;
		var thumbWidth = 0;
		var thumbHeight = 0;
		var rowNumber = 0;
		var rowClass;
		var startThumb = 0;
		for (i = 0; i < iggs.thumbGridThumbs.length; i++) {
			// calculate total thumb width and add in the default margin
      thumbWidth = thumbWidth + jQuery(iggs.thumbGridThumbs[i]).width() + 5;
      thumbsInRow = i - startThumb + 1;
			if (thumbWidth > (iggs.thumbGridContainerWidth - (thumbsInRow * iggs.thumbGridSpacing))) {
				rowClass = 'iggs-grid-row-' + rowNumber;
				for (j=startThumb; j < i+1; j++) {
					jQuery(iggs.thumbGridThumbs[j]).addClass(rowClass);
				}
				rowNumber = rowNumber + 1;
				thumbWidth = 0;
				startThumb = i+1;
				iggs.finalRowNumber[h] = rowNumber;
			} else if (i == iggs.thumbGridThumbs.length - 1) {
				rowClass = 'iggs-grid-row-' + rowNumber;
				for (j=startThumb; j < i+1; j++) {
					jQuery(iggs.thumbGridThumbs[j]).addClass(rowClass);
				}
				iggs.finalRowNumber[h] = rowNumber;
			}
		}
		if (!iggs.clickEventStatus) {
			iggs.thumbGridEvents(iggs.thumbGrids[h]);
		}
	}
	iggs.clickEventStatus = true;
}

iggs.thumbGridEvents = function(thumbGrid) {
	//console.log('iggs.thumbGridEvents');
	var thumbLinks = jQuery(thumbGrid).find('a.iggs-grid-thumb-link');
	// add an image, title, caption panel
	jQuery(thumbLinks).click(function(event) {
		iggs.lastClickedThumb = event.target;
    iggs.lastClickedThumbParents = jQuery(iggs.lastClickedThumb).parents();
		event.preventDefault();
		iggs.thumbGridClick(event);
	});
}

iggs.thumbGridClick = function(event) {
	//console.log('iggs.thumbGridClick');
	event.preventDefault();
	iggs.lastClickedThumb = event.target;
	if (iggs.thumbGridPanelStatus) {
		// remove the existing panel if there is one
		jQuery('#iggs-thumb-grid-panel').remove();
		// add the new panel
		iggs.thumbGridAddPanel();
	} else {
		// add the new panel
		iggs.thumbGridAddPanel();
	}
}

iggs.thumbGridAddPanel = function() {
  //console.log('iggs.thumbGridAddPanel');
	iggs.thumbGridPanelStatus = true;
	var imageSRC = iggs.thumbGridPanelThumbSRC(iggs.lastClickedThumb);
	var imageAspect = iggs.thumbGridPanelThumbAspect(iggs.lastClickedThumb);
	// add panel, close, and container (and since .34 prev and next)
	var addHTML = '<div id="iggs-thumb-grid-panel" class="iggs-group"><div id="iggs-controls"><i class="iggs-icon icon-angle-circled-left"></i><i class="iggs-icon icon-angle-circled-right"></i><i class="iggs-icon icon-cancel-circled"></i></div><div class="iggs-panel-container">';
	// add container content
	addHTML = addHTML + iggs.addThumGridPanelContainerContent(iggs.lastClickedThumb, imageAspect, imageSRC);
	// close elements
	addHTML = addHTML + '</div><!-- .iggs-panel-container --></div><!-- #iggs-thumb-grid-panel -->';
	iggs.getElementToAddThumbGridPanelAfter().after(addHTML);
	// register the close button click
	jQuery('#iggs-thumb-grid-panel .iggs-icon.icon-cancel-circled').click (function() {
		// remove the panel
		iggs.thumbGridClosePanel();
	});
	// register previous and next button clicks if activated
	jQuery('#iggs-thumb-grid-panel .iggs-icon.icon-angle-circled-right').click (function() {
		//console.log('next image');
		iggs.nextPanelImage();
	});
	jQuery('#iggs-thumb-grid-panel .iggs-icon.icon-angle-circled-left').click (function() {
		//console.log('prev image');
		iggs.previousPanelImage();
	});
	// register swipe left and swipe right on panel image
	iggs.lookForSwipe();
	iggs.setThumbGridPanelHeight();
	iggs.positionThumbGridPanel();
}

iggs.thumbGridClosePanel = function() {
	//console.log('iggs.thumbGridClosePanel');
	jQuery('#iggs-thumb-grid-panel').remove();
	jQuery("html, body").animate({scrollTop: iggs.pageScrollTop }, "fast");
	iggs.thumbGridPanelStatus = false;
}

iggs.lookForSwipe = function() {
	//console.log('iggs.lookForSwipe');
	// register pan left and pan right
	var panTarget = document.querySelectorAll('#iggs-thumb-grid-panel .iggs-panel-left img');
	//console.log('panTarget ' + JSON.stringify(panTarget, null, 4));
	//console.log('panTarget.length ' + panTarget.length);
	//console.log('panTarget[0] ' + JSON.stringify(panTarget[0], null, 4));
	// create a simple instance
	// by default, it only adds horizontal recognizers
	var panObject = new Hammer(panTarget[0]);
	// listen to events...
	panObject.on('panleft panright', function(ev) {
	   //console.log(ev.type + ' gesture detected.');
	   // remove listener / destroy object
	   panObject.destroy();
	   // do action
	   if (ev.type == 'panleft') {
	       iggs.nextPanelImage();
	   } else if (ev.type == 'panright') {
		   iggs.previousPanelImage();
	   }
	});
}

iggs.thumbGridPanelThumbSRC = function(element) {
	//console.log('iggs.thumbGridPanelThumbSRC');
	var screenPixelHeight = iggs.screenHeight*iggs.devicePixelRatio;
	var imageSRC;
	//console.log('iggs.screenHeight ' + iggs.screenHeight);
	//console.log('screenPixelHeight ' + screenPixelHeight);
	//console.log('image heights available ' + jQuery(element).data('iggssmallheight') + ' ' + jQuery(element).data('iggsmediumheight') + ' ' + jQuery(element).data('iggslargeheight'));
	if (screenPixelHeight < jQuery(element).data('iggssmallheight')) {
		//console.log('small');
		imageSRC = jQuery(element).data('iggssmallsrc');
	} else if (screenPixelHeight < jQuery(element).data('iggsmediumheight')) {
		//console.log('medium');
		imageSRC = jQuery(element).data('iggsmediumsrc');
	} else {
		//console.log('large');
		imageSRC = jQuery(element).data('iggslargesrc');
	}
	//console.log('imageSRC ' + imageSRC);
	return imageSRC;
}

iggs.thumbGridPanelThumbAspect = function(element) {
	//console.log('iggs.thumbGridPanelThumbAspect');
	var imageAspect
	if (jQuery(element).data('iggswidth')/jQuery(element).data('iggsheight') > .99) {
		imageAspect = "horizontal";
	} else {
		imageAspect = "vertical";
	}
	//console.log('imageAspect ' + imageAspect);
	return imageAspect;
}

iggs.addThumGridPanelContainerContent = function(element, imageAspect, imageSRC) {
	//console.log('iggs.addThumGridPanelContainerContent');
	var addHTML = '';
	if (jQuery(element).data('iggstitle').length > 0 || jQuery(element).data('iggscaption').length > 0) {
		// add left panel, image
		addHTML = '<div class="iggs-panel-left ' + imageAspect + '"><a href="' + jQuery(element).data('iggslink') +'"><img src="' + imageSRC + '" /></a></div>'
		// add right panel and title and caption
		addHTML = addHTML + '<div class="iggs-panel-right ' + imageAspect + '">';
		if (jQuery(element).data('iggstitle').length > 0) {
			addHTML = addHTML + '<h2><a href="' + jQuery(element).data('iggslink') +'">' + jQuery(element).data('iggstitle') + '</a></h2>';
		}
		if (jQuery(element).data('iggscaption').length > 0) {
			addHTML = addHTML + '<p>' + jQuery(element).data('iggscaption') + '</p>';
		}
	} else {
		// add left panel, image full width
		addHTML = '<div class="iggs-panel-left full-width"><a href="' + jQuery(element).data('iggslink') +'"><img class="' + imageAspect + '" src="' + imageSRC + '" /></a></div>';
	}
	addHTML = addHTML + '</div><!-- .iggs-panel-right -->';
	return addHTML;
}

iggs.setThumbGridPanelHeight = function() {
	////console.log('iggs.setThumbGridPanelHeight');
	// set panel height
	var panelHeight = iggs.windowHeight;
	// make panel window height
	panelHeight = panelHeight * .66;;
	jQuery('#iggs-thumb-grid-panel').css('height',panelHeight);
	var imageHeight = panelHeight - jQuery('#iggs-controls').height() - 50;
	jQuery('#iggs-thumb-grid-panel img').css('max-height',imageHeight).css('visibility','visible');
	jQuery('#iggs-thumb-grid-panel img').imagesLoaded( function() {
		if (iggs.isOverflowing(jQuery('#iggs-thumb-grid-panel'))) {
			//console.log('is overflowing');
			// extend the height of the panel
			jQuery('#iggs-thumb-grid-panel').css('height',panelHeight+iggs.overflowHeight);
		}
	});
}

iggs.isOverflowing = function(element) {
	//console.log('iggs.isOverflowing');
	var el = element[0];
	//console.log('el.id ' + el.id);
	var isOverflowing = false;
	//console.log('el.scrollHeight ' + el.scrollHeight);
	//console.log('el.clientHeight ' + el.clientHeight);
	//console.log('iggs.windowHeight ' + iggs.windowHeight);
	if ((el.clientHeight < el.scrollHeight)) {
		iggs.overflowHeight = el.scrollHeight - el.clientHeight;
		isOverflowing = true;
	}
	//console.log('isOverflowing ' + isOverflowing);
	return isOverflowing;
}

iggs.getElementToAddThumbGridPanelAfter = function() {
	//console.log('iggs.getElementToAddPanelAfter');
	var rowClass = jQuery(iggs.lastClickedThumb).attr('class').split(' ').pop();
	var rowData = rowClass.split('-');
	var rowNumber = Number(rowData[rowData.length-1]);
	var thumbs = jQuery(iggs.lastClickedThumbParents[2]).find('.iggs-grid-row-' + rowNumber);
	var thumbA = jQuery(thumbs[thumbs.length-1]).parent();
	var thumbLI = jQuery(thumbA).parent();
	return thumbLI;
}

iggs.positionThumbGridPanel = function() {
	//console.log('iggs.positionThumbGridPanel');
	var thumbGridPanelOffset;
	var thumbGridPanelPosition;
	thumbGridPanelOffset = jQuery('#iggs-thumb-grid-panel').offset();
	// set the panel to be about a thumbnail below window
	thumbGridPanelPosition = thumbGridPanelOffset.top - 100;
	iggs.pageScrollTop = jQuery(window).scrollTop();
	jQuery("html, body").animate({scrollTop: thumbGridPanelPosition}, "fast");
}

iggs.previousPanelImage = function() {
	//console.log('iggs.previousPanelImage');
	jQuery('.iggs-panel-container').empty();
	var parentElement = iggs.lastClickedThumbParents[1];
	//console.log('parentElement');
	//console.log(parentElement);
	var prevElement = jQuery(parentElement).prevAll('div.iggs-grid-div');
	//console.log('prevElement[0]');
	//console.log(prevElement[0]);
	var prevImage = jQuery(prevElement[0]).find('img');
	if (prevImage.length == 0) {
		//console.log('first element');
		parentElement = iggs.lastClickedThumbParents[2];
		//console.log('parentElement');
		//console.log(parentElement);
		prevElement = jQuery(parentElement).children().last();
		//console.log('prevElement');
		//console.log(prevElement);
		prevImage = jQuery(prevElement).find('img');
		//console.log('prevImage');
		//console.log(prevImage);
	}
	iggs.changePanelImage(prevImage);
}

iggs.nextPanelImage = function() {
	//console.log('iggs.nextPanelImage');
	jQuery('.iggs-panel-container').empty();
	var parentElement = iggs.lastClickedThumbParents[1];
	//console.log('parentElement');
	//console.log(parentElement);
	var nextElement = jQuery(parentElement).nextAll('div.iggs-grid-div');
	//console.log('nextElement[0]');
	//console.log(nextElement[0]);
	var nextImage = jQuery(nextElement[0]).find('img');
	//console.log('nextImage');
	//console.log(nextImage);
	if (nextElement.length == 0) {
		//console.log('last element');
		parentElement = iggs.lastClickedThumbParents[2];
		//console.log('parentElement');
		//console.log(parentElement);
		nextElement = jQuery(parentElement).children().first().next();
		//console.log('nextElement');
		//console.log(nextElement);
		nextImage = jQuery(nextElement).find('img');
		//console.log('nextImage');
		//console.log(nextImage);
	}
	iggs.changePanelImage(nextImage);
}

iggs.changePanelImage = function(element) {
	//console.log('iggs.changePanelImage');
	// get stuff for the new container HTML
	var imageSRC = iggs.thumbGridPanelThumbSRC(element);
	var imageAspect = iggs.thumbGridPanelThumbAspect(element);
	// add container content
	var addHTML = iggs.addThumGridPanelContainerContent(element, imageAspect, imageSRC);
	jQuery('.iggs-panel-container').append(addHTML);
	// set height in case new panel is overflowing
	iggs.setThumbGridPanelHeight();
	// register swipe left and swipe right on panel image
	iggs.lookForSwipe();
	// update last clicked thumbnail ...
	iggs.lastClickedThumb = element;
	//console.log('upddating last clicked thumbnail');
	//console.log('iggs.lastClickedThumb');
	//console.log(iggs.lastClickedThumb);
	iggs.lastClickedThumbParents = jQuery(element).parents();
	//console.log('iggs.lastClickedThumbParents');
	//console.log(iggs.lastClickedThumbParents);
}

iggs.windowResized = function() {
	//console.log('iggs.windowResized');
	iggs.windowHeight = jQuery(window).height();
	// remove classes from thumbs
	iggs.removeThumbGridPanelThumbClasses();
	// resize the thumb grid
	iggs.thumbGridAlign();
	// resize the thumb grid panel
	if (iggs.thumbGridPanelStatus) {
		// adjust #iggs-thumb-grid-panel's position in the dom
		var detachedPanel = jQuery('#iggs-thumb-grid-panel');
		detachedPanel.detach();
		jQuery(iggs.getElementToAddThumbGridPanelAfter()).after(detachedPanel);
		// adjust panel height based on window height
		iggs.setThumbGridPanelHeight();
		// scroll to the right place
		iggs.positionThumbGridPanel();
	}
}

iggs.removeThumbGridPanelThumbClasses = function() {
	//console.log('iggs.removeThumbGridPanelThumbClasses');
	for (h = 0; h < iggs.thumbGrids.length; h++) {
		//console.log('h = ' + h);
		iggs.thumbGridThumbs = jQuery(iggs.thumbGrids[h]).find('.iggs-grid-thumb');
		for (i = 0; i < iggs.thumbGridThumbs.length; i++) {
			var classToRemove = jQuery(iggs.thumbGridThumbs[i]).attr('class').split(' ').pop();
			jQuery(iggs.thumbGridThumbs[i]).removeClass(classToRemove);
		}
	}
}
