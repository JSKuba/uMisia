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

function scrollFunctionality() {

  stickySectionFunctionality()
  if(isSticky) {
    setMaskTranslate()
  }
  if(!isSticky && isStickyCopy) {
    document.getElementById('atut-mask-1').style.transform = 'translateX(33%)'
    document.getElementsByClassName('atut-1-img')[0].style.opacity = '0'
    document.getElementById('atut-mask-5').style.transform = 'translateX(33%)'
    document.getElementsByClassName('atut-5-img')[0].style.opacity = '0'
  }
  isStickyCopy = isSticky

}

function stickySectionFunctionality() {

  if(window.pageYOffset > atutyOffsetTop && window.pageYOffset < atutyOffsetBottom && !isSticky) {
    atutyContainerWrapper.style.position = "fixed"
    return isSticky = true
  }
  if (window.pageYOffset < atutyOffsetTop && isSticky) {
    atutyContainerWrapper.style.position = "absolute"
    atutyContainerWrapper.style.top = '0'
    return isSticky = false
  }
  if (window.pageYOffset > atutyOffsetBottom && isSticky) {
    atutyContainerWrapper.style.position = "absolute"
    atutyContainerWrapper.style.bottom = '0'
    atutyContainerWrapper.style.top = 'initial'
    return isSticky = false
  }
  
}

function setMaskTranslate() {

  const progress = Math.ceil(((window.pageYOffset - atutyOffsetTop) / (document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight)) * 10000)/100
  let maskNumber = Math.ceil(progress / 20)
  if(maskNumber < 1) {
    maskNumber = 1
  } 
  if(maskNumber > 5) {
    maskNumber = 5
  } 
  const maskProgress = (progress - 20 * Math.floor(progress / 20)) * 5
  const maskAlgorithm = (Math.abs(Math.abs(maskProgress-50)-50) * 2) 
  if (maskNumber > 1) {
    document.getElementById(`atut-mask-${maskNumber-1}`).style.transform = 'translateX(33%)'
    document.getElementsByClassName(`atut-${maskNumber-1}-img`)[0].style.opacity = '0'
  }
  if (maskNumber < 5) {
    document.getElementById(`atut-mask-${maskNumber+1}`).style.transform = 'translateX(33%)'
    document.getElementsByClassName(`atut-${maskNumber+1}-img`)[0].style.opacity = '0'
  }
  document.getElementById(`atut-mask-${maskNumber}`).style.transform = `translateX(${maskAlgorithm + (33 - 0.33 * Math.abs(Math.abs(maskProgress-50)-50) * 2)}%)`
  document.getElementsByClassName(`atut-${maskNumber}-img`)[0].style.opacity = `${maskAlgorithm / 100}`

}

function setAndAppendMasks() {

  [...document.getElementsByClassName('atut')].forEach((v, i) => {
    const maskElement = document.createElement('div')
    maskElement.classList.add('atut-mask')
    maskElement.id = `atut-mask-${i+1}`
    document.getElementById(`atut-${i+1}`).appendChild(maskElement)
  })

}

function updateDimensions() {

  windowWidth = window.innerWidth
  mobileNavHeight = window.innerHeight * 0.6
  atutyOffsetTop = document.getElementById('atuty').offsetTop
  atutyOffsetBottom = atutyOffsetTop + document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`);

}

function handleHorizontalScroll(event) {

  horizontalScroll.dynamicPageX = horizontalScroll.offsetPageX + (horizontalScroll.touchStartX - event.changedTouches[0].pageX)
  projektyContainer.style.transform = `translateX(-${horizontalScroll.dynamicPageX}px)`

}

function handleHorizontalScrollStart(event) {

  projektyContainer.style.transition = 'none'
  return horizontalScroll.touchStartX = event.changedTouches[0].pageX

}

function changeSliderFooterUI(sliderPosition) {

  arrows[0].style.borderColor = colorPalette[sliderPosition]
  arrows[1].style.borderColor = colorPalette[sliderPosition]
  progressBar.style.backgroundColor = colorPalette[sliderPosition]
  return progressBar.style.transform = `translateX(${- 100 + progressDashWidth / projektsList.length * (sliderPosition + 1)}px)`

}

function switchCardIfNeed(event, direction) {

  !direction && (sliderPosition = Math.round(horizontalScroll.dynamicPageX / projektWidth))
  direction === 'left' && (sliderPosition -= 1)
  direction === 'right' && (sliderPosition += 1)
  sliderPosition < 0 && (sliderPosition = 0)
  sliderPosition > 5 && (sliderPosition = 5)
  horizontalScroll.offsetPageX = sliderPosition * projektWidth
  projektyContainer.style.transition = '.6s ease'
  projektyContainer.style.transform = `translateX(-${horizontalScroll.offsetPageX}px)`
  return changeSliderFooterUI(sliderPosition)

}

function handleSliderArrowsClick(element) {

  element.children[0].classList.contains('arrow-left')
  ? switchCardIfNeed(null, 'left')
  : switchCardIfNeed(null, 'right')

}

function createBackground() {

  const background = document.createElement('img')
  const backgroundUrl = './wp-content/themes/UMisia/assets/mobile_bg_main.jpg'
  background.setAttribute('src', backgroundUrl)
  new Promise(resolve => background.onload = resolve).then(() => {
    background.remove()
    document.getElementsByTagName('body')[0].style.backgroundImage = `url(${backgroundUrl})`
    document.getElementsByClassName('hero-figure-mobile')[0].getElementsByClassName('heart')[0].style.animation = 'example 1.5s forwards'
    document.getElementsByClassName('hero-figure-desktop')[0].getElementsByClassName('heart')[0].style.animation = 'example 1.5s forwards'
    document.getElementById('action-button').style.transform = 'none'
    document.getElementById('action-button').style.opacity = '1'
  })
  
}

function clearModal() {
  const metodaActive = document.getElementsByClassName('metoda-desc-active')[0]
  return metodaActive && metodaActive.classList.remove('metoda-desc-active')
}

function cardFunctionality() {
  clearModal()
  return document.querySelector(`[data=${this.getAttribute('data-toggle')}]`).classList.add('metoda-desc-active')
}

function attachCardsFunctionality() {

  [...document.getElementsByClassName('metoda-desc')].forEach(desc => {
    desc.addEventListener('click', clearModal)
  });
  
  [...document.getElementsByClassName('metody-card')].forEach(card => {
    card.addEventListener('click', cardFunctionality)
  })

}




const colorPalette = ['#00FCE2','#703cff','#ca00fc','#FD7FE8','#FFB0B0','#00ffff']
const navHamburgerButton = document.getElementsByClassName('nav-btn-hamburger')[0]
const colorBarContainer = document.getElementsByClassName('color-bar-container')[0]
const colorBarLines = [...document.getElementsByClassName('color-bar-line')]
const mainHeader = document.getElementById('main-header')
const mainNav = document.getElementsByClassName('main-nav')[0]
const mainLogo = document.getElementsByClassName('custom-logo')[0]
const atutyContainerWrapper = document.getElementById('atuty-container-wrapper')
const projektyContainer = document.getElementById('projekty-container')
const projektWidth = document.getElementsByClassName('projekt')[0].getBoundingClientRect().width
const projektsList = [...document.getElementsByClassName('projekt')]
const arrows = [...document.getElementsByClassName('arrow')]
const progressBar = document.getElementsByClassName('slider-footer-progress')[0]
const progressDashWidth = document.getElementsByClassName('slider-footer-dash')[0].clientWidth
const sliderFooterArrows = [...document.getElementsByClassName('slider-footer-arrow')]

let atutyOffsetTop = document.getElementById('atuty').offsetTop
let atutyOffsetBottom = atutyOffsetTop + document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight
let navActive = true
let isSticky = false;
let isStickyCopy = false;
let insideFixedSection = false;
let horizontalScroll = {
  touchStartX: 0,
  dynamicPageX: 0,
  offsetPageX: 0
}
let sliderPosition = 0;



//fix
setAndAppendMasks()
setTimeout(() => {
  createBackground()
  updateDimensions()
}, 100)



attachCardsFunctionality()
window.addEventListener('scroll', scrollFunctionality)
window.addEventListener('resize', updateDimensions);
navHamburgerButton.addEventListener('click', navButtonFunctionality)
projektyContainer.addEventListener('touchmove', e => handleHorizontalScroll(e))
projektyContainer.addEventListener('touchstart', e => handleHorizontalScrollStart(e))
projektyContainer.addEventListener('touchend', switchCardIfNeed)
sliderFooterArrows.forEach(element => element.addEventListener('click', function() { handleSliderArrowsClick(this)}))



























// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  
// } else {

  

// }
