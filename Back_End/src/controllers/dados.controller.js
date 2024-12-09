const PluviometerData = require('../models/PluviometerData');
const moment = require('moment-timezone');

// Declare the controller object
const dadosCtrl = {};

// Function to render the form
dadosCtrl.renderDadosForm = (req, res) => {
    res.render('dados-coletados');
};

// Function to process the search
dadosCtrl.processarPesquisa = async (req, res) => {
    const { estado, municipio, bairro, dataInicio, dataFim, periodo } = req.body;
    let dados;

    // Use moment to ensure the dates are in the correct format (YYYY-MM-DD)
    const inicio = moment(dataInicio, 'DD/MM/YYYY').tz('America/Sao_Paulo').startOf('day').toDate();
    let fim;

    if (periodo === 'dia') {
        fim = inicio; // Ensure the end date is the same as the start date
    } else if (periodo === 'semana') {
        fim = moment(dataInicio, 'DD/MM/YYYY').tz('America/Sao_Paulo').endOf('week').toDate();
    } else {
        fim = dataFim ? moment(dataFim, 'DD/MM/YYYY').tz('America/Sao_Paulo').endOf('day').toDate() : moment(dataInicio, 'DD/MM/YYYY').tz('America/Sao_Paulo').endOf('year').toDate();
    }

    try {
        if (periodo === 'dia') {
            dados = await PluviometerData.aggregate([
                { $match: { estado, municipio, bairro, dataHora: { $gte: inicio, $lte: fim } } },
                { $group: { 
                    _id: { 
                        $dateToString: { format: "%Y-%m-%dT%H:00:00", date: "$dataHora", timezone: "America/Sao_Paulo" } 
                    }, 
                    media: { $avg: "$quantidade" } 
                } },
                { $sort: { _id: 1 } }
            ]);
        } else if (periodo === 'semana') {
            dados = await PluviometerData.aggregate([
                { $match: { estado, municipio, bairro, dataHora: { $gte: inicio, $lte: fim } } },
                { $group: { _id: { $dayOfWeek: "$dataHora" }, media: { $avg: "$quantidade" } } },
                { $sort: { "_id": 1 } }
            ]);
        } else if (periodo === 'mes') {
            dados = await PluviometerData.aggregate([
                { $match: { estado, municipio, bairro, dataHora: { $gte: inicio, $lte: fim } } },
                { $group: { _id: { $month: "$dataHora" }, media: { $avg: "$quantidade" } } },
                { $sort: { "_id": 1 } }
            ]);
        } else if (periodo === 'ano') {
            dados = await PluviometerData.aggregate([
                { $match: { estado, municipio, bairro, dataHora: { $gte: inicio, $lte: fim } } },
                { $group: { _id: { $year: "$dataHora" }, media: { $avg: "$quantidade" } } },
                { $sort: { _id: 1 } }
            ]);
        }

        // Send the results back to the user
        const data =  await PluviometerData.find()
        res.json({ data, periodo, dataInicio: moment(inicio).format('YYYY-MM-DD'), dataFim: moment(fim).format('YYYY-MM-DD') });

    } catch (error) {
        console.error("Error processing search:", error);
        res.status(500).json({ message: "Error processing the search" });
    }
};

// Export the controller object
module.exports = dadosCtrl;
