//* Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:

// Che ci sia un array da qualche parte?
//no usero il .random 
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
//

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//* prima chiedo se si vuole inizializzare il programma con un pront

const startGame = prompt('inserisci "start" se vuoi comimciare');

//* se l'input e "start" faccio girare un for su un metodo random 2 volte per avere i due numeri(una per il giocatore uno per la macchina)

if(startGame.includes('start')){

    let userNumber = 0;
    let pcNumber = 0;

 for(let i = 0; i < 1; i++){
  
    userNumber =  Math.floor(Math.random(1) * 6)  + 1;
    pcNumber = Math.floor(Math.random(1) * 6) + 1;
    console.log(' il tuo numero è : '+ userNumber, '\n il numero della macchina è : ' + pcNumber);
 }
//*dopo con un if o un operatore terziario verificare quale dei due numeri sia maggiore e assegno una vincitore

if(userNumber === pcNumber){
    alert('è un pareggio')
}



 






}
