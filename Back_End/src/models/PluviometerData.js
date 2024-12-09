const { Schema, model } = require('mongoose');

const PluviometerDataSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    estado: { type: String, required: true },
    municipio: { type: String, required: true },
    bairro: { type: String, required: true },
    quantidade: { type: Number, required: true },
    date: { type: Date, require: true },
    hora: {type: String, require: true}
});

module.exports = model('PluviometerData', PluviometerDataSchema);