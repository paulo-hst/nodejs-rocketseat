const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    url: {
        type: String,
        required: true,
    },

    // Preenchida automaticamente pela data atual do registro do bando de dados
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//Permite paginação
ProductSchema.plugin(mongoosePaginate);

// Registrar um model na aplicação. Toda a aplicação tem conhecimento do Product e seus objetos
mongoose.model('Product', ProductSchema);