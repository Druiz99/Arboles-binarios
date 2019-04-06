class Nodo {
    constructor(dato, hizq, hder) {
        this.dato = dato;
        this.hizq = null;
        this.hder = null;
    }
    set Dato(valor) { this.dato = valor }


    get Dato() { return this.dato }
    get Hder() { return this.hder }
    get Hizq() { return this.hizq }
}



class ArbolBinario {
    constructor() {
        this.raiz = null
    }

     add(nuevo) {
        if (this.raiz == null) {
            this.raiz = nuevo
        }
        else{
            this.acomoda(nuevo, this.raiz)
        }
    }

    acomoda(n, r) {
        if (n.dato < r.dato) {
            if (r.hizq == null) {
                r.hizq = n
            }
            else {
                this.acomoda(n, r.hizq)
            }
        }
        else {
            if (r.hder == null) {
                r.hder = n
            } else {
                this.acomoda(n, r.hder)
            }
        }
    }

    inOrder(r){
        var cad1 = " ";
        if (r.hizq != null) {
            cad1 += this.inOrder(r.hizq)    
        }

        cad1 += r.dato

        if (r.hder != null) {
            cad1 += this.inOrder(r.hder)
        }
        return cad1
    }

    preOrder(r){
        var cad2 = " ";

        cad2 += r.dato

        if (r.hizq != null) {
            cad2 += this.preOrder(r.hizq)
        }

        if (r.Hder != null) {
            cad2 += this.preOrder(r.hder)
        }
        return cad2
    }

    
    posOrder(r) {
        var cad3 = " ";

        if (r.hizq != null) {
            cad3 += this.posOrder(r.hizq)
        }

        if (r.Hder != null) {
            cad3 += this.posOrder(r.hder)
        }

        cad3 += r.dato

        return cad3
    }

}

