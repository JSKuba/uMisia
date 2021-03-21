function delayedLoop(callbackFunction, [indexLimit, delay, counterChange= 0, index = 0, counter = 0]) {

  callbackFunction(counter, index)
  counter += counterChange
  index += 1

  if (index <= indexLimit) {
    setTimeout(() => {
      return delayedLoop(callbackFunction, [indexLimit, delay, counterChange, index, counter])
    }, delay)
  }

  return true

}

function changeColorbarHeight(counter, index) {

  function givenFunction(givenCounterValue, givenIndexValue) {
    const element = navActive ? document.getElementById(`color-bar-line-${4 - index}`) : document.getElementById(`color-bar-line-${index}`)
      if (givenCounterValue > mobileNavHeight) {
        givenCounterValue = mobileNavHeight
      }
      element.style.transform = `translateY(${navActive ? mobileNavHeight - givenCounterValue : givenCounterValue}px)` 
  }

  return delayedLoop(givenFunction, [Math.ceil(mobileNavHeight/8), 10, 8])
  
}

function setNavStyles(navActive) {

  mainNav.style.transition = navActive ? `${windowWidth / 8 * 10 + 50}ms linear` : `${windowWidth / 8 * 10 + 50}ms linear ${windowWidth / 8 * 10 + 250}ms`
  mainNav.style.transform = navActive ? `translateX(-${windowWidth}px)` : 'translateX(0px)'
  mainNav.style.opacity = navActive ? '0' : '1'
  mainHeader.style.transition = navActive ? `${mobileNavHeight / 8 * 10 + 50}ms linear ${mobileNavHeight / 8 * 10 + 250}ms` : `${mobileNavHeight / 8 * 10 + 50}ms linear`
  navHamburgerButton.style.transform = navActive ? 'translateY(0px)' : `translateY(${mobileNavHeight}px)`
  mainLogo.style.transform = navActive ? 'translateY(0px)' : `translateY(${mobileNavHeight}px)`

}

function navButtonFunctionality() {

  navActive = !navActive
  navHamburgerButton.removeEventListener('click', navButtonFunctionality)
  setNavStyles(navActive)
  setTimeout(() => {
    navHamburgerButton.addEventListener('click', navButtonFunctionality)
  }, (mobileNavHeight / 8 * 10 + 1000))

  return delayedLoop(changeColorbarHeight, [4, 200])

}

function updateDimensions() {

  windowWidth = window.innerWidth
  mobileNavHeight = window.innerHeight * 0.6

}

function setUSPCounter(target) {

  let fps = target.dataset.uspFps
  let maxTime = target.dataset.uspTime
  let maxValue = target.dataset.uspLimit
  let trackedTime = 0

  const interval = setInterval(function() {

    trackedTime += 1000 / fps

    target.innerHTML = Math.round(Math.sqrt(Math.sqrt(trackedTime)) * Math.sqrt(Math.sqrt(Math.pow(maxValue, 4) / maxTime)))
    
    if (trackedTime >= maxTime) {
      target.innerHTML = maxValue
      target.dataset.uspMore && (target.innerHTML += '+')
      target.classList.add('counter-done')
      clearInterval(interval)
    }

  }, 1000 / fps)

}

function checkfadeElements() {

  firstElement = fadeElementsArray[0]

  if (firstElement && window.pageYOffset + window.innerHeight * 0.66 > firstElement.breakpoint) {
    firstElement.node.setAttribute('visible', '')
    firstElement.node.getAttribute('fade') == 'callback' && setUSPCounter(firstElement.node)
    fadeElementsArray.shift()
    fadeElementsArray.length === 0 && (checkfadeElements = function() {return true})
  }

}

function updateFadeElementsArray() {

  document.querySelectorAll('[fade]').forEach(element => {

    elementOffsetTop =  element.getBoundingClientRect().top

    if (window.pageYOffset + window.innerHeight * 0.66 >= elementOffsetTop) {

      element.setAttribute('visible', '')

    } else if (!element.getAttribute('visible')) {

      if (!fadeElementsArray.length) {

        fadeElementsArray.push({node: element, breakpoint: elementOffsetTop})
  
      } else {
  
        for (backwardsCounter = fadeElementsArray.length - 1; backwardsCounter >= 0; backwardsCounter -= 1) {
          
          if (elementOffsetTop >= fadeElementsArray[backwardsCounter].breakpoint && backwardsCounter === fadeElementsArray.length - 1) {

            fadeElementsArray.push({node: element, breakpoint: elementOffsetTop})
            break
  
          } else if (elementOffsetTop >= fadeElementsArray[backwardsCounter].breakpoint) {
  
            fadeElementsArray.splice(backwardsCounter + 1, 0, {node: element, breakpoint: elementOffsetTop})
            break
  
          }
  
        }
  
      }

    }

  })

}

function facebookButtonUtility() {
  setTimeout(function () { window.location = facebookButton.getAttribute('link'); }, 25);
  window.location = "fb://page/161391994302243";
  // TO-DO
}



const colorPalette = ['#00FCE2','#703cff','#ca00fc','#FD7FE8','#FFB0B0','#00ffff']
const navHamburgerButton = document.getElementsByClassName('nav-btn-hamburger')[0]
const colorBarContainer = document.getElementsByClassName('color-bar-container')[0]
const colorBarLines = [...document.getElementsByClassName('color-bar-line')]
const mainHeader = document.getElementById('main-header')
const mainNav = document.getElementsByClassName('main-nav')[0]
const mainLogo = document.getElementsByClassName('custom-logo')[0]
const fadeElementsArray = []
const facebookButton = document.getElementById('facebook-button')

let navActive = true
let isSticky = false;
let isStickyCopy = false;

//fix
setTimeout(() => {
  updateDimensions()
}, 100)

window.onload = () => {
  updateFadeElementsArray()
}

navHamburgerButton.addEventListener('click', navButtonFunctionality)
facebookButton !== null && facebookButton.addEventListener('click', facebookButtonUtility)
window.addEventListener('scroll', checkfadeElements)