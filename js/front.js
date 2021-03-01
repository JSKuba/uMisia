function scrollIndicatorDetach() {
  
  document.getElementById('scroll-indicator').classList.remove('show')
  document.getElementById('scroll-indicator').setAttribute('hidden', '')
  return scrollIndicatorDetach = function() { return true }

}

function scrollFunctionality() {

  checkfadeElements()
  scrollIndicatorDetach()
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

function stickySectionFunctionality(forceRefresh = false) {

  if (window.pageYOffset > atutyOffsetTop && window.pageYOffset < atutyOffsetBottom && (!isSticky || forceRefresh)) {
    atutyContainerWrapper.style.position = "fixed"
    return isSticky = true
  }
  if (window.pageYOffset < atutyOffsetTop && (isSticky || forceRefresh)) {
    atutyContainerWrapper.style.position = "absolute"
    atutyContainerWrapper.style.top = '0'
    return isSticky = false
  }
  if (window.pageYOffset > atutyOffsetBottom && (isSticky || forceRefresh)) {
    atutyContainerWrapper.classList.add('at-bottom')
    atutyContainerWrapper.classList.remove('fixed')
    atutyContainerWrapper.style.position = "absolute"
    atutyContainerWrapper.style.bottom = '0'
    atutyContainerWrapper.style.top = 'initial'
    return isSticky = false
  }
  
}

function setMaskTranslate() {

  const progress = Math.ceil(((window.pageYOffset - atutyOffsetTop) / (atutyHeight - window.innerHeight)) * 10000)/100
  let maskNumber = Math.ceil(progress / 20)
  if(maskNumber < 1) {
    maskNumber = 1
  } 
  if(maskNumber > 5) {
    maskNumber = 5
  } 
  const maskProgress = (progress - 20 * Math.floor(progress / 20)) * 5
  const maskAlgorithm = 0 + 4 * maskProgress - 0.04 * Math.pow(maskProgress, 2)
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

function handleHorizontalScroll(event) {

  horizontalScroll.dynamicPageX = horizontalScroll.offsetPageX + (horizontalScroll.touchStartX - event.changedTouches[0].pageX)
  projektyContainer.style.transform = `translateX(-${horizontalScroll.dynamicPageX}px)`

}

function handleHorizontalScrollStart(event) {

  projektyContainer.style.transition = 'none'
  return horizontalScroll.touchStartX = event.changedTouches[0].pageX

}

function handleHorizontalScrollEnd(event) {

  horizontalScroll.touchEndX = event.changedTouches[0].clientX
  return switchCardIfNeed()

}

function changeSliderFooterUI(sliderPosition) {

  arrows[0].style.borderColor = colorPalette[sliderPosition]
  arrows[1].style.borderColor = colorPalette[sliderPosition]
  progressBar.style.backgroundColor = colorPalette[sliderPosition]
  return progressBar.style.transform = `translateX(${- 100 + progressDashWidth / projektsList.length * (sliderPosition + 1)}px)`

}

function switchCardIfNeed(event, direction) {
  if (direction) {
    direction === 'left' && (sliderPosition -= 1)
    direction === 'right' && (sliderPosition += 1)
  } else {
    difference = horizontalScroll.touchStartX - horizontalScroll.touchEndX
    if (Math.abs(difference) >= horizontalScroll.tolerationLength) {
      difference > 0
      ? sliderPosition += 1
      : sliderPosition -= 1
    }
  }
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
  // TO-DO
  window.innerWidth > 767
  ? backgroundUrl = './wp-content/themes/UMisia/assets/desktop_bg_main.jpg'
  : backgroundUrl = './wp-content/themes/UMisia/assets/mobile_bg_main.jpg'
  background.setAttribute('src', backgroundUrl)
  new Promise(resolve => background.onload = resolve).then(() => {
    background.remove()
    document.getElementsByTagName('body')[0].style.backgroundImage = `url(${backgroundUrl})`
    document.getElementsByClassName('hero-figure-mobile')[0].getElementsByClassName('heart')[0] !== undefined && (document.getElementsByClassName('hero-figure-mobile')[0].getElementsByClassName('heart')[0].style.animation = 'example 1.5s forwards')
    document.getElementsByClassName('hero-figure-desktop')[0].getElementsByClassName('heart')[0] !== undefined && (document.getElementsByClassName('hero-figure-desktop')[0].getElementsByClassName('heart')[0].style.animation = 'example 1.5s forwards')
    document.getElementById('action-button').style.transform = 'none'
    document.getElementById('action-button').style.opacity = '1'
    document.getElementById('scroll-indicator').getAttribute('hidden') !== '' && document.getElementById('scroll-indicator').classList.add('show')
    return updateDimensionsAtuty()
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

function setHeights() {
  
  document.getElementById('hero').style.height = window.innerHeight + 'px';
  
}

function updateDimensionsAtuty() {
  atutyHeight = 8 * window.innerHeight
  atutyOffsetTop = document.getElementById('atuty').offsetTop
  atutyOffsetBottom = atutyOffsetTop + document.getElementById('atuty').getBoundingClientRect().height - window.innerHeight
  return atutyHeight, atutyOffsetTop, atutyOffsetBottom
}









const atutyContainerWrapper = document.getElementById('atuty-container-wrapper')
const projektyContainer = document.getElementById('projekty-container')
const projektWidth = document.getElementsByClassName('projekt')[0].getBoundingClientRect().width
const projektsList = [...document.getElementsByClassName('projekt')]
const arrows = [...document.getElementsByClassName('arrow')]
const progressBar = document.getElementsByClassName('slider-footer-progress')[0]
const progressDashWidth = document.getElementsByClassName('slider-footer-dash')[0].clientWidth
const sliderFooterArrows = [...document.getElementsByClassName('slider-footer-arrow')]

let atutyHeight, atutyOffsetTop, atutyOffsetBottom
let insideFixedSection = false;
let horizontalScroll = {
  touchStartX: 0,
  touchEndX: 0,
  dynamicPageX: 0,
  offsetPageX: 0,
  tolerationLength: 50,
}
let sliderPosition = 0;














// TO-DO
setAndAppendMasks()
window.onload = () => {
  window.innerHeight < 786 && setHeights()
  createBackground()
  updateFadeElementsArray()
  stickySectionFunctionality(true)
  updateDimensions(true)
  updateDimensionsAtuty()
}


// TO-DO spiąć w całość
attachCardsFunctionality()
window.addEventListener('scroll', scrollFunctionality)
window.addEventListener('resize', updateDimensions);
navHamburgerButton.addEventListener('click', navButtonFunctionality)
projektyContainer.addEventListener('touchmove', e => handleHorizontalScroll(e))
projektyContainer.addEventListener('touchstart', e => handleHorizontalScrollStart(e))
projektyContainer.addEventListener('touchend', e => handleHorizontalScrollEnd(e))
sliderFooterArrows.forEach(element => element.addEventListener('click', function() { handleSliderArrowsClick(this)}))