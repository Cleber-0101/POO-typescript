
//Aplicando herança extendendo a classe
// Super para usar os atributos e metodos da classe Pai
// Ultilizando override que sobre escreve os metodos da classe Pai
class UserPai{
    permissaoSuperAdmin(){
        console.log("PERMISSÃO SUPER ADMIN");
    }
}

class userFilho extends UserPai{
    overidePermissaoSuperAdmin(){
        super.permissaoSuperAdmin();
        console.log('Tambem possuo permissão de super admin ');
        
    }
}

const usuario = new userFilho();
usuario.overidePermissaoSuperAdmin();