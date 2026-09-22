
//Um usuario podera ter um ou mais endereços vinculados a um unico usuario
class User{
  constructor(
    private nome : String,
    private idade: Number,
    private endereco:  Endereco[]
  ){}

  //metodo para buscar os endereços privados do usuario
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