const imgDs = document.getElementById('desktop')
const imgMs = document.getElementById('mobile')
const imgD = document.querySelectorAll('#desktop img')
const imgM = document.querySelectorAll('#mobile img')

let idBegin = 0

function carousel() {
    idBegin++;

    if(idBegin > imgD.length - 1){
        idBegin = 0
    }

    if(idBegin > imgM.length - 1){
        idBegin = 0
    }

    imgDs.style.transform = `translateX(${-idBegin * 100}vw)`
    imgMs.style.transform = `translateX(${-idBegin * 100}vw)`
}

setInterval(carousel, 2000)