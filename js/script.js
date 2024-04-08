// prendo elementi con classe nummber
const numElem = document.querySelectorAll(".number");
console.log(numElem);

// prendo elementi per operazioni
const operatorElem = document.querySelectorAll(".operations");
console.log(operatorElem);

// prendo elemento uguale
const equalElem = document.querySelector(".result");

// prendo elemento canc
const cancElem = document.querySelector(".canc");


let num1 = 0;
let num2 = 0;
let operator ="";
let result = "none";

// prendo elemento scritta dispaly
const dispalyElem = document.querySelector(".text-display");

// aggiungo event listner ai numeri
for (let i = 0; i < numElem.length; i++) {

    numElem[i].addEventListener("click", function () {

        const flag = addNumber(numElem[i], dispalyElem, result);
        result = flag;

    });
}

// aggiungo event listner agli operatori
for(let i = 0; i < operatorElem.length; i++) {
    operatorElem[i].addEventListener("click", function(){

        operator = operatorElem[i].value;
        console.log(operator);

        if (num1 === 0) {

            num1 = parseFloat(dispalyElem.innerHTML);
            console.log(num1, "Numero1");

        } else {

            num2 = parseFloat(dispalyElem.innerHTML);
            console.log("numero2", num2);
            num1 = equalOperation(num1, num2, operator);

        }

        dispalyElem.innerHTML = "0";
    });
}

// aggiungo event listner a uguale
equalElem.addEventListener("click", function() {
    num2 = parseFloat(dispalyElem.innerHTML);
    console.log(num2, typeof num2);
    result = equalOperation(num1, num2, operator);
    console.log(result);
    

    if (result === Infinity) {
        result = "Errore"
    }

    num1 = 0;
    num2 = 0;   

    dispalyElem.innerHTML = result;
}); 

// aggiungo event listner a canc
cancElem.addEventListener("click", function() {
    num1 = 0;
    num2 = 0;
    operator = "";
    result = "none";
    dispalyElem.innerHTML = "0";
});