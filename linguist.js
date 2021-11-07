const languages = [
    'Assamese',
    'Bengali (Bangla)',
    'Gujarati',
    'Hindi',
    'Kannada',
    'Malayalam',
    'Marathi',
    'Nepali',
    'Odia',
    'Punjabi',
    'Sanskrit',
    'Sindhi',
    'Tamil',
    'Telugu',
    'Urdu',
    'English',
    'French',
    'Spanish'
]

const codes = [
    'as',
    'bn',
    'gu',
    'hi',
    'kn',
    'ml',
    'mr',
    'ne',
    'or',
    'pa',
    'sa',
    'sd',
    'ta',
    'te',
    'ur',
    'en',
    'fr',
    'es'
]

window.addEventListener('load', ()=>{
    const inSelect = document.getElementById('lang-inopt');

    for(let i in languages){
        let opt = document.createElement('option');
        opt.setAttribute('class', 'to-option');
        opt.setAttribute('value', codes[i]);
        opt.innerText = languages[i];
        inSelect.appendChild(opt);
    }

    const outSelect = document.getElementById('lang-outopt');

    for(let i in languages){
        let opt = document.createElement('option');
        opt.setAttribute('class', 'from-option');
        opt.setAttribute('value', codes[i]);
        opt.innerText = languages[i];
        outSelect.appendChild(opt);
    }

    const btn = document.getElementById('lang-btn');
    btn.addEventListener('click', ()=>{
        let inputLang = document.getElementById('lang-inopt').value;
        let outputLang = document.getElementById('lang-outopt').value;

        let inputText = document.getElementById('lang-input').value;
        let outputEle = document.getElementById('lang-output');

        fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${inputLang}|${outputLang}`)
        .then(response =>  response.json() )
        .then(response=>{
            outputEle.innerText = response.responseData.translatedText;
        })
        .catch(error => {
            outputEle.innerText = 'Something went Wrong. Try Again!';
        })
        
    })

})