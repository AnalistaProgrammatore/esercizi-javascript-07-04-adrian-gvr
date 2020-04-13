class Stack{
    constructor(){
        this.dataStore = [];
        this.top = 0;
    }
    push(element) {
        this.dataStore[this.top++] = element;
    }
    pop(){
        return this.dataStore[--this.top];
    }
    peek(){
        return this.dataStore[this.top - 1];
    }
    clear(){
        this.dataStore[this.top] = 0;
    }
    length(){
        return this.top;
    }
}
function checkMissingParenthesis(espressione){   // la funzione che verifica la corrispondenza tra parentesi aperte e parentesi chiuse
    let nuovoStack = new Stack();               // creo un'istanza dell'oggetto Stack
    let missingOpenP;                           // dichiaro la variabile che dovrà contenere la posizone della parentesi chiusa che non è stata mai aperta    
    let missingCloseP;                          // dichiaro la variabile che dovrà contenere la posizione della parentesi aperta che non è stata chiusa
    
    for (let pos = 0; pos < espressione.length; ++pos){         // scorrere tra gli elementi dell'espressione indicata
        if (espressione[pos] === "(") nuovoStack.push(pos);    // se trovo un carattere "(" la lo aggiungo allo stack
        if (espressione[pos] === ")"){                          // se trobo un carattere ")" devo considerare i seguenti casi
            if (nuovoStack.length() === 0) missingOpenP = pos;          // se la lunghezza dello stack è 0 allora mi manca la parentesi di apertura
            else nuovoStack.pop();                                      // altrimenti devo eliminare la parentesi aperta dallo stack
        }
    }
    
    if (nuovoStack.length() > 0) missingCloseP = nuovoStack.pop(); // salvo la posizione della parentesi aperta che non è stata chiusa
    
    
    if (missingOpenP !== undefined) return `nella posizione ${missingOpenP} c'è una parentesi che non è mai stata aperta.`;
    if (missingCloseP !== undefined) return `nella posizione ${missingCloseP} c'è una parentesi aperta che non è mai stata chiusa.`;
    return "non ci sono parentesi fuori posto";
}
    // chiamata della funzione con i parametri attuali
    console.log(checkMissingParenthesis("2.3 + 23 / 12 + (3.14159 * 24"));