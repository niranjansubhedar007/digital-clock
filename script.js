const hourHand=document.querySelector("#hour-hand")
const minuteHand=document.querySelector("#minute-hand")
const secondHand=document.querySelector("#second-hand")

function clockTick(){
    const date=new Date()
    const seconds=date.getSeconds() / 60
    const minutes=(seconds + date.getMinutes()) / 60
    const hours=(minutes + date.getHours()) / 12


rotateClockHand(secondHand,seconds)
rotateClockHand(minuteHand,minutes)
rotateClockHand(hourHand ,hours)
}

function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate',rotation*360)
}

setInterval(clockTick,1000)




// const secondhand=document.querySelector("#second-hand")
// const minutehand=document.querySelector("#minute-hand")
// const hourhand=document.querySelector("#hour-hand")


// function clocktick(){
//     const date=new Date()
//     const seconds=date.getSeconds() /60
//     const minutes=(seconds +date.getMinutes()) /60
//     const hours=(minutes + date.getHours()) / 12


// rotateclockhand(secondhand,seconds)
// rotateclockhand(minutehand,minutes)
// rotateclockhand(hourhand,hours)

// }



// function rotateclockhand(element ,rotation) {
//     element.style.setProperty('--rotate',rotation * 360)
// }

// setInterval(clocktick,1000)