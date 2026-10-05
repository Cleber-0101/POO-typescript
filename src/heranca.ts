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

class Gerente extends Person {
    // posso criar um metodo especifico para essa classe
    acessoEspecial(): void {
        console.log('Gerente pode entrar a hora que ele quiser');
    }
}

class Admin extends Person {
    //metodo para gerar relatorio do funcionario
    gerarRelatorioFuncionario(): void {
        console.log('Gerando relatorio do funcionario');
    }

    rePorteAdmin(): void {
        console.log('getPorteAdmin');
    }
}

const gerente1 = new Gerente("Cleber", 26);
gerente1.gerarRelatorioFuncionario();
gerente1.acessoEspecial();

const admin1 = new Admin("Alice", 30);
admin1.gerarRelatorioFuncionario();
admin1.rePorteAdmin();