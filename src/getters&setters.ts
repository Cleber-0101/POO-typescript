class User {
    constructor(
    private id : Number,
    private _name : string,
    private _email : string,
    private _password : string,
    private _createdAt : Date,
    private _updatedAt: Date
    )
    {}  

    get buscaNome():  string {
        return this._name
    }

    set mudaNome(novoNome: string){
        if(novoNome.length < 3){
            throw new Error("Novo nome atribuido é muito curto");
        }
         this._name = novoNome
    }
}







const user1 = new User(
 1,
 "cleber",
 "cleber@rotemeil.com",
 "senhaforte",
 new Date(),
 new Date()
)
console.log(user1.buscaNome);
user1.mudaNome = "jessica",
user1.mudaNome = "jessica Update"

//validando metodo criado - forçando erro 
user1.mudaNome = "JD"
console.log(user1.buscaNome);

