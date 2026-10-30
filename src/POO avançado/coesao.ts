class Products{
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
    ){}
}

class Sale{
    constructor(
        public id: string,
        public clientName: string,
        public clientEmail: string,
        public clientDocument: string,
        public paymentPix: string,
        public productName: string,

        //composição
        public product: Products[],
        public quantity: number,
    ){}
}

export {}