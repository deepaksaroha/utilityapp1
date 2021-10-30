const units = {
    distance: [
        "inch", "meter", "yards", "feet", "light-years"
    ],
    time: [
        "seconds", "minutes", "hours", "days", "years"
    ],
    weight: [
        "kilograms", "ounce", "pounds", "metric-ton"
    ]
}

window.onload = () =>{
    let selection = 'distance';
    
    let d = document.getElementById("distance");
    d.addEventListener("click", (e) => {
        selection = "distance";
        setUnits();
    })
    
    let t = document.getElementById("time");
    t.addEventListener("click", (e) => {
        selection = "time";
        setUnits();
    })
    
    let w = document.getElementById("weight");
    w.addEventListener("click", (e) => {
        selection = "weight";
        setUnits();
    })

    function setUnits(){
        document.getElementById("input-unit-selection").removeAttribute('disabled');
        document.getElementById("output-unit-selection").removeAttribute('disabled');

        const select = document.getElementById("input-unit-selection");
        const select1 = document.getElementById("output-unit-selection");

        select.innerHTML = '';
        select1.innerHTML = '';

        switch(selection){
            case "distance": 
            for(e in units.distance){
                select.appendChild(createOption(units.distance[e]));
                select1.appendChild(createOption(units.distance[e]));
            }
            break;
            case "time": 
            for(e in units.time){
                select.appendChild(createOption(units.time[e]));
                select1.appendChild(createOption(units.time[e]));
            }
            break;
            case "weight":
            for(e in units.weight){
                select.appendChild(createOption(units.weight[e]));
                select1.appendChild(createOption(units.weight[e]));
            }
            break;
            default:

        }
    }

    function createOption(value){
        let op = document.createElement("option");
        op.innerText = value;
        op.value = value;
        return op;
    }

    const cnvbtn = document.getElementById("convert-btn");
    cnvbtn.addEventListener("click", ()=>{
        let outputvalue;

        const inputvalue = parseFloat(document.getElementById("input-value").value);
        const inputunit = document.getElementById("input-unit-selection").value;
        const outputunit = document.getElementById("output-unit-selection").value;
        let tempvalue;
        switch(selection){
            case "distance":
                switch(inputunit){
                    case 'inch':
                        tempvalue = 0.0254*(inputvalue);
                        break;
                    case 'meter':                        
                        tempvalue = 1*(inputvalue);
                        break;
                    case 'yards':
                        tempvalue = 0.9144*(inputvalue);
                        break;
                    case 'feet':
                        tempvalue = 0.3048*(inputvalue);
                        break;
                    case 'light-years':
                        tempvalue = 9.461e+15*(inputvalue);
                        break;
                    default:
                }

                switch(outputunit){
                    case 'inch':
                        outputvalue = 39.3701*tempvalue;
                        break;
                    case 'meter':                        
                        outputvalue = 1*tempvalue;
                        break;
                    case 'yards':
                        outputvalue = 1.09361*tempvalue;
                        break;
                    case 'feet':
                        outputvalue = 3.28084*tempvalue;
                        break;
                    case 'light-years':
                        outputvalue = 1.057e-16*tempvalue;
                        break;
                    default:
                }


            case "time":

                switch(inputunit){
                    case 'seconds':
                        tempvalue = 1*(inputvalue);
                        break;
                    case 'minutes':                        
                        tempvalue = 60*(inputvalue);
                        break;
                    case 'hours':
                        tempvalue = 3600*(inputvalue);
                        break;
                    case 'days':
                        tempvalue = 86400*(inputvalue);
                        break;
                    case 'years':
                        tempvalue = 3.154e+7*(inputvalue);
                        break;
                    default:
                }

                switch(outputunit){
                    case 'seconds':
                        outputvalue = 1*tempvalue;
                        break;
                    case 'minutes':                        
                        outputvalue = 0.0166667*tempvalue;
                        break;
                    case 'hours':
                        outputvalue = 0.000277778*tempvalue;
                        break;
                    case 'days':
                        outputvalue = 1.1574e-5*tempvalue;
                        break;
                    case 'years':
                        outputvalue = 3.171e-8*tempvalue;
                        break;
                    default:
                }
            
            case "weight":

                switch(inputunit){
                    case 'kilograms':
                        tempvalue = 1*(inputvalue);
                        break;
                    case 'ounce':                        
                        tempvalue = 0.0283495*(inputvalue);
                        break;
                    case 'pounds':
                        tempvalue = 0.4535921*(inputvalue);
                        break;
                    case 'metric-ton':
                        tempvalue = 907.185*(inputvalue);
                        break;
                    default:
                }

                switch(outputunit){
                    case 'kilograms':
                        outputvalue = 1*tempvalue;
                        break;
                    case 'ounce':                        
                        outputvalue = 35.274*tempvalue;
                        break;
                    case 'pounds':
                        outputvalue = 2.20462*tempvalue;
                        break;
                    case 'metric-ton':
                        outputvalue = 0.00110231*tempvalue;
                        break;
                    default:
                }
        }
        
        document.getElementById("output-value").innerText = outputvalue.toFixed(10);
        
    })
    

}