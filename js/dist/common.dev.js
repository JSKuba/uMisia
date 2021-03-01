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

function updateDimensions() {
  windowWidth = window.innerWidth;
  mobileNavHeight = window.innerHeight * 0.6;
}

function checkfadeElements() {
  firstElement = fadeElementsArray[0];

  if (firstElement && window.pageYOffset + window.innerHeight * 0.66 > firstElement.breakpoint) {
    firstElement.node.setAttribute('visible', '');
    fadeElementsArray.shift();
    fadeElementsArray.length === 0 && (checkfadeElements = function checkfadeElements() {
      return true;
    });
  }
}

function updateFadeElementsArray() {
  document.querySelectorAll('[fade]').forEach(function (element) {
    elementOffsetTop = element.getBoundingClientRect().top;

    if (window.pageYOffset + window.innerHeight * 0.66 >= elementOffsetTop) {
      element.setAttribute('visible', '');
    } else if (!element.getAttribute('visible')) {
      if (!fadeElementsArray.length) {
        fadeElementsArray.push({
          node: element,
          breakpoint: elementOffsetTop
        });
      } else {
        for (backwardsCounter = fadeElementsArray.length - 1; backwardsCounter >= 0; backwardsCounter -= 1) {
          if (elementOffsetTop >= fadeElementsArray[backwardsCounter].breakpoint && backwardsCounter === fadeElementsArray.length - 1) {
            fadeElementsArray.push({
              node: element,
              breakpoint: elementOffsetTop
            });
            break;
          } else if (elementOffsetTop >= fadeElementsArray[backwardsCounter].breakpoint) {
            fadeElementsArray.splice(backwardsCounter + 1, 0, {
              node: element,
              breakpoint: elementOffsetTop
            });
            break;
          }
        }
      }
    }
  });
}

function facebookButtonUtility() {
  setTimeout(function () {
    window.location = facebookButton.getAttribute('link');
  }, 25);
  window.location = "fb://page/161391994302243"; // TO-DO
}

var colorPalette = ['#00FCE2', '#703cff', '#ca00fc', '#FD7FE8', '#FFB0B0', '#00ffff'];
var navHamburgerButton = document.getElementsByClassName('nav-btn-hamburger')[0];
var colorBarContainer = document.getElementsByClassName('color-bar-container')[0];

var colorBarLines = _toConsumableArray(document.getElementsByClassName('color-bar-line'));

var mainHeader = document.getElementById('main-header');
var mainNav = document.getElementsByClassName('main-nav')[0];
var mainLogo = document.getElementsByClassName('custom-logo')[0];
var fadeElementsArray = [];
var facebookButton = document.getElementById('facebook-button');
var navActive = true;
var isSticky = false;
var isStickyCopy = false; //fix

setTimeout(function () {
  updateDimensions();
}, 100);

window.onload = function () {
  updateFadeElementsArray();
};

navHamburgerButton.addEventListener('click', navButtonFunctionality);
facebookButton !== null && facebookButton.addEventListener('click', facebookButtonUtility);
window.addEventListener('scroll', checkfadeElements);