window.addEventListener('load', () =>{
    let subOptions = document.getElementById("sub-option");

    let topSelection = "1";
    let subSelection = "1";
    let toEncodeOrDecode = 1;
    

    const input = document.getElementById("input-text");
    const output = document.getElementById("output-text");

    const topop = document.getElementById("top-option");
    topop.addEventListener("change", (e)=>{

        console.log('sdsad');
        
        input.value = '';
        output.value = '';
        subSelection = "1";

        
        topSelection = e.target.value;

        if(topSelection == "1" || topSelection == "2"){
            subOptions.style.display = "none";
            opearationSwitch.style.display = "inline-block";
            
            toEncodeOrDecode = 1;
            document.getElementById("operation-btn").innerText = "Encode";
            
        }else{
            subOptions.style.display = "inline-block";
            opearationSwitch.style.display = "none";

            document.getElementById("operation-btn").innerText = "Hash";
        }

    })

    subOptions.addEventListener("change", (e)=>{
        input.value = '';
        output.value = '';

        subSelection = e.target.value;

    })

    const opearationSwitch = document.getElementById("operation-switch");
    opearationSwitch.addEventListener("click", ()=>{
        output.value = '';
        input.value = '';

        if(toEncodeOrDecode === 1){
            toEncodeOrDecode = 0;
            document.getElementById("operation-btn").innerText = "Decode";
        }else{
            toEncodeOrDecode = 1;
            document.getElementById("operation-btn").innerText = "Encode";
        }
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