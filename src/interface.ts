interface ProcessoDepagamentoInterface{
    //definindo a estrutura do pagamento

    //taxa de pagamento
    //readonly para que não seja alterado o valor da taxa de pagamento
    readonly taxRate: number;

    //id do pagamento
    iniciaPagamento(amount: number): Promise<string>;

    //confirmação de pagamento 
    confirmePagamento(id: string): Promise<boolean>;

    //confirmação de cancelamento de pagamento 
    cancelaPagamento(id: string): Promise<boolean>;

    //status do pagamento | pagou ou não
    statusPagamento(id: string): Promise<string>;
}

//implementando os metodos da interface
class PagamentoViaPix implements ProcessoDepagamentoInterface{
    readonly taxRate = 1;
    iniciaPagamento(amount: number): Promise<string> {
        //implementar a lógica de pagamento via pix, retornando o ID do pagamento
        return Promise.resolve("123456");
    }
    async confirmePagamento(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    async cancelaPagamento(id: string): Promise<boolean> {
        return Promise.resolve(true);}
    async statusPagamento(id: string): Promise<string> {
        return Promise.resolve("Confirmado");
    }
}

//implementando os metodos da interface
class PagarMePayment implements ProcessoDepagamentoInterface{
    readonly taxRate = 10;
    iniciaPagamento(amount: number): Promise<string> {
        //implementar a lógica de pagamento via pix, retornando o ID do pagamento
        return Promise.resolve("1234567");
    }
    async confirmePagamento(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    async cancelaPagamento(id: string): Promise<boolean> {
        return Promise.resolve(true);}
    async statusPagamento(id: string): Promise<string> {
        return Promise.resolve("Confirmado");
    }
}

//testando sem o uso da interface PAI, ele vai funcioanar porem esta incorreto, pois não esta seguindo a estrutura da interface
class MercadoPagoPagamento {
    readonly taxRate = 10;
    iniciaPagamento(amount: number): Promise<string> {
        //implementar a lógica de pagamento via pix, retornando o ID do pagamento
        return Promise.resolve("1234567");
    }
    async confirmePagamento(id: string): Promise<boolean> {
        return Promise.resolve(true);
    }
    async cancelaPagamento(id: string): Promise<boolean> {
        return Promise.resolve(true);}
    async statusPagamento(id: string): Promise<string> {
        return Promise.resolve("Confirmado");
    }
}

// Só aceita no parametro algum objeto de clase que implemente a interface ProcessoDepagamentoInterface
// Função para processar o pagamento | ira retornar algo no futuro, por isso é async
const processPagamento = async (pagamento: ProcessoDepagamentoInterface) => {
   const idPagamento = await pagamento.iniciaPagamento(100)
   console.log(`Pagamento iniciado com o id:  ${idPagamento}` );
   const status = await pagamento.statusPagamento(idPagamento)
   console.log(`Status do pagamento: ${status}`);
}

const pixPagamento = new PagamentoViaPix();
const pagarMePagamento = new PagarMePayment();
const mercadoPagoPagamento = new MercadoPagoPagamento();
processPagamento(pixPagamento);
processPagamento(pagarMePagamento);
processPagamento(mercadoPagoPagamento); //isso vai dar erro, pois não esta seguindo a estrutura da interface

