const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // Listagem de registros de produtos
    async index(req, res){

        // permite a consulta de páginas pela URL
        const { page = 1 } = req.query;

        // troca-se Product.find() por Product.paginate
        const products = await Product.paginate({  }, { page, limit: 10 });
        // await: só executa proxima linha quando finalizar a linha anterior
        return res.json(products); // retorna listagem em JSON 
    },

    // Listagem de um registro
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    // Criação de registros
    async store(req, res){
        // Criação
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res){
        // new: true: retorna valor atualizado. sem ele, retorna valor antigo
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product);

    },

    async destroy(req, res){
        await Product.findOneAndRemove(req.params.id);

        return res.send(); // resposa de sucesso sem conteúdo
    }

};