let time = 2000
    positionDesktopImg = 0
    positionMobileImg = 0
    desktopImg = document.querySelectorAll('#desktop img')
    mobileImg = document.querySelectorAll('#mobile img')
    maxDesktop = desktopImg.length
    maxMobile = mobileImg.length

function nextImageDesktop() {
    desktopImg[positionDesktopImg].classList.remove('selected')
    positionDesktopImg++
    if(positionDesktopImg >= maxDesktop)
        positionDesktopImg = 0
    desktopImg[positionDesktopImg].classList.add('selected')
}

function nextImageMobile() {
    mobileImg[positionMobileImg].classList.remove('selected')
    positionMobileImg++
    if(positionMobileImg >= maxMobile)
        positionMobileImg = 0
    mobileImg[positionMobileImg].classList.add('selected')
}

function start() {
    setInterval(() => {
        nextImageDesktop()
        nextImageMobile()
    }, time)
}

window.addEventListener('load', start)
