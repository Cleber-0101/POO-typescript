// Classe Pai
class Person {
   constructor(
        public name: string,
        public age: number
    ) {}

    //metodo para gerar relatorio do funcionario
    getReportEmployee(): void {
        console.log(`${this.name} getReportEmployee: Gerando relatorio do funcionario...`);
    }
}

class manager extends Person {
    //posso criar um metodos expecifico para essa classe 
}

class Admin extends Person {
    //metodo para gerar relatorio do funcionario
    getReportEmployee(): void {
        console.log('getReportEmployee');
    }

    rePorteAdmin(): void {
        console.log('getPorteAdmin');
    }
}

const manager1 = new manager("Cleber", 26);
manager1.getReportEmployee()

const admin1 = new Admin("Alice", 30);
admin1.getReportEmployee()
admin1.rePorteAdmin()