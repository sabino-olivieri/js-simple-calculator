/**
 * Description aggiungo il valore del bottone clicatto al display
 * @param {object} elemClicked elemento bottone cliccato
 * @param {string / number} operationResult risultato
 * @param {object} text elemento dove aggiungere valori
 */
function addNumber(elemClicked, text, operationResult) {

    const textValue = text.innerHTML;
    // console.log("Display:",textValue);

    const clickedValue = elemClicked.value;
    // console.log("Tasto:", clickedValue);

    let dotAlreadyClicked = false;

    if ((textValue != "0" || clickedValue === ".") && operationResult === "none") {

        if (clickedValue === ".") {

            for (let i = 0; i < textValue.length; i++) {
                if (textValue[i] === ".") {
                    dotAlreadyClicked = true;
                }
            }

            if (!dotAlreadyClicked){
                text.innerHTML += clickedValue;
            }

        } else {
            text.innerHTML += clickedValue;
        }



    } else if (operationResult !== "none" && clickedValue === ".") {
        text.innerHTML = "0" + clickedValue;
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
function equalOperation(firstNum, secondNum, operation) {

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
        res = "errore"
    } else if (!Number.isInteger(res)) {
        console.log(res);
        res = res.toFixed(5);
    }

    return res;
}