/**
 * Description aggiungo il valore del bottone clicatto al display
 * @param {object} elemClicked elemento bottone cliccato
 * @param {object} text elemento dove aggiungere valori
 */
function addNumber(elemClicked, text) {

    const textValue =  text.innerHTML;
    console.log("Display:",textValue);

    const clickedValue = elemClicked.value;
    console.log("Tasto:", clickedValue);

    if(textValue != "0" && result === "none") {
        text.innerHTML += clickedValue;
    } else {
        text.innerHTML = clickedValue;
        result = "none";
    }

    return result;
}

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

    return res;
}