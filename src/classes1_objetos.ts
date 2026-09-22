class User2 {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        //validação de idade
        // Uma das opções abaixo precisa ser verdadeira para lançar o erro
        if(age <= 0 || age > 120) {
            throw new Error('Idade inválida');
        }
        //this esta referenciando primeiro a propriedade e depois o parametro do construtor
        this.name = name;
        this.age = age;
        console.log('USUARIOS: ' + this.name + ' Idade : ' + this.age);
    }

    //metodo para validar idade 
    validateAge(age: number){
        // OU uma das opções abaixo precisa ser verdadeira para lançar o erro
        if(age <= 0 || age > 150) {
            throw new Error('Idade inválida');
        }
    }
}

const pessoa1 = new User2("Cleber", 26);
const pessoa2 = new User2("Marcelo", 22);
const pessoa3 = new User2("Jessica", 28);
const pessoa4 = new User2("Jessica", 28);
const pessoa5 = new User2("Jessica", 28);
const OUTROS = new User2("teste", 100);