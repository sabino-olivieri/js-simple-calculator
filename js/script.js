// prendo elementi con classe nummber
const numElem = document.querySelectorAll(".number");
console.log(numElem);

// prendo elemento scritta dispaly
const dispalyElem = document.querySelector(".text-display");

//aggiungo event listner ai numeri
for (let i = 0; i < numElem.length; i++) {
    numElem[i].addEventListener("click", function () {
        addNumber(numElem[i], dispalyElem)
    });
}