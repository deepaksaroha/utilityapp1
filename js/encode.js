window.onload = ()=>{
    const option = document.querySelectorAll('.options');

    let val = "url";
    btnSelector("inline", "inline", "none");

    option.forEach(ele=>{
        if(ele.getAttribute('name') === 'url'){
            ele.style.backgroundColor = "grey";
            ele.style.color = "whitesmoke";
        }

        ele.addEventListener('click', (event)=>{
            val = event.target.getAttribute('name');
            event.target.style.backgroundColor = "grey";
            event.target.style.color = "whitesmoke";
            uncolor(event.target);
            document.getElementById("input-text").value = "";
            document.getElementById("output-text").value = "";

            switch(val){
                case "url":
                    btnSelector("inline", "inline", "none");
                    break;
                case "base 64 en":
                    btnSelector("inline", "none", "none");
                    break;
                case "base 64 de":
                    btnSelector("none", "inline", "none");
                    break;
                case "MD5":
                    btnSelector("none", "none", "inline");
                    break;
                case "SHA-1":
                    btnSelector("none", "none", "inline");
                    break;
                case "SHA-256":
                    btnSelector("none", "none", "inline");
                    break;
                case "SHA-512":
                    btnSelector("none", "none", "inline");
                    break;
                default:
                    btnSelector("inline", "inline", "none");
            }
        })
    })

    
    function uncolor(target){
        option.forEach(ele=>{
            if(ele !== target){
                ele.style.backgroundColor = "unset";
                ele.style.color = "unset";
            }
        }
    )};

    const encodebtn = document.getElementById("encode");
    const decodebtn = document.getElementById("decode");
    const genbtn = document.getElementById("gen");


    encodebtn.addEventListener('click', ()=>{
        const input = document.getElementById("input-text");
        const output = document.getElementById("output-text");
        switch(val){
            case "url":
                output.value = urlEncode(input.value);
                break;
            case "base 64 en":
                output.value = base64Encode(input.value);
                break;
            default:
                "";
        }
    })

    decodebtn.addEventListener('click', ()=>{
        const input = document.getElementById("input-text");
        const output = document.getElementById("output-text");
        switch(val){
            case "url":
                output.value = urlDecode(input.value);
                break;
            case "base 64 de":
                output.value = base64Decode(input.value);
                break;
            default:
                "";
        }
    })

    genbtn.addEventListener('click', ()=>{
        const input = document.getElementById("input-text");
        const output = document.getElementById("output-text");
        switch(val){
            case "MD5":
                output.value = MD5Hash(input.value);
                break;
            case "SHA-1":
                output.value = SHA1Hash(input.value);
                break;
            case "SHA-256":
                output.value = SHA256Hash(input.value);
                break;
            case "SHA-512":
                output.value = SHA512Hash(input.value);
                break;
            default:
                "";
        }
    })


    function btnSelector(e, d, g){
        document.getElementById("encode").style.display = e;
        document.getElementById("decode").style.display = d;
        document.getElementById("gen").style.display = g;
    }

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
        return CryptoJS.SHA512(inputText);
    }

}