// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


let cellQty = 100;
const play = document.getElementById('play');
const grid = document.getElementById('grid');


// al click del bottone...
play.addEventListener('click', function()  {
    for (let i = 0; i < cellQty; i++) {
        grid.insertAdjacentHTML('beforeend', `<div class="cell"></div>`);
    }

}
)

// genero le 100 celle all'interno della griglia

// assegno un numero ad ogni cella

// al click della singola cella gli asegno una classe per dare il colore di sfondo
// e stampare il numero in console