class Payment {
    constructor(
        public amount: number,
        public date: Date,
        public description: string,
    ) {}

    static getPaymentDetails(amount: number, date: Date, description: string): string {
    return `Payment of ${amount} on ${date.toDateString()}: ${description}`;
}

    processPayment(): void {
        console.log(`Processing payment of ${this.amount}`);
    }
}

class pix extends Payment {}
   
