import Cliente from "../model/cliente.js"

class ServiceCliente {

    PegarTodos() {
        return Cliente.findAll()
    }

    async PegarUm(id) {

        const cliente = await Cliente.findByPk(id)

        return cliente

    }

    async Criar(nome, telefone) {

        await Cliente.create({ nome, telefone })

    }

    async Alterar(id, nome, telefone) {

        const cliente = await Cliente.findByPk(id)

        cliente.nome = nome
        cliente.telefone = telefone

        await cliente.save()
        
    }

    async Deletar(id) {

        const cliente = await Cliente.findByPk(id)

        cliente.destroy()

    }

}

export default new ServiceCliente()