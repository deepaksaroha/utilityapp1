window.addEventListener('load', () =>{
    let subop = document.getElementById("sub-option");    
    const topop = document.getElementById("top-option");

    let topSelection = "1";
    let subSelection = "1";
    let toEncodeOrDecode = 1;


    const topOpSelector = document.getElementById('encoder-selector');
    topOpSelector.addEventListener('click', ()=>{
        topop.style.visibility = 'visible';
    })

    const subOpSelector = document.getElementById('hash-selector');
    subOpSelector.addEventListener('click', ()=>{
        subop.style.display = 'block';
        subop.style.visibility = 'visible';
    })



    const topOptions = document.querySelectorAll('.top-options');
    topOptions.forEach(element => {
        element.addEventListener('click', (e)=>{
            console.log(e.target.innerText);
            topOpSelector.innerText = e.target.innerText;
            topop.style.visibility = 'hidden';
    
            input.value = '';
            output.value = '';
            subSelection = "1";

            
            topSelection = e.target.id;

            if(topSelection == "1" || topSelection == "2"){
                subop.style.visibility = 'hidden';
                subOpSelector.style.visibility = "hidden";
                opearationSwitch.style.display = "inline-block";

                toEncodeOrDecode = 1;
                document.getElementById("operation-btn").innerText = "Encode";

            }else{
                subOpSelector.style.visibility = "visible";
                subop.style.visibility = 'visible';
                opearationSwitch.style.display = "none";

                document.getElementById("operation-btn").innerText = "Hash";
            }

        })
    })

    const subOptions = document.querySelectorAll('.sub-options');
    subOptions.forEach(element => {
        element.addEventListener('click', (e)=>{
            console.log(e.target.innerText);
            subOpSelector.innerText = e.target.innerText;
            subop.style.display = 'none';
            subop.style.visibility = 'visible';
            
    
            output.value = '';
            input.value = '';

            if(toEncodeOrDecode === 1){
                toEncodeOrDecode = 0;
                document.getElementById("operation-btn").innerText = "Decode";
            }else{
                toEncodeOrDecode = 1;
                document.getElementById("operation-btn").innerText = "Encode";
            }

            
            subop.style.display = 'none';
        })
    })






















    const input = document.getElementById("input-text");
    const output = document.getElementById("output-text");

    topop.addEventListener("on", (e)=>{
        

    })

    subop.addEventListener("change", (e)=>{
        subop.style.visibility = 'hidden';
        
        input.value = '';
        output.value = '';

        subSelection = e.target.value;

    })

    const opearationSwitch = document.getElementById("operation-switch");
    opearationSwitch.addEventListener("click", ()=>{
        
    })


    const encodeDecodeBtn = document.getElementById("operation-btn");

    encodeDecodeBtn.addEventListener("click", ()=>{

        output.value = '';
        let inputText = input.value;

        
        console.log(inputText);
        console.log(topSelection);
        console.log(subSelection);

        switch(topSelection){
            case "1":
                if(toEncodeOrDecode == 1){
                    output.value = urlEncode(inputText);
                }else{
                    output.value = urlDecode(inputText);
                }
                break;
            case "2":
                if(toEncodeOrDecode == 1){
                    output.value = base64Encode(inputText);
                }else{
                    output.value = base64Decode(inputText);
                }
                break;
            case "3":
                switch(subSelection){
                    case "1":
                        output.value = MD5Hash(inputText);
                        break;
                    case "2":
                        output.value = SHA1Hash(inputText);
                        break;
                    case "3":
                        output.value = SHA256Hash(inputText);
                        break;
                    case "4":
                        output.value = SHA512Hash(inputText);
                        break;
                    default:
                        output.value = '';
                }
                break;
            default:
                outputText.innerText = '';
        }
    })

function urlEncode(inputText){
    return encodeURIComponent(inputText);
}

function urlDecode(inputText){
    return decodeURIComponent(inputText);
}


function base64Encode(inputText){
    return btoa(inputText);
}


function base64Decode(inputText){
    return atob(inputText);
}


function MD5Hash(inputText){
    return CryptoJS.MD5(inputText);
}


function SHA1Hash(inputText){
    return CryptoJS.SHA1(inputText);
}


function SHA256Hash(inputText){
    return CryptoJS.SHA256(inputText);
}


function SHA512Hash(inputText){
    console.log('512');
    return CryptoJS.SHA512(inputText);
}

})