const PluviometerData = require('../models/PluviometerData');

const pluviometerCtrl = {};

pluviometerCtrl.renderPluviometerForm = (req, res) => {
    res.render('pluviometer/new-data');
};

pluviometerCtrl.createPluviometerData = async (req, res) => {
    const { estado, municipio, bairro, quantidade, userId, date, hora } = req.body;

    console.log(estado)

    const newPluviometerData = new PluviometerData({ 
        user: userId, 
        estado, 
        municipio, 
        bairro, 
        quantidade,
        date,
        hora
    });

    await newPluviometerData.save();
    req.flash('success_msg', 'Dados do pluviômetro adicionados com sucesso');
    return res.status(201).json({ message: 'Dados do pluviômetro adicionados com sucesso!' });
};

module.exports = pluviometerCtrl;