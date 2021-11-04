window.addEventListener('load', () =>{

    const cnvBtn = document.getElementById("convert-btn");

    const options = document.querySelectorAll('.option-btn');
    let option = null;

    
    const expandBtn = document.querySelector('#text-expand-btn');
    const optionsEle = document.getElementById('option-selector');

    options.forEach(element=>{
        element.addEventListener('click', (e)=>{
            expandBtn.innerText = e.target.innerText;

            const eve = new Event('click');
            expandBtn.dispatchEvent(eve);

            if(option != null && e.target.id !== option){
                document.getElementById(option).style.background = 'rgb(97 128 120 / 76)';
            }
            option = e.target.id;
            e.target.style.backgroundColor = 'rgb(61 74 71)';
        })
    })

    cnvBtn.addEventListener('click', ()=>{
        const inputText = document.getElementById("input-text").value;
        const output = document.getElementById("output-text");

        console.log()
        switch(option){
            case "1":
                output.innerText = splitText(inputText);
                break;
            case "2":
                output.innerText = lowerCase(inputText);
                break;
            case "3":
                output.innerText = upperCase(inputText);
                break;
            case "4":
                output.innerText = reverseText(inputText);
                break;
            case "5":
                output.innerText = charCount(inputText);
                break;
            case "6":
                output.innerText = wordCount(inputText);
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
    



    expandBtn.addEventListener('click', (e)=>{


        if(optionsEle.style.visibility !== 'hidden'){
            optionsEle.style.visibility = 'hidden';
        }else{
            optionsEle.style.visibility = 'visible';
        }
    })

    
})