
//palavra reservada
// O que usuario tem 
class User {

    //propriedades dos usuarios
    name: string;
    age: number;

    //construtores é a definicao de como o objeto vai ser criado
    // o importante é que o contrutor recebera parametros para que o objeto seja criado com as propriedades definidas
    constructor(nameC: string, ageC: number) {
        
        this.name = nameC;
        this.age = ageC;
        console.log(`Usuario ${this.name} com a idade ${this.age} criado com sucesso!`);
    }
}

const user1 = new User("John", 30);
const user2 = new User("Jane", 25);
const user3 = new User("Bob", 35);
