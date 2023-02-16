let calculated = false; // Controllo per la funzione backspace()

// Funzione per il Tasto Clear - Sostituisce l'intero display con ""
function clearDisplay() {
    document.getElementById("result").value = "";
}

/* Funzione per l'aggiunta degli input numerici al display
Concatena l'ultimo valore ai precedenti */
function display(value) {
    document.getElementById("result").value += value;
}

/* Blocco dell'inserimento dati via tastiera nel campo display
Questa riga serve ad evitare un "libero utilizzo" di eval() che potrebbe compromettere il programma */
document.getElementById('result').readOnly = true;

// Funzione di calcolo 
function calculate() {
    var input = document.getElementById("result").value; // Ottiene il valore di input
    // Creo un altra variabile per operare sul risultato ed arrotondando a 7 cifre decimali
    var daArrotondare = eval(input).toFixed(7); // Funzione eval() di calcolo
    // Stampa il risultato arrotondato, rimuovendo i 0 da destra
    document.getElementById("result").value = parseFloat(daArrotondare);
    calculated = true;  // Se l'ultimo tasto premuto è stato "=", scatenando la funzione calculate,
    // il tasto per cancellare l'ultimo valore verrà bloccato.
}

// Funzione per cancellare l'ultimo numero inserito
function backspace() {
    if (calculated) { 
        calculated = false; // Vedi la funzione calculate()
        return;
    } else {
        var display = document.getElementById("result").value;
        display = display.substring(0, display.length-1); // Soluzione trovata su developer.mozzilla
        document.getElementById("result").value = display;
    }
} 
// PROBLEMA : Se clicchi 2 volte su indietro comunque te lo cancella; Non so come fare altrimenti.
