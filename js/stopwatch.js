window.addEventListener('load', ()=>{


    const disp = document.getElementById('stop-d-box');
    disp.innerText = 0;

    document.getElementById('start-btn').addEventListener('click', ()=>{

        let timer = setInterval(()=>{
    
            disp.innerText = parseInt(disp.innerText) + 1;

            document.getElementById('stop-btn').addEventListener('click', ()=>{
                clearInterval(timer);
            })

            document.getElementById('reset-btn').addEventListener('click', ()=>{
                clearInterval(timer);
                disp.innerText = 0;
            })

        }, 1000);
    })

    document.getElementById('reset-btn').addEventListener('click', ()=>{
        disp.innerText = 0;
    })

})