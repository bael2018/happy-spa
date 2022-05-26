const timerDays = document.getElementById('timer-days')
const timerHours = document.getElementById('timer-hours')
const timerMinutes = document.getElementById('timer-minutes')
const timerSeconds = document.getElementById('timer-seconds')

fetch('http://127.0.0.1:5500/config.json')
.then(res => res.json())
.then(r => {
    const time = r.timerEndDate.split('.').join(' ').split(' ')

    function dateParser(){
        const deadline = new Date(`${time[2]}-${time[1]}-${time[0]}T${time[3]}`)
        return deadline - new Date();
    }
    
    if(dateParser() > 0){
        let timeInterval = setInterval(timerUpdate, 1000)
        
        function timerUpdate(){
            const diff = dateParser()
        
            const seconds = Math.floor((diff / 1000) % 60);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
            timerDays.innerHTML = days < 10 && days >= 0 ? `0${days}` : days
            timerHours.innerHTML = innerHTML = hours < 10 && hours >= 0 ? `0${hours}` : hours
            timerMinutes.innerHTML = innerHTML = minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes
            timerSeconds.innerHTML = innerHTML = seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds
    
            if(diff < 0){
                clearInterval(timeInterval)
                document.querySelector('.sales-timer').style.display = 'none'
            }
        }
    }else{
        document.querySelector('.sales-timer').style.display = 'none'
    }
})