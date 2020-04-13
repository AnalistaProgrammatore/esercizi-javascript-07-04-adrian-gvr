/** ABSTRACT DATA TYPE STACK 
 * @property store -> array degli elementi dello stack
 * @property top -> posizione della testa dello stack
 * @method push -> inserisce un elemento nella lista
 * @method pop -> recupera e rimuove l'elemento dalla testa della lista
 * @method peek -> recupera l'elemento dalla testa dello stack
 * @method length -> grandezza dello stack
 * @method clear -> resetta il puntatore alla testa dello stack
*/
class Stack {
    constructor() {
        this.store = []
        this.top = 0
    }

    push(data) {
        this.store[this.top++] = data
    }

    pop() {
        return this.store[--this.top]
    }

    peek() {
        return this.store[this.top === 0 ? this.top : this.top - 1]
    
    }

    clear() {
        this.top = 0
    }

    length() {
        return this.store.length
    }
}

const stackOriginario = new Stack()

const stackAppoggio = new Stack()

const stackFinale = new Stack()

stackOriginario.push('Blue')
stackOriginario.push('Red')
stackOriginario.push('White')
stackOriginario.push('Yellow')
stackOriginario.push('Red')
stackOriginario.push('White')
stackOriginario.push('Yellow');
stackOriginario.push('ciao')

// visualizzare lo stack iniziale
console.log('lo stack iniziale: \n',stackOriginario.store)

// trasporta sullo stack di appoggio solo quelli diversi da giallo
while (stackOriginario.top > 0) {
    if (stackOriginario.peek() == "Yellow") {
        stackOriginario.pop()
    }
    else {
        stackAppoggio.push(stackOriginario.pop())
    }
}
// rimette in ordine sullo stack finale
while (stackAppoggio.top > 0) {
    stackFinale.push(stackAppoggio.pop())
}
console.log(stackAppoggio.store)
console.log(stackFinale.store)