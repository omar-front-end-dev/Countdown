

const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minutesCount = document.getElementById("minutes");
const secondeCount = document.getElementById("seconds");
let countDown = new Date("2024-1-01").getTime()


let count = setInterval(() =>{
    let dateNou = new Date().getTime()
    let distance = countDown - dateNou
    let days = parseInt((distance/(24*60*60*1000)))
    let hours = parseInt((distance%(24*60*60*1000) /(60*60*1000)))
    let minutes= parseInt((distance%(60*60*1000) / (60*1000)))
    let seconde = parseInt((distance%(60*1000) /1000))
    daysCount.innerHTML = days;
    hoursCount.innerHTML = hours;
    minutesCount.innerHTML = minutes;
    secondeCount.innerHTML = seconde;
    if (distance <= 0) {
        clearInterval(count)
    }
}, 1000)

