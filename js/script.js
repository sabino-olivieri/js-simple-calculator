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

        addNumber(numElem[i], dispalyElem, result);
        
    });
}

// aggiungo event listner agli operatori
for(let i = 0; i < operatorElem.length; i++) {
    operatorElem[i].addEventListener("click", function(){

        console.log("num1:", num1, "num2:", num2, "op:", operator);

        if(result !== "none") {
            num1 = 0;
            num2 = 0;
            result = "none";
            console.log("RESET","num1:", num1, "num2:", num2, "op:", operator);
        }

        //se il num1 è non è stato preso, prendilo dal display
        if (num1 === 0) {

            num1 = parseFloat(dispalyElem.innerHTML);
            console.log(num1, "Numero1");

        } else {

            //num2 lo prendo dal display e num1 diventa il risultato di num1 +(operazione)+ num2
            num2 = parseFloat(dispalyElem.innerHTML);
            console.log("numero2", num2);
            num1 = equalOperation(num1, num2, operator);
            num2 = 0;

        }

        operator = operatorElem[i].value;
        dispalyElem.innerHTML = "0";

        
    });
}

// aggiungo event listner a uguale
equalElem.addEventListener("click", function() {
    // console.log(operator, num1, num2);
    
    // serve per continuare la stessa operazione quando si clicca sempre uguale
    if (num2 === 0){ 
    num2 = parseFloat(dispalyElem.innerHTML);
    // console.log(num2, typeof num2);
    }
    result = equalOperation(num1, num2, operator);
    console.log(result);

    if(!isNaN(result)){
    num1 = result;
    }

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