window.onload = () => {

    
    const swt = document.getElementById('switch');
    let f = true;
    swt.addEventListener('click', ()=>{
        f = !f;
        document.getElementById('copy').style.display = f ? 'block': 'none';
        const s1 = document.getElementById('f1').innerHTML;
        const s2 = document.getElementById('f2').innerHTML;
        document.getElementById('f1').innerHTML = s2;
        document.getElementById('f2').innerHTML = s1;
    })

    const btn = document.getElementById('btn');
    btn.addEventListener('click', ()=>{
        if(f == true){
            const red = Math.max(Math.min(document.getElementById("red").value, 255), 0);
            const green = Math.max(0, Math.min(document.getElementById("green").value, 255));
            const blue = Math.max(0, Math.min(document.getElementById("blue").value, 255));
            const hex = red.toString(16)+green.toString(16)+blue.toString(16);
            document.getElementById('output-input').value = hex;
        }else{
            const hex = document.getElementById("output-input").value;
            
            const red = parseInt(hex.slice(0,2), 16);
            const green = parseInt(hex.slice(2,4), 16);
            const blue = parseInt(hex.slice(4,6), 16);
            document.getElementById("red").value = red;
            document.getElementById("green").value = green;
            document.getElementById("blue").value = blue;;
        }     
    })

    document.getElementById('copy').addEventListener('click', ()=>{
        document.getElementById('output-input').select();
        document.execCommand('copy');
    })

}