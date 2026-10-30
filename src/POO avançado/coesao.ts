

class Sale{
    constructor(
        public id: string,
        public clientName: string,
        public clientEmail: string,
        public clientDocument: string,
        public paymentPix: string,
        //composição ou seja um produtos pode ser composto por varias propriedades
        public product: SaleItem[],
        public quantity: number,
    ){}
}

//Nome e quantidade de produtos que o cliente comprou 
type SaleItem = {
    product : Products,
    quantity: number
}

// definição de produtos que o cliente comprou
class Products{
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: number,
    ){}
}



export {}