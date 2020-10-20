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

  if (!navActive) {
    const element = document.getElementById(`color-bar-line-${index}`)
    return delayedLoop((givenCounterValue, givenIndexValue) => {
      if (givenCounterValue > mobileNavHeight) {
        givenCounterValue = mobileNavHeight
      }
      element.style.transform = `translateY(${givenCounterValue}px)` 
    }, [Math.ceil(mobileNavHeight/8), 10, 8])
  } else {
    const element = document.getElementById(`color-bar-line-${4 - index}`)
    return delayedLoop((givenCounterValue, givenIndexValue) => {
      if (givenCounterValue > mobileNavHeight) {
        givenCounterValue = mobileNavHeight
      }
      element.style.transform = `translateY(${mobileNavHeight - givenCounterValue}px)` 
    }, [Math.ceil(mobileNavHeight/8), 10, 8])
  }
  
}

function navButtonFunctionality() {

  navActive = !navActive
  navHamburgerButton.removeEventListener('click', navButtonFunctionality)

  if (navActive) {
    mainNav.style.transition = `${windowWidth / 8 * 10 + 50}ms linear`
    mainNav.style.transform = `translateX(-${windowWidth}px)`
    mainNav.style.opacity = '0'

    mainHeader.style.transition = `${mobileNavHeight / 8 * 10 + 50}ms linear ${mobileNavHeight / 8 * 10 + 250}ms`
    mainHeader.style.transform = 'translateY(0px)'
  } else {
    mainNav.style.transition = `${windowWidth / 8 * 10 + 50}ms linear ${windowWidth / 8 * 10 + 250}ms`
    mainNav.style.transform = 'translateX(0px)'
    mainNav.style.opacity = '1'

    mainHeader.style.transition = `${mobileNavHeight / 8 * 10 + 50}ms linear`
    mainHeader.style.transform = `translateY(${mobileNavHeight}px)`

  }
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
let mobileNavHeight = window.innerHeight * 0.6
let navActive = true

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  navHamburgerButton.addEventListener('click', navButtonFunctionality)

} else {

  

}