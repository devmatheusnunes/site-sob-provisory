let time = 2000
    positionDesktopImg1 = 0
    positionDesktopImg2 = 0
    desktopImg1 = document.querySelectorAll('#desktop1 img')
    desktopImg2 = document.querySelectorAll('#desktop2 img')
    maxDesktop1 = desktopImg1.length
    maxDesktop2 = desktopImg2.length

function nextImageDesktop1() {
    desktopImg1[positionDesktopImg1].classList.remove('selected')
    positionDesktopImg1++
    if(positionDesktopImg1 >= maxDesktop1)
        positionDesktopImg1 = 0
    desktopImg1[positionDesktopImg1].classList.add('selected')
}

function nextImageDesktop2() {
    desktopImg2[positionDesktopImg2].classList.remove('selected')
    positionDesktopImg2++
    if(positionDesktopImg2 >= maxDesktop1)
        positionDesktopImg2 = 0
    desktopImg2[positionDesktopImg2].classList.add('selected')
}

function start() {
    setInterval(() => {
        nextImageDesktop1()
        nextImageDesktop2()
    }, time)
}

window.addEventListener('load', start)