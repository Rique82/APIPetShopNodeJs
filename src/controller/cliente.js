import ServiceCliente from "../service/cliente.js"

class ControllerCliente{

    async PegarTodos(req,res){
        try {
            const clientes = await ServiceCliente.PegarTodos()
            res.status(200).send({clientes})
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async PegarUm(req,res){
        try {
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Criar(req,res){
        try {
            const {nome, telefone} = req.body
            await ServiceCliente.Criar(nome, telefone)
            res.status(200).send("criado com sucesso")
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Alterar(req,res){
        try {
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Deletar(req,res){
        try {
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

}

export default new ControllerCliente()