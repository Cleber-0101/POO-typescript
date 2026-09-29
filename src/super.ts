
// Aplicando herança extendendo a classe
// Super para usar os atributos e metodos da classe Pai
// Ultilizando override que sobre escreve os metodos da classe Pai

//Atualmente eu consigo então permitir usar a permissão dos atributos da classe pai para então sobreescrever a classe filha que eu preciso 

class User {
    constructor(
        private _nome: string,
        private _idade: number,
        private _permissao: boolean
    ) { }

    get buscaNome(): string {
        return this._nome
    }

    set mudeONome(mudarNome: string) {
        this._nome = mudarNome
    }

    get BuscaIdade(): number {
        return this._idade
    }

    get euDeixei(): boolean {
        return this._permissao
    }
}


class funcionarioDaEmpresa extends User {
    constructor
        (nome: string, idade: number, permissao: boolean) {
        super(nome, idade, permissao)
        if (!this.euDeixei) {
            throw new Error("Voce não é funcionario da empresa");
        }
    }

    fazCafe() {
        console.log(`Usuario ${this.buscaNome} é funcionario da empresa e pode fazer café`);
    }
}

const func1 = new funcionarioDaEmpresa("Cleber", 26, true)
const func2 = new funcionarioDaEmpresa("jessica", 30, false)

