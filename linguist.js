const languages = [
    'Assamese',
    'Bengali (Bangla)',
    'Bodo',
    'Dogri',
    'Gujarati',
    'Hindi',
    'Kannada',
    'Kashmiri',
    'Konkani',
    'Maithili',
    'Malayalam',
    'Meitei (Manipuri)',
    'Marathi',
    'Nepali',
    'Odia',
    'Punjabi',
    'Sanskrit',
    'Santali',
    'Sindhi',
    'Tamil',
    'Telugu',
    'Urdu'
]

const codes = [
    'as',
    'bn',
    'brx',
    'doi',
    'gu',
    'hi',
    'kn',
    'ks',
    'gom',
    'mai',
    'ml',
    'mni',
    'mr',
    'ne',
    'or',
    'pa',
    'sa',
    'sat',
    'sd',
    'ta',
    'te',
    'ur'
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

    
    
})