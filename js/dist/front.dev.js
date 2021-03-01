"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function scrollIndicatorDetach() {
  document.getElementById('scroll-indicator').classList.remove('show');
  document.getElementById('scroll-indicator').setAttribute('hidden', '');
  return scrollIndicatorDetach = function scrollIndicatorDetach() {
    return true;
  };
}

function scrollFunctionality() {
  checkfadeElements();
  scrollIndicatorDetach();
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
  var forceRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (window.pageYOffset > atutyOffsetTop && window.pageYOffset < atutyOffsetBottom && (!isSticky || forceRefresh)) {
    atutyContainerWrapper.style.position = "fixed";
    return isSticky = true;
  }

  if (window.pageYOffset < atutyOffsetTop && (isSticky || forceRefresh)) {
    atutyContainerWrapper.style.position = "absolute";
    atutyContainerWrapper.style.top = '0';
    return isSticky = false;
  }

  if (window.pageYOffset > atutyOffsetBottom && (isSticky || forceRefresh)) {
    atutyContainerWrapper.classList.add('at-bottom');
    atutyContainerWrapper.classList.remove('fixed');
    atutyContainerWrapper.style.position = "absolute";
    atutyContainerWrapper.style.bottom = '0';
    atutyContainerWrapper.style.top = 'initial';
    return isSticky = false;
  }
}

function setMaskTranslate() {
  var progress = Math.ceil((window.pageYOffset - atutyOffsetTop) / (atutyHeight - window.innerHeight) * 10000) / 100;
  var maskNumber = Math.ceil(progress / 20);

  if (maskNumber < 1) {
    maskNumber = 1;
  }

  if (maskNumber > 5) {
    maskNumber = 5;
  }

  var maskProgress = (progress - 20 * Math.floor(progress / 20)) * 5;
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
  if (direction) {
    direction === 'left' && (sliderPosition -= 1);
    direction === 'right' && (sliderPosition += 1);
  } else {
    difference = horizontalScroll.touchStartX - horizontalScroll.touchEndX;

    if (Math.abs(difference) >= horizontalScroll.tolerationLength) {
      difference > 0 ? sliderPosition += 1 : sliderPosition -= 1;
    }
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
  var background = document.createElement('img'); // TO-DO

  window.innerWidth > 767 ? backgroundUrl = './wp-content/themes/UMisia/assets/desktop_bg_main.jpg' : backgroundUrl = './wp-content/themes/UMisia/assets/mobile_bg_main.jpg';
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
    document.getElementById('scroll-indicator').getAttribute('hidden') !== '' && document.getElementById('scroll-indicator').classList.add('show');
    return updateDimensionsAtuty();
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

function setHeights() {
  document.getElementById('hero').style.height = window.innerHeight + 'px';
}

function updateDimensionsAtuty() {
  atutyHeight = 8 * window.innerHeight;
  atutyOffsetTop = document.getElementById('atuty').offsetTop;
  atutyOffsetBottom = atutyOffsetTop + document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight;
  return atutyHeight, atutyOffsetTop, atutyOffsetBottom;
}

var atutyContainerWrapper = document.getElementById('atuty-container-wrapper');
var projektyContainer = document.getElementById('projekty-container');
var projektWidth = document.getElementsByClassName('projekt')[0].getBoundingClientRect().width;

var projektsList = _toConsumableArray(document.getElementsByClassName('projekt'));

var arrows = _toConsumableArray(document.getElementsByClassName('arrow'));

var progressBar = document.getElementsByClassName('slider-footer-progress')[0];
var progressDashWidth = document.getElementsByClassName('slider-footer-dash')[0].clientWidth;

var sliderFooterArrows = _toConsumableArray(document.getElementsByClassName('slider-footer-arrow'));

var atutyHeight, atutyOffsetTop, atutyOffsetBottom;
var insideFixedSection = false;
var horizontalScroll = {
  touchStartX: 0,
  touchEndX: 0,
  dynamicPageX: 0,
  offsetPageX: 0,
  tolerationLength: 50
};
var sliderPosition = 0; // TO-DO

setAndAppendMasks();

window.onload = function () {
  window.innerHeight < 786 && setHeights();
  createBackground();
  updateFadeElementsArray();
  stickySectionFunctionality(true);
  updateDimensions(true);
  updateDimensionsAtuty();
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