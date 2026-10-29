abstract class Payment {
    abstract tax: number ; // 5% tax
    constructor(
        public amount: number,
        public date: Date,
        public description: string,
    ) {}

    abstract calcImposto(): number;

    static getDetalhesDoPagamento(amount: number, date: Date, description: string): string {
    return `Payment of ${amount} on ${date.toDateString()}: ${description}`;
}

    processoDoPagamento(): void {
        //somando a taxa que é 5% do valor do pagamento
        const totalAmount = this.amount + (this.amount * this.tax);
        console.log(`Processando ${totalAmount} de pagamento `); 
    }
}

//só posso criar um meio de pagamento baseado no que eu criei porque estou usando ABSTRACT CLASS
class pix extends Payment {
    tax = 0.05; // 5% tax
    calcImposto(): number {
        return this.amount * this.tax;
    }
}
class credito extends Payment {
    tax = 0.10;
    calcImposto(): number {
        return this.amount * this.tax;
    }
}
class debito extends Payment {
    tax = 0.02;
    calcImposto(): number {
        return this.amount * this.tax;
    }
}
class boleto extends Payment {
    tax = 0.15;
    calcImposto(): number {
        return this.amount * this.tax;
    }
}

//new date pega a data atual do sistema
const pagamentoPix = new pix(100, new Date(), "Payment via Pix");
const pagamentoCredito = new credito(200, new Date(), "Payment via Credit Card");
const pagamentoDebito = new debito(300, new Date(), "Payment via Debit Card");
const pagamentoBoleto = new boleto(400, new Date(), "Payment via Boleto");

pagamentoPix.processoDoPagamento();
pagamentoCredito.processoDoPagamento();
pagamentoDebito.processoDoPagamento();
pagamentoBoleto.processoDoPagamento();

//console.log(pagamentoPix);


   
//droni021-manjar92