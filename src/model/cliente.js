import bancodados from '../config/database.js'

class Cliente{
    constructor(){
        this.model = bancodados.db.define('clientes', {
            id: {
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: bancodados.db.Sequelize.STRING
            },
            telefone: {
                type: bancodados.db.Sequelize.STRING
            }
        })
    }
}

export default new Cliente().model