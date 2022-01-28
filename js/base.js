window.onload = () => {
    const option = document.querySelectorAll('.options');

    let val = "bd";

    option.forEach(ele=>{
        ele.addEventListener('click', (event)=>{
            val = event.target.getAttribute('name');
            document.getElementById('input-text').value = "";
            document.getElementById('output-text').value = "";
            event.target.style.backgroundColor = "grey";
            event.target.style.color = "whitesmoke";
            uncolor(event.target);
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

    const convbtn = document.getElementById("conv");

    convbtn.addEventListener('click', ()=>{
        const input = document.getElementById("input-text");
        const output = document.getElementById("output-text");
        switch(val){
            case "bd":
                convert(2, 10);
                break;
            case "dh":
                convert(10, 16);
                break;
            case "do":
                convert(10, 8);
                break;
            case "bo":
                convert(2, 8);
                break;
            case "db":
                convert(10, 2);
                break;
            default:
                "";
        }
    })

    function convert(inputBase, outputBase){
        const inputValue = parseInt(document.getElementById('input-text').value);
        const tempvalue = parseInt(inputValue, inputBase);
        const ans = tempvalue.toString(outputBase);
        const output = document.getElementById('output-text');
        if(ans.toString() !== 'NaN'){            
            document.getElementById('input-text').value = tempvalue.toString(inputBase);
            output.value = ans;
        }
    }
}