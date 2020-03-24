const connection = require('../database/connection')

module.exports = {

    async index  (req, res) {
        // fazer paginação
        // const { page = 1 } = req.query //pega o valor do query page, se não existir ele vai ser 1
        // const [count] = await connection('users').count() //retorna quantos registros tem na tabela
        // const users = await connection('users').limit(5).offset().select('*') //busca os 5 primeiros do banco de dados
        // return res.header('X-Total-Count', count['count(*)]) // passa para o header da resposta a quantidade de registros que tem. 

        const users = await connection('users').select('*')
        // pegar id passado
        // const id = request.headers.authorization
        return res.json(users)
    },

    async create(req, res) {
        const {name, lastname, email, permission, status} = req.body
    
        const [id] = await connection('users').insert({
            name,
            lastname,
            email,
            permission,
            status
        })
    
        return res.json({ id })
    
    },

    async delete(req, res){
        const { id } = req.params
        await connection('users').where('id', id).delete()
        return res.status(204).send() //resposta com sucesso mas sem conteudo para retornar

    }
}