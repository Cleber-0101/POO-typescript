// Classe Pai
class Person {
   constructor(
        public name: string,
        public age: number
    ) {}

    //metodo para gerar relatorio do funcionario
    gerarRelatorioFuncionario(): void {
        console.log(`${this.name}: Gerando relatorio do funcionario...`);
    }
}

class manager extends Person {
  
}

class Empregados extends Person{
  //posso criar um metodos expecifico para essa classe // overraide por debaixo dos panos 
     gerarRelatorioFuncionario(): void {
        console.log(`${this.name}: Esse funcionario a partir de agora vai receber mais - pesquisando no banco de dados .....`);
    }}

class Admin extends Person {
    //metodo para gerar relatorio do funcionario
    gerarRelatorioFuncionario(): void {
        console.log('Gerando relatorio do funcionario');
    }

    rePorteAdmin(): void {
        console.log('getPorteAdmin');
    }
}

const manager1 = new manager("Cleber", 26);
manager1.gerarRelatorioFuncionario()

const admin1 = new Admin("Alice", 30);
admin1.gerarRelatorioFuncionario()
admin1.rePorteAdmin()

const empregado1 = new Empregados("Empregado com salario novo - Jessica" , 26)
empregado1.gerarRelatorioFuncionario()