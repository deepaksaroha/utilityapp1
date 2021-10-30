window.onload = () => {
    
    let f = 0;

    const switch1 = document.getElementById("switch");
    switch1.addEventListener("click", ()=>{

        document.getElementById("human-date-input").value = '';
        document.getElementById("human-time-input").value = '';
        
        if(f == 0){
            f = 1;
            const temp1 = document.getElementById("ip-box-1");
            const temp2 = document.getElementById("ip-box-2");
            document.getElementById("box1").appendChild(temp2);
            document.getElementById("box2").appendChild(temp1);
        }else{
            f = 0;
            const temp1 = document.getElementById("ip-box-2");
            const temp2 = document.getElementById("ip-box-1");
            document.getElementById("box1").appendChild(temp2);
            document.getElementById("box2").appendChild(temp1);
        }
    })

    const cnvtBtn = document.getElementById("convert-btn");
    const fn = cnvtBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(f == 0){
            const input1 = document.getElementById("human-date-input").value;
            const input2 = document.getElementById("human-time-input").value;
            const output = Math.floor(new Date(input1+" "+input2).getTime()/1000.0);
            if(String(output) != "NaN"){
                document.getElementById("epoch-time-input").value = output;
            }
        }else{
            const input1 = document.getElementById("epoch-time-input").value;
            const output = new Date(parseInt(input1)*1000);
            console.log(output);
            const year = output.getFullYear();
            const month = ("0" + (parseInt(output.getMonth())+1)).slice(-2);
            const day = ("0" +  output.getDate()).slice(-2);
            const hours = ("0" + output.getHours()).slice(-2);
            const minutes = ("0" + output.getMinutes()).slice(-2);
            const secs = ("0" + output.getSeconds()).slice(-2);
            document.getElementById("human-date-input").value = year+"-"+month+"-"+day;
            document.getElementById("human-time-input").value = hours+":"+minutes+":"+secs;
        }
    })
}