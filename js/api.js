function kanyeRest(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayKanye(data))
    
}
function displayKanye(data){
    console.log(data)
    const kanyeQuote = document.getElementById('quote');
    kanyeQuote.innerText = data.quote;
}
kanyeRest();