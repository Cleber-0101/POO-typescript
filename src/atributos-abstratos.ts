abstract class Payment {
    protected tax: number = 0.05; // 5% tax
    constructor(
        public amount: number,
        public date: Date,
        public description: string,
    ) {}

    static getDetalhesDoPagamento(amount: number, date: Date, description: string): string {
    return `Payment of ${amount} on ${date.toDateString()}: ${description}`;
}

    processoDoPagamento(): void {
        console.log(`Processing payment of ${this.amount}`); 
    }
}

class pix extends Payment {
    processoDoPagamento(): void {
        console.log(`Processing PIX payment of ${this.amount}`);
    }
}
   
//droni021-manjar92