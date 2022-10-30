let input = document.querySelector('#alarmTxt')
let button = document.querySelector('.btn')

button.addEventListener("click", setAlarm)


var audio = new Audio('alarmAudio.mp3');

function alarmAudio() {
  audio.play();
}

function setAlarm(e){
    e.preventDefault()
    console.log('Alarm clicked')
   let alarmDate = new Date(input.value)
  let now = new Date();

  const timeToAlarm = alarmDate-now

     console.log(timeToAlarm)

    if(alarmDate-now >0){
       setTimeout(() => {

           alarmAudio()

       }, timeToAlarm);
    }
  
}

let clock = document.getElementById('clock');

// Creating a function for runing time 

function runTime(){
  const now = new Date();
// Get hours minutes seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  currentHour = hours
  hours = (hours <10 ? "0" + hours : hours)
  minutes = (minutes <10 ? "0" + minutes : minutes)
  seconds = (seconds <10 ? "0" + seconds : seconds)

  hours = (hours > 12) ? hours-12 : hours;
  hours = (hours == 00) ? 12 : hours;

  let timePeriod = (currentHour < 12 ) ? "AM" : "PM";

  let currentTime =  hours+ ":"+ minutes+ ":" +seconds + "  "+ timePeriod;

  // console.log(currentTime);
  // =============================================================
  // current day date and month

  // Weekday
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let currentTimeDay = new Date();
    const weekdays = days[currentTimeDay.getDay()]

    // Month and Date
    let currentTimeData = new Date()

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month =months[currentTimeData.getMonth()];

    let date = currentTimeData.getDate();

   let  year = currentTimeData.getFullYear();

    // inserting runtime in DOM

    clock.innerHTML = `${weekdays} || ${date} : ${month} : ${year} || ${currentTime}`;
}

// runTime()

// let CurrTime = new Date();
// let Time = CurrTime.toLocaleTimeString();
// console.log(Time);