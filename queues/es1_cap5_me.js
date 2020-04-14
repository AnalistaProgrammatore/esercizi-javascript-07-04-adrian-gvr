class Dequeue{
    constructor() {
        this.elementiCoda = {} // creazione di un oggetto vuoto per gli elementi della coda
        this.indiceFineCoda = 0; // puntatore sul primo elemento della coda
        this.indiceInizioCoda = 0; // puntatore sull'ultimo elemento della coda
    }
    addFront(elemento){             // aggiungere un elemento a sinistra
        if (this.isEmpty()){        // verifico se la coda non ha nessun elemento
            this.addBack(elemento); // chiamo la funzione per aggiungere un elemento alla coda
        } else if(this.indiceInizioCoda > 0){    // il caso in qui ho almeno un elemento nella coda
                this.indiceInizioCoda --;       // posiziono il puntatore all'inizio dell'elemento per poter aggiungere prima di esso
              this.elementiCoda[this.indiceInizioCoda] = elemento;
        } else {                    // il caso quando la coda ha un numero compatto di elementi
                for (let i=this.indiceFineCoda; i > 0; i--){    // scorrere dalla fine all'inzio tra gli elementi della coda
                        this.elementiCoda[i] = this.elementiCoda[i-1]; // sposto gli elementi di una posizione verso destra
                }
        }
        this.indiceFineCoda++;      // spostare l'indice della di fine coda di una posizione verso destra
        this.elementiCoda[0] = elemento;    // aggiungere l'elemento indicato all'inzio della coda, prima di tutti gli elementi presenti
    }
    
    addBack(elemento){              // aggiungere un elemento alla destra
        this.elementiCoda[this.indiceFineCoda] = elemento;
        this.indiceFineCoda++;
    }

    removeFront(){
        if (this.isEmpty()){
            return undefined; 
        } 
        let result = this.elementiCoda[this.indiceInizioCoda];      // memorizza l'elemento da eliminare
        delete this.elementiCoda[this.indiceInizioCoda];            // rimuovo l'elemento all'inizio della coda
        this.indiceInizioCoda++;                              // aggiorno il valore dell'indice incrememtando il suo valore di 1
        return result;
    }

    removeBack(){
        if (this.isEmpty()) {
            return undefined;
        }
        //let result = this.elementiCoda[this.indiceFineCoda - 1];
        delete this.indiceFineCoda[this.indiceFineCoda - 1];
        this.indiceFineCoda--;
        //return result;
    }

    peekFront(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.elementiCoda[this.indiceInizioCoda];
    }

    peekBack() {
        if (this.isEmpty()){
            return undefined;
        }
    }

    isEmpty(){
         return this.indiceFineCoda - this.indiceInizioCoda  === 0;
    }

    lunghezza(){
        return this.indiceFineCoda - this.indiceInizioCoda;
    }

    clear(){
        this.elementiCoda = {};
        this.indiceInizioCoda = 0;
        this.indiceFineCoda = 0;
    }

    toString(){
        if (isEmpty()){
            return "";
        }

        let string = `${this.elementiCoda[this.indiceInizioCoda]}`; // inserisco il primo valore della viariabile string; questa variabile mi restituisce il risultato finale
        for(let index = this.indiceInizioCoda + 1; index < this.indiceFineCoda; index++ ){
            string = `${string}, ${this.elementiCoda[index]}`;      // ogni valore della coda viene assegnato come valore della variabile string per essere visualizzato in seguito
        }
        return;
    }
    }

    let coda1 = new Dequeue;
    
    // aggiungere elementi dopo
    coda1.addBack("Maria");
    coda1.addBack("Daniele");
    coda1.addBack("Marco");
    coda1.addBack("Simone");
    coda1.addBack("Mario");

    // aggiungere elementi prima
    coda1.addFront("Mirko");
    coda1.addFront("Lucia");
    coda1.addFront("Silvio");
    coda1.addFront("Paola");
    coda1.addFront("Elisa");
    coda1.addFront("Monica");

    // eliminare dall'inizio
    //coda1.removeFront();

    // eliminare dalla fine
    coda1.removeBack();


    console.log(coda1.elementiCoda);