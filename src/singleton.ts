

class Database {
    private static instancia: Database;

    private constructor() {}

    public static getInstancia(): Database {
        if (!Database.instancia) {
            Database.instancia = new Database();
        }

        return Database.instancia;
    }

    conectar() {
        console.log("Banco conectado");
    }
}

const db1 = Database.getInstancia();
const db2 = Database.getInstancia();

db1.conectar();

console.log(db1 === db2); 
