// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


let cellQty;
const play = document.getElementById('play');
const grid = document.getElementById('grid');
const difficult = document.getElementById('difficult');



// al click del bottone...
play.addEventListener('click', function() {
    

    console.log(difficult.value);

    if(difficult.value === 'easy'){
        cellQty = 49;
        grid.style.width = "700px";
    } else if (difficult.value === 'medium') {
        cellQty = 81;
        grid.style.width = "900px";
        
    } else if (difficult.value === 'hard') {
        cellQty = 100;
        grid.style.width = "1000px";
    }
    
    // dichiaro una variabile globale da utilizzare nei cicli a seguire
    let cellEl;
    
    // genero le 100 celle all'interno della griglia
    grid.innerHTML = "";
    for (let i = 1; i < cellQty +1; i++) {
        // assegno un numero ad ogni cella
        const cell = `<div class="cell">${i}</div>`;
        grid.insertAdjacentHTML('beforeend', cell);

        // creo un array con tutti gli elementi all'inerno
        cellEl = document.querySelectorAll('.cell')
       
    }

    
    // scorro all'interno dell'array
    for (let i = 0; i < cellEl.length; i++) {
        const element = cellEl[i];

        // al click della singola cella gli asegno una classe per dare il colore di sfondo
        element.addEventListener('click', function(){
            element.classList.toggle('click-cell')

            // e stampare il numero in console
            console.log(element.innerHTML);
        })    
    }

}
)

