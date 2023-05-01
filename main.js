let start = document.querySelector("button.start")
let deposit = document.querySelector("button.deposit")
const horseAudio = document.querySelector(".horseAudioMp3");

let circles = document.querySelectorAll(".circle")
let select = document.querySelector("select")
let amount = document.querySelector(".amount")
//let randomIndex1 = Math.floor(Math.random() * circles.length);
randomTranslate1 = Math.floor(Math.random() * 10)
randomTranslate2 = Math.floor(Math.random() * 10)
randomTranslate3 = Math.floor(Math.random() * 10)
let total = document.querySelector(".total")
start.disabled = true
deposit.addEventListener('click', (event) => {
    if (amount.value == "") {
        start.disabled = true
    }
    else {
        start.disabled = false
    }
})

select.addEventListener('change', (e) => {
    total.innerText = "..."
})
start.addEventListener('click', (event) => {
   
    horseAudio.play();
    start.disabled = true
    let chooseSelect = select.options.selectedIndex
    let winHorse
    let randomTranslate1 = Math.floor(Math.random() * 10)
    let randomTranslate2 = Math.floor(Math.random() * 10)
    let randomTranslate3 = Math.floor(Math.random() * 10)
    let game = setInterval(function () {
        randomTranslate1 += Math.floor(Math.random() * 3)
        randomTranslate2 += Math.floor(Math.random() * 3)
        randomTranslate3 += Math.floor(Math.random() * 3)
        circles[0].style.marginLeft = `${randomTranslate1}vw`
        circles[1].style.marginLeft = `${randomTranslate2}vw`
        circles[2].style.marginLeft = `${randomTranslate3}vw`
        if (randomTranslate1 >= 90) {
            reset(0)
            winHorse = 0
        }
        else if (randomTranslate2 >= 90) {
            reset(1)
            winHorse = 1
        }
        else if (randomTranslate3 >= 90) {
            reset(2)
            winHorse = 2
        }
        if (winHorse === chooseSelect) {
            total.innerText = amount.value*2
        }
      

    }, 100)

    let reset = (i) => {
        horseAudio.pause();
        clearInterval(game);
        alert(`${i + 1} nomreli at qalibdir`)
        circles[0].style.marginLeft = `0vw`
        circles[1].style.marginLeft = `0vw`
        circles[2].style.marginLeft = `0vw`
    }

})



