const shouldWeAddAnotherWeek = (endDate, rightNow) => {
    while (endDate <= rightNow){
        endDate.setDate(endDate.getDate() + 7);
    }
    return endDate.getTime();
}

const realEndDate = new Date("Oct 7, 2019 09:00:00");

const endDate = shouldWeAddAnotherWeek(realEndDate, new Date());

let x = setInterval(function () {

    let rightNow = new Date().getTime();

    

    let difference = endDate - rightNow;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (difference < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "ÄNTLIGEN DAGS FÖR SKOLA IGEN!"
    }
}, 1000);















// ! VIKTORS FÖRKLARING OCH KOD

// const oneDay = 1000 * 60 * 60 * 24
// const oneHour = 1000 * 60 * 60
// const oneMinute = 1000 * 60
// const oneSecond = 1000

// const daysElement = document.getElementById("days")
// const hoursElement = document.getElementById("hours")
// const minutesElement = document.getElementById("minutes")
// const secondsElement = document.getElementById("seconds")
// const endDate = new Date("Sep 2, 2019 08:30:00")

// setInterval(() => {
//   const rightNow = new Date()
//   const difference = endDate.getTime() - rightNow.getTime()

//  * Det här är alltså antal dagar kvar

//   const numberOfDaysLeft = Math.floor(difference/oneDay)
//   daysElement.innerHTML = numberOfDaysLeft

//  *Det här är antal timmar kvar TOTALT. 
// * Dock har vi ju redan skrivit ut 42 dagar. 
// * Så timmarna som ingår i dessa måste dras av

//   const numberOfHoursLeft = Math.floor(difference/oneHour)
//   const numberOfHours =  numberOfHoursLeft - numberOfDaysLeft * 24 // * <-- Det där är antalet timmar i de 42 första dagarna
//   hoursElement.innerHTML = numberOfHours

// * Samma här. Antalet minutes TOTALT. Måste dock dra 
// * av alla minuter som ingår i de 42 dagarna och timmarna
// * vi redan skrivit ut

//   const numberOfMinutesLeft = Math.floor(difference/oneMinute)
//   const numberOfMinutes = numberOfMinutesLeft - numberOfDaysLeft * 24 * 60 - numberOfHours * 60
//   minutesElement.innerHTML = numberOfMinutes

// * Samma skit här

//   const numberOfSeconds = Math.floor(difference/oneSecond)
//   secondsElement.innerHTML = numberOfSeconds - numberOfDaysLeft * 24 * 60* 60 - numberOfHours * 60 * 60 - numberOfMinutes * 60
// }, 1000)