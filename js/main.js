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
  disabilityHelpContainer.style.transition = navActive ? `${windowWidth / 8 * 10 + 50}ms linear` : `${windowWidth / 8 * 10 + 50}ms linear ${windowWidth / 8 * 10 + 250}ms`
  disabilityHelpContainer.style.transform = navActive ? `translateX(-${windowWidth}px)` : 'translateX(0px)'
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

const windowWidth = window.innerWidth
const navHamburgerButton = document.getElementsByClassName('nav-btn-hamburger')[0]
const colorBarContainer = document.getElementsByClassName('color-bar-container')[0]
const colorBarLines = [...document.getElementsByClassName('color-bar-line')]
const mainHeader = document.getElementById('main-header')
const mainNav = document.getElementsByClassName('main-nav')[0]
const mainLogo = document.getElementsByClassName('custom-logo')[0]
const disabilityHelpContainer = document.getElementsByClassName('disability-help-container')[0]
let mobileNavHeight = window.innerHeight * 0.6
let navActive = true


navHamburgerButton.addEventListener('click', navButtonFunctionality)


// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  
// } else {

  

// }