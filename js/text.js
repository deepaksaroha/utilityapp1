window.addEventListener('load', () =>{

    const cnvBtn = document.getElementById("convert-btn");

    const options = document.querySelectorAll('.options');

    let val = "spl";

    options.forEach(element=>{
        if(element.getAttribute('name') === 'spl'){
            element.style.backgroundColor = "grey";
            element.style.color = "whitesmoke";
        }

        element.addEventListener('click', (e)=>{
            val = e.target.getAttribute('name');
            document.getElementById("input-text").innerText = "";
            document.getElementById("output-text").innerText = "";
            e.target.style.backgroundColor = "grey";
            e.target.style.color = "whitesmoke";
            uncolor(e.target);
        })
    })

    function uncolor(target){
        options.forEach(ele=>{
            if(ele !== target){
                ele.style.backgroundColor = "unset";
                ele.style.color = "unset";
            }
        }
    )};


    cnvBtn.addEventListener('click', ()=>{
        const inputText = document.getElementById("input-text").value;
        const output = document.getElementById("output-text");

        console.log(val)
        switch(val){
            case "spl":
                console.log(inputText);
                output.value = splitText(inputText);
                break;
            case "low":
                output.value = lowerCase(inputText);
                break;
            case "up":
                output.value = upperCase(inputText);
                break;
            case "rev":
                output.value = reverseText(inputText);
                break;
            case "char":
                output.value = charCount(inputText);
                break;
            case "word":
                output.value = wordCount(inputText);
                break;
            default:
        }
    })

    function splitText(text){
        return text.split(" ");
    }
    function lowerCase(text){
        return text.toLowerCase();
    }
    function upperCase(text){
        return text.toUpperCase(" ");
    }
    function reverseText(text){
        return text.split('').reverse().join('');
    }
    function charCount(text){
        return text.split(' ').join('').length;
    }
    function wordCount(text){
        return text.split(' ').length;
    }    
})