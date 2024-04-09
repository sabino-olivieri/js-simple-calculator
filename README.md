# Simpele Calculator

## Testo della consegna
Riprendiamo esercizio di calcolatrice fatta con HTML e CSS e rendiamo il tutto funzionale.
Attenzione: La nostra calcolatrice deve fare dei calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.

## Svolgimento
- [x] aggiungo event listner ai numeri al click parte la funzione addNumber() che aggiunge i numeri a dsplay
- [x] aggiungo event listner agli operatori al click:
    - se c'è il risultato resetta num1 num2 e risultato
    - se il num1 è non è stato preso  prendilo dal display
        altrimenti
        - num2 lo prendo dal display e num1 diventa il risultato di num1 +(operazione)+ num2
        - num2 viene resettato
    - assegno l'operatore alla variabile
    - resetto il display
- [x] aggiungo event listner a uguale 
    - se num2 non è stato preso lo prendo dal display
    altrimenti
    il risultato è uguale a funzione equalOperation()
- [x] aggiungo event listner a canc al click resetto tutto

