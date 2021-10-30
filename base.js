window.onload = () => {

    const btn = document.getElementById('btn');
    btn.addEventListener('click', ()=>{


        inputBase = parseInt(document.getElementById('input-base').value);
        outputBase = parseInt(document.getElementById('output-base').value);
        inputValue = document.getElementById('input-value').value;
        outputValueElement = document.getElementById('output-value');

        
        outputValueElement.innerText = '';

        let tempvalue = parseInt(inputValue, inputBase);
        
        let ans = tempvalue.toString(outputBase);
        if(ans.toString() !== 'NaN'){            
            document.getElementById('input-value').value = tempvalue.toString(inputBase);
            outputValueElement.innerText = ans;
        }
    })
}