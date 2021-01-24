"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function delayedLoop(callbackFunction, _ref) {
  var _ref2 = _slicedToArray(_ref, 5),
      indexLimit = _ref2[0],
      delay = _ref2[1],
      _ref2$ = _ref2[2],
      counterChange = _ref2$ === void 0 ? 0 : _ref2$,
      _ref2$2 = _ref2[3],
      index = _ref2$2 === void 0 ? 0 : _ref2$2,
      _ref2$3 = _ref2[4],
      counter = _ref2$3 === void 0 ? 0 : _ref2$3;

  callbackFunction(counter, index);
  counter += counterChange;
  index += 1;

  if (index <= indexLimit) {
    setTimeout(function () {
      return delayedLoop(callbackFunction, [indexLimit, delay, counterChange, index, counter]);
    }, delay);
  }

  return true;
}

function changeColorbarHeight(counter, index) {
  function givenFunction(givenCounterValue, givenIndexValue) {
    var element = navActive ? document.getElementById("color-bar-line-".concat(4 - index)) : document.getElementById("color-bar-line-".concat(index));

    if (givenCounterValue > mobileNavHeight) {
      givenCounterValue = mobileNavHeight;
    }

    element.style.transform = "translateY(".concat(navActive ? mobileNavHeight - givenCounterValue : givenCounterValue, "px)");
  }

  return delayedLoop(givenFunction, [Math.ceil(mobileNavHeight / 8), 10, 8]);
}

function setNavStyles(navActive) {
  mainNav.style.transition = navActive ? "".concat(windowWidth / 8 * 10 + 50, "ms linear") : "".concat(windowWidth / 8 * 10 + 50, "ms linear ").concat(windowWidth / 8 * 10 + 250, "ms");
  mainNav.style.transform = navActive ? "translateX(-".concat(windowWidth, "px)") : 'translateX(0px)';
  mainNav.style.opacity = navActive ? '0' : '1';
  mainHeader.style.transition = navActive ? "".concat(mobileNavHeight / 8 * 10 + 50, "ms linear ").concat(mobileNavHeight / 8 * 10 + 250, "ms") : "".concat(mobileNavHeight / 8 * 10 + 50, "ms linear");
  navHamburgerButton.style.transform = navActive ? 'translateY(0px)' : "translateY(".concat(mobileNavHeight, "px)");
  mainLogo.style.transform = navActive ? 'translateY(0px)' : "translateY(".concat(mobileNavHeight, "px)");
}

function navButtonFunctionality() {
  navActive = !navActive;
  navHamburgerButton.removeEventListener('click', navButtonFunctionality);
  setNavStyles(navActive);
  setTimeout(function () {
    navHamburgerButton.addEventListener('click', navButtonFunctionality);
  }, mobileNavHeight / 8 * 10 + 1000);
  return delayedLoop(changeColorbarHeight, [4, 200]);
}

function scrollFunctionality() {
  stickySectionFunctionality();

  if (isSticky) {
    setMaskTranslate();
  }

  if (!isSticky && isStickyCopy) {
    document.getElementById('atut-mask-1').style.transform = 'translateX(33%)';
    document.getElementsByClassName('atut-1-img')[0].style.opacity = '0';
    document.getElementById('atut-mask-5').style.transform = 'translateX(33%)';
    document.getElementsByClassName('atut-5-img')[0].style.opacity = '0';
  }

  isStickyCopy = isSticky;
}

function stickySectionFunctionality() {
  if (window.pageYOffset > atutyOffsetTop && window.pageYOffset < atutyOffsetBottom && !isSticky) {
    atutyContainerWrapper.style.position = "fixed";
    return isSticky = true;
  }

  if (window.pageYOffset < atutyOffsetTop && isSticky) {
    atutyContainerWrapper.style.position = "absolute";
    atutyContainerWrapper.style.top = '0';
    return isSticky = false;
  }

  if (window.pageYOffset > atutyOffsetBottom && isSticky) {
    atutyContainerWrapper.style.position = "absolute";
    atutyContainerWrapper.style.bottom = '0';
    atutyContainerWrapper.style.top = 'initial';
    return isSticky = false;
  }
}

function setMaskTranslate() {
  var progress = Math.ceil((window.pageYOffset - atutyOffsetTop) / (document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight) * 10000) / 100;
  var maskNumber = Math.ceil(progress / 20);

  if (maskNumber < 1) {
    maskNumber = 1;
  }

  if (maskNumber > 5) {
    maskNumber = 5;
  }

  var maskProgress = (progress - 20 * Math.floor(progress / 20)) * 5; // const maskAlgorithm = (Math.abs(Math.abs(maskProgress-50)-50) * 2)

  var maskAlgorithm = 0 + 4 * maskProgress - 0.04 * Math.pow(maskProgress, 2);

  if (maskNumber > 1) {
    document.getElementById("atut-mask-".concat(maskNumber - 1)).style.transform = 'translateX(33%)';
    document.getElementsByClassName("atut-".concat(maskNumber - 1, "-img"))[0].style.opacity = '0';
  }

  if (maskNumber < 5) {
    document.getElementById("atut-mask-".concat(maskNumber + 1)).style.transform = 'translateX(33%)';
    document.getElementsByClassName("atut-".concat(maskNumber + 1, "-img"))[0].style.opacity = '0';
  }

  document.getElementById("atut-mask-".concat(maskNumber)).style.transform = "translateX(".concat(maskAlgorithm + (33 - 0.33 * Math.abs(Math.abs(maskProgress - 50) - 50) * 2), "%)");
  document.getElementsByClassName("atut-".concat(maskNumber, "-img"))[0].style.opacity = "".concat(maskAlgorithm / 100);
}

function setAndAppendMasks() {
  _toConsumableArray(document.getElementsByClassName('atut')).forEach(function (v, i) {
    var maskElement = document.createElement('div');
    maskElement.classList.add('atut-mask');
    maskElement.id = "atut-mask-".concat(i + 1);
    document.getElementById("atut-".concat(i + 1)).appendChild(maskElement);
  });
}

function updateDimensions() {
  windowWidth = window.innerWidth;
  mobileNavHeight = window.innerHeight * 0.6;
  atutyOffsetTop = document.getElementById('atuty').offsetTop;
  atutyOffsetBottom = atutyOffsetTop + document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight;
  document.documentElement.style.setProperty('--vh', "".concat(window.innerHeight * 0.01, "px"));
  document.documentElement.style.setProperty('--vw', "".concat(window.innerWidth * 0.01, "px"));
}

function handleHorizontalScroll(event) {
  horizontalScroll.dynamicPageX = horizontalScroll.offsetPageX + (horizontalScroll.touchStartX - event.changedTouches[0].pageX);
  projektyContainer.style.transform = "translateX(-".concat(horizontalScroll.dynamicPageX, "px)");
}

function handleHorizontalScrollStart(event) {
  projektyContainer.style.transition = 'none';
  return horizontalScroll.touchStartX = event.changedTouches[0].pageX;
}

function handleHorizontalScrollEnd(event) {
  horizontalScroll.touchEndX = event.changedTouches[0].clientX;
  return switchCardIfNeed();
}

function changeSliderFooterUI(sliderPosition) {
  arrows[0].style.borderColor = colorPalette[sliderPosition];
  arrows[1].style.borderColor = colorPalette[sliderPosition];
  progressBar.style.backgroundColor = colorPalette[sliderPosition];
  return progressBar.style.transform = "translateX(".concat(-100 + progressDashWidth / projektsList.length * (sliderPosition + 1), "px)");
}

function switchCardIfNeed(event, direction) {
  console.log(horizontalScroll);

  if (direction) {
    direction === 'left' && (sliderPosition -= 1);
    direction === 'right' && (sliderPosition += 1);
  } else {
    horizontalScroll.touchStartX - horizontalScroll.touchEndX > 0 ? sliderPosition += 1 : sliderPosition -= 1;
  }

  sliderPosition < 0 && (sliderPosition = 0);
  sliderPosition > 5 && (sliderPosition = 5);
  horizontalScroll.offsetPageX = sliderPosition * projektWidth;
  projektyContainer.style.transition = '.6s ease';
  projektyContainer.style.transform = "translateX(-".concat(horizontalScroll.offsetPageX, "px)");
  return changeSliderFooterUI(sliderPosition);
}

function handleSliderArrowsClick(element) {
  element.children[0].classList.contains('arrow-left') ? switchCardIfNeed(null, 'left') : switchCardIfNeed(null, 'right');
}

function createBackground() {
  var background = document.createElement('img');
  var backgroundUrl = './wp-content/themes/UMisia/assets/mobile_bg_main.jpg';
  background.setAttribute('src', backgroundUrl);
  new Promise(function (resolve) {
    return background.onload = resolve;
  }).then(function () {
    background.remove();
    document.getElementsByTagName('body')[0].style.backgroundImage = "url(".concat(backgroundUrl, ")");
    document.getElementsByClassName('hero-figure-mobile')[0].getElementsByClassName('heart')[0] !== undefined && (document.getElementsByClassName('hero-figure-mobile')[0].getElementsByClassName('heart')[0].style.animation = 'example 1.5s forwards');
    document.getElementsByClassName('hero-figure-desktop')[0].getElementsByClassName('heart')[0] !== undefined && (document.getElementsByClassName('hero-figure-desktop')[0].getElementsByClassName('heart')[0].style.animation = 'example 1.5s forwards');
    document.getElementById('action-button').style.transform = 'none';
    document.getElementById('action-button').style.opacity = '1';
  });
}

function clearModal() {
  var metodaActive = document.getElementsByClassName('metoda-desc-active')[0];
  return metodaActive && metodaActive.classList.remove('metoda-desc-active');
}

function cardFunctionality() {
  clearModal();
  return document.querySelector("[data=".concat(this.getAttribute('data-toggle'), "]")).classList.add('metoda-desc-active');
}

function attachCardsFunctionality() {
  _toConsumableArray(document.getElementsByClassName('metoda-desc')).forEach(function (desc) {
    desc.addEventListener('click', clearModal);
  });

  _toConsumableArray(document.getElementsByClassName('metody-card')).forEach(function (card) {
    card.addEventListener('click', cardFunctionality);
  });
}

var colorPalette = ['#00FCE2', '#703cff', '#ca00fc', '#FD7FE8', '#FFB0B0', '#00ffff'];
var navHamburgerButton = document.getElementsByClassName('nav-btn-hamburger')[0];
var colorBarContainer = document.getElementsByClassName('color-bar-container')[0];

var colorBarLines = _toConsumableArray(document.getElementsByClassName('color-bar-line'));

var mainHeader = document.getElementById('main-header');
var mainNav = document.getElementsByClassName('main-nav')[0];
var mainLogo = document.getElementsByClassName('custom-logo')[0];
var atutyContainerWrapper = document.getElementById('atuty-container-wrapper');
var projektyContainer = document.getElementById('projekty-container');
var projektWidth = document.getElementsByClassName('projekt')[0].getBoundingClientRect().width;

var projektsList = _toConsumableArray(document.getElementsByClassName('projekt'));

var arrows = _toConsumableArray(document.getElementsByClassName('arrow'));

var progressBar = document.getElementsByClassName('slider-footer-progress')[0];
var progressDashWidth = document.getElementsByClassName('slider-footer-dash')[0].clientWidth;

var sliderFooterArrows = _toConsumableArray(document.getElementsByClassName('slider-footer-arrow'));

var atutyOffsetTop = document.getElementById('atuty').offsetTop;
var atutyOffsetBottom = atutyOffsetTop + document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight;
var navActive = true;
var isSticky = false;
var isStickyCopy = false;
var insideFixedSection = false;
var horizontalScroll = {
  touchStartX: 0,
  touchEndX: 0,
  dynamicPageX: 0,
  offsetPageX: 0
};
var sliderPosition = 0; // TO-DO

setAndAppendMasks();
updateDimensions();

window.onload = function () {
  createBackground();
}; // TO-DO spiąć w całość


attachCardsFunctionality();
window.addEventListener('scroll', scrollFunctionality);
window.addEventListener('resize', updateDimensions);
navHamburgerButton.addEventListener('click', navButtonFunctionality);
projektyContainer.addEventListener('touchmove', function (e) {
  return handleHorizontalScroll(e);
});
projektyContainer.addEventListener('touchstart', function (e) {
  return handleHorizontalScrollStart(e);
});
projektyContainer.addEventListener('touchend', function (e) {
  return handleHorizontalScrollEnd(e);
});
sliderFooterArrows.forEach(function (element) {
  return element.addEventListener('click', function () {
    handleSliderArrowsClick(this);
  });
});