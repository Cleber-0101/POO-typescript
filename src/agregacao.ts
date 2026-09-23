
//Um usuario podera ter um ou mais endereços vinculados a um unico usuario
// principio de agregação é quando um objeto é composto por outros objetos,
//  mas esses objetos podem existir independentemente do objeto principal.
//  Ou seja, a vida útil dos objetos agregados não depende da vida útil do objeto principal.

//EXEMPLO DE AGREGACAO: Um professor pode existir sem uma turma, mas uma turma não pode existir sem um professor.
class User{
  constructor(
    private nome : String,
    private idade: Number,
    private endereco:  Endereco[]
  ){}

  //metodo para buscar os endereços privados do usuario
  // Para cada endereço do usuario, será exibido no console o nome da rua e o numero da casa : foreach
    buscaEnderecoPrivado(): void {
    this.endereco.forEach((endereco)=> {
        console.log(`Rua: ${endereco.nomeDaRua} - Numero: ${endereco.numeroDaCasa}`)
    })
  }
}

 class Endereco{
    constructor(
        public nomeDaRua: string,
        public numeroDaCasa: number
    ){}
}

//primeiro usuario criado a partir de uma agregação
const user = new User("Cleber", 26 , [
    new Endereco('itaquera',26),
    new Endereco('São Miguel', 2015)
])

user.buscaEnderecoPrivado()