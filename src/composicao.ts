//Nesse exemplo, Todo usuario deve ter um endereço 
//Aplicando principios de composição onde uma classe depende de outra classe para funcionar, ou seja, uma classe é composta por outra classe
class User3{
    constructor(private name: string, private age: number, private address: Address){
        console.log(`User created: ${this.name} with age ${this.age}`);
        console.log(`Address created: ${this.address.acessStreet}, ${this.address.acessCity} - ${this.address.acessNumber}`);
    }
}

class Address{
    constructor(
        private street: string,
        private city: string,
        private number: number
    ){
        //console.log(`Endereço: ${this.street}, ${this.city} - ${this.number}`);
    }   
    

    // get retonarDadosPrivados(){
    //     return `${this.street}, ${this.city} - ${this.number}`;
    // }

    // //metodos de acesso para as propriedades privadas da classe Address
    get acessStreet(): string{
        return this.street;
    }

    get acessCity(): string{
        return this.city;
    }

    get acessNumber(): number{
        return this.number;
    }
  
}

const address1 = new Address("Rua A", "Cidade A", 123);
const user1 = new User3("Cleber", 26, address1);    

const address2 = new Address("Rua B", "Cidade B", 456);
const user2 = new User3("Marcelo", 22, address2);

