// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Ilcomputer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
// - abbiamo calpestato una fungo
// - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

let cellQty;
const play = document.getElementById('play');
const grid = document.getElementById('grid');
const difficult = document.getElementById('difficult');
let mushroomsArray = [];
let cellEl;
let winCell = 0;






// al click del bottone...
play.addEventListener('click', function () {


    if (difficult.value === 'easy') {
        cellQty = 49;
        grid.style.width = "700px";
    } else if (difficult.value === 'medium') {
        cellQty = 81;
        grid.style.width = "900px";

    } else if (difficult.value === 'hard') {
        cellQty = 100;
        grid.style.width = "1000px";
    }


    // reset number in array
    mushroomsArray = []
    //reset score
    winCell = 0;
    // dichiaro una variabile globale da utilizzare nei cicli a seguire

    // genero le 100 celle all'interno della griglia
    grid.innerHTML = "";
    for (let i = 0; i < cellQty; i++) {

        // assegno un numero ad ogni cella e la inserisco in HTML
        const cell = `<div class="cell">${i + 1}</div>`;
        grid.insertAdjacentHTML('beforeend', cell);

        // creo un array con tutte le celle all'inerno
        cellEl = document.querySelectorAll('.cell')

        // genero 16 numeri casuali fino al riempimento dell'array
        while (mushroomsArray.length < 16) {
            const mushroomsNumber = randomNumber(cellQty);
            // se il numero generato non è già incluso nell'array lo aggiungo
            if (!mushroomsArray.includes(mushroomsNumber)) {
                mushroomsArray.push(mushroomsNumber)

            }
        }


        // al click della singola cella eseguo la funzione clickCell
        cellEl[i].addEventListener('click', clickCell)


    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////// DISATTIVARE il commento nelle due righe successive per vedere in console i numeri con il fungo ///////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // mushroomsArray.sort((a, b) => a - b);
    // console.log(mushroomsArray);
}
)

/**
 genera un numero casuale da 1 a x* 
 * @param {number} x 
 * @returns {number}
 */
function randomNumber(x) {
    const result = Math.floor(Math.random() * x) + 1;
    return result
}


function clickCell() {

    // al click di una cella...
    // incremento il contatore del punteggio e lo stampo nella dom
    winCell++
    const score = document.querySelector('.score')
    score.innerHTML = 'score: ' + winCell
    //aggiungo la classe per modificare il colore
    this.classList.add('click-cell')

    // condizione di vincita
    if (winCell == cellQty - 16) {
        alert(`Hai vinto`)
    }



    // se clicco una casella con il fungo
    if (mushroomsArray.includes(Number(this.innerHTML))) {
        this.style.backgroundColor = "orange";
        this.style.fontSize = "xx-large";
        winCell--
        this.innerHTML = '🍄'
        console.log('HAI PERSO');
        alert(`Hai perso. Il tuo punteggio: ${winCell}/${cellQty - 16}`)
        score.innerHTML = `score:  ${winCell} `

        for (let i = 0; i < cellQty; i++) {

            cellEl[i].removeEventListener('click', clickCell)

        }
    }
}