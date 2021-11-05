
window.addEventListener('load', ()=>{

    const disp = document.querySelector('.disp');
    const btn = document.getElementById('ip-btn');


    btn.addEventListener('click', ()=>{

        
        fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(response=>{
            disp.innerText = response.ip;
        })
        .catch(error=>{
            disp.innerText = 'Some Error Occured';
        })
    })
})