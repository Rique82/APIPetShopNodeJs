import Cliente from "../model/cliente.js"

class ServiceCliente {

    PegarTodos() {
        return Cliente.findAll()
    }

    PegarUm() {

    }

    Criar(nome, telefone) {
        
    }

    Alterar() {

    }

    Deletar() {

    }

}

export default new ServiceCliente()