function addNumber(elemClicked, text) {

    const textValue =  text.innerHTML;
    console.log("Display:",textValue);

    const clickedValue = elemClicked.value;
    console.log("Tasto:", clickedValue);

    if(textValue != "0") {
        text.innerHTML += clickedValue;
    } else {
        text.innerHTML = clickedValue;
    }
}