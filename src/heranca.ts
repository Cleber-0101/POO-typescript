// Classe Pai
class manager {
    constructor(
        public name: string,
        public age: number
    ) {}

    //metodo para gerar relatorio do funcionario
    getReportEmployee(): void {
        console.log('getReportEmployee: Gerando relatorio do funcionario...');
    }

}

class Admin{
    constructor
    (
        name : string,
        age : number
    ){}


    //metodo para gerar relatorio do funcionario
    getReportEmployee(): void {
        console.log('getReportEmployee');
    }

    rePorteAdmin(): void {
        console.log('rePorteAdmin');
    }
}

const manager1 = new manager("Cleber", 26);
manager1.getReportEmployee()

const admin1 = new Admin("Alice", 30);
admin1.getReportEmployee()
admin1.rePorteAdmin()