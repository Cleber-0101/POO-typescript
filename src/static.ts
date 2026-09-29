class User{

    public static contador = 0;
    constructor(private nome : string){}

    static increment(){
        this.contador++
    }
}

const user = new User("john snow")
console.log(User.contador);
User.increment();

console.log(User.contador);
User.increment();

console.log(User.contador);
User.increment();
console.log(User.contador);

console.log(User.contador);

//outro exemplo de como usar STATIC
class Validador {
    static validarEmail(email: string): boolean {
        return email.includes("@");
    }
}
//não preciso "criar/instanciar um validador"
console.log(
    Validador.validarEmail("cleber@email.com")
);




//outro exemplo
class Pagamento {
    static calcularTaxa(valor: number): number {
        return valor * 0.05;
    }
}

const taxa = Pagamento.calcularTaxa(1000);

console.log(taxa);


