window.onload = () =>{

    const cnvBtn = document.getElementById("convert-btn");

    cnvBtn.addEventListener('click', ()=>{
        const option = document.getElementById("option-selector").value;
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
    

}