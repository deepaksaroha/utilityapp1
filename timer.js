window.addEventListener('load', ()=>{

    const inputFields = document.querySelectorAll('.timer-input');

    const secondsInput = document.getElementById('seconds');
    const minutesInput = document.getElementById('minutes');
    const hoursInput = document.getElementById('hours');

    

    document.getElementById('start-btn').addEventListener('click', ()=>{
        if(secondsInput.value == "" || isNaN(secondsInput.value)){
            secondsInput.value = 0;
        }
        if(minutesInput.value == "" || isNaN(minutesInput.value)){
            minutesInput.value = 0;
        }
        if(hoursInput.value == "" || isNaN(hoursInput.value)){
            hoursInput.value = 0;
        }
        let seconds = parseInt(secondsInput.value);
        let minutes = parseInt(minutesInput.value);
        let hours = parseInt(hoursInput.value);

        const secondsR = seconds%60;
        const secondsQ = Math.floor(seconds/60);

        seconds = secondsR;

        const minutesR = (minutes+secondsQ)%60;
        const minutesQ = Math.floor((minutes+secondsQ)/60);

        minutes = minutesR;

        hours = minutesQ + hours;


        if(!isNaN(seconds)){
            secondsInput.value = seconds;
        }
        if(!isNaN(minutes)){
            minutesInput.value = minutes;
        }
        if(!isNaN(hours)){
            hoursInput.value = hours;
        }


        let timer = setInterval(()=>{
            if(parseInt(secondsInput.value) === 0 && parseInt(minutesInput.value) === 0 && parseInt(hoursInput.value) === 0){
                clearInterval(timer);
            }else if(parseInt(secondsInput.value) === 0 && parseInt(minutesInput.value) === 0){
                hoursInput.value = parseInt(hoursInput.value) - 1;
                minutesInput.value = 59;
                secondsInput.value = 59;
            }else if(parseInt(secondsInput.value) === 0){
                minutesInput.value = parseInt(minutesInput.value) - 1;
                secondsInput.value = 59;
            }else{
                secondsInput.value = parseInt(secondsInput.value) - 1;
            }


            document.getElementById('reset-btn').addEventListener('click', ()=>{
                clearInterval(timer);
                secondsInput.value = '';
                minutesInput.value = '';
                hoursInput.value = '';
            })

            return timer;

        }, 1000);
    })
    
    document.getElementById('reset-btn').addEventListener('click', ()=>{
        secondsInput.value = '';
        minutesInput.value = '';
        hoursInput.value = '';
    })


})