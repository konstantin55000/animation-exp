/**
 * Smart Right Skin
 * @author Weborama NL
 * @version 1.0.4
 * 2019-04-03
 */

// Width of visible area, max en original width, sticky scrolling vars
var visibleWidth, originalWidth, maxWidth, stickyScrolling, scroll_timeout;
// This object will hold the current website specifications (json).
var siteObject = {};
// Content holder.
var scalableContent;
// Resize every # milli-secs max (#SharedBG)
var resizeTimeout = 25, resizeTimer = 0;
// So onStart is only called once
var startUp = true

// Listener to update the position of the skins.
screenad.shared.updateStickySkinsPosition = updatePosition;

/** Current HTML is loaded */
screenad.onPreloadComplete = function() {
  if (screenad.deviceType === screenad.DEVICE_MOBILE) {
    screenad.hide();
  }
  scalableContent = document.getElementById('scalableContent');
  originalWidth = maxWidth = scalableContent.getBoundingClientRect().width;
  onInit();
};

/**
 * Setup Screenad Positioning. Check if Scalable Content and Shared BG are used.
 * Shared function handler
 */
screenad.shared.setPosition = function(siteObj) {
  siteObject = siteObj;
  // Main screenad settings
  screenad.setSize(640, 1500);
  screenad.setAlignment('center', siteObject.skins_valign);
  screenad.setOffset((Math.floor(parseInt(siteObject.width) / 2) + 320) + parseInt(siteObject.skins_offsetx), parseInt(siteObject.skins_offsety));
  if (siteObject.skins_sticky == 'scroll') {
    screenad.setSticky(false); // First false to capture original vertical position
  } else {
    screenad.setSticky(siteObject.skins_sticky);
  }
  if (siteObject.skins_zindex !== undefined && siteObject.skins_zindex.length > 0) {
    screenad.setZIndex(parseInt(siteObject.skins_zindex));
  }
  screenad.position();
  // Scalable content?
  if (scaleContent) {
    screenad.onResize = updateScalableContent;
    updateScalableContent();
  }
  // Add sticky on scroll?
  if (siteObject.skins_sticky == 'scroll') {
    setTimeout(addStickyOnScroll, 100);
  }
  // Let content/animation start
  if (startUp) {
    setTimeout(onStart, 200);
    startUp = false;
  }
};

/** Checks resolution and adapts scalable content */
function updateScalableContent() {
  var contentWidth, contentHeight;
  if (scaleContent) {
    contentWidth = (Math.ceil(screenad.browserwidth * screenad.zoom) - parseInt(siteObject.width)) / 2 + parseInt(siteObject.skins_offsetx);
    scaleAmount = contentWidth / originalWidth;
    if (contentWidth >= maxWidth) {
      scaleAmount = 1;
    } else if (contentWidth < minWidth) {
      scaleAmount = minWidth / originalWidth;
    }
    scalableContent.style.transform = 'scale(' + scaleAmount + ',' + scaleAmount + ')';
   

 /*if (scaleAmount*1500 > screenad.browserheight){
    scaleAmount = screenad.browserheight/1500;
    if (contentWidth >= maxWidth) {
      //scaleAmount = 1;
    } else if (contentWidth < minWidth) {
      //scaleAmount = minWidth / originalWidth;
    }
    scalableContent.style.transform = 'scale(' + scaleAmount + ',' + scaleAmount + ')';
  }*/

  }
}

/** Show Shared Background - Skins Version */
screenad.shared.setSharedBg = function(bgObj) {
  var xOffset=0, bgHolder=document.getElementById('sharedBackground');
  
  if (Number(siteObject.skins_offsetx) != 0) {
	xOffset += Number(siteObject.skins_offsetx);
  }
  if (!bgHolder) return;
  bgHolder.style.position = 'absolute';
  bgHolder.style.width = screenad.browserwidth+'px';
  bgHolder.style.height = '100%';
  bgHolder.style.left = '0px';
  bgHolder.style.top = '0px';
  if (bgHolder.style.backgroundImage == '')
    bgHolder.style.backgroundImage = 'url("'+bgObj.image+'")';
  if (bgObj.width != 'auto')
    xOffset = (screenad.browserwidth - bgObj.width)/2 + xOffset;
  bgHolder.style.backgroundSize = (bgObj.width=='auto'? screenad.browserwidth : bgObj.width)+'px auto';
  bgHolder.style.backgroundPositionX = Number(0 + screenad.pagex + xOffset)+'px';
  bgHolder.style.backgroundPositionY =  (Number(0 + screenad.pagey - bgObj.yOffset) > 0)? '0px' : Number(0 + screenad.pagey - bgObj.yOffset)+'px';
  bgHolder.style.backgroundRepeat = 'no-repeat';
  bgHolder.style.backgroundColor = bgObj.color;
}

function addStickyOnScroll() {
  // If not needed. Use regular Sticky
  if (siteObject.skins_valign == 'top' && siteObject.skins_offsety == '0') {
    screenad.setSticky(true);
    screenad.position();
    return;	
  }
}

// Update Skin Position
function updatePosition(e) {
  e.offsetX = e.offsetX || (Math.floor(parseInt(siteObject.width) / 2) + 320) + parseInt(siteObject.skins_offsetx);
  screenad.setAlignment(e.horizontal, e.vertical);
  screenad.setOffset(e.offsetX, e.offsetY);
  screenad.setSticky(e.sticky);
  screenad.position();
}
