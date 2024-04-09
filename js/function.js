/**
 * Description aggiungo il valore del bottone clicatto al display
 * @param {object} elemClicked elemento bottone cliccato
 * @param {string / number} operationResult risultato
 * @param {object} text elemento dove aggiungere valori
 */
function addNumber(elemClicked, text, operationResult) {

    const textValue =  text.innerHTML;
    // console.log("Display:",textValue);

    const clickedValue = elemClicked.value;
    // console.log("Tasto:", clickedValue);

    if(textValue != "0" && operationResult === "none") {
        text.innerHTML += clickedValue;
    } else {
        text.innerHTML = clickedValue;
    }

}

/**
 * Description esegue opeazione matematica tra 2 numeri in base all'operatore passato
 * @param {number} firstNum primo operando
 * @param {number} secondNum secondo operando
 * @param {string} operation operazione da esegure es."+" per addizione
 * @returns {number} restituisce il risultato dell'operazione, o errore se viene effettuata una divisione per 0
 */
function equalOperation (firstNum, secondNum, operation) {
    
    let res = 0;

    switch (operation) {
        case "+":
            res = firstNum + secondNum;
            
            break;
    
        case "-":
            res = firstNum - secondNum;

            break;

        case "*":
            res = firstNum * secondNum;

            break;

        case "/":
            res = firstNum / secondNum;

            break;

        default:
            break;
    }

    if (res === Infinity || isNaN(res)) {
        res = "Errore"
    }

    return res;
}