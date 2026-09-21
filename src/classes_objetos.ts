class User{
    //propriedades de usuarios 
    private nome: string;
    private idade: number;

    constructor(nameC: string, ageC: number) {
        this.idade = ageC
        this.nome = nameC
        console.log('Nome do usuario: ' + this.nome + ' Idade do usuario: ' + this.idade);
    }
}

const user1  = new User("cleber" , 26)
const user2  = new User("Marcelo" , 22)
const user3  = new User("jessica" , 28)
const user4  = new User("Neide" , 70)


