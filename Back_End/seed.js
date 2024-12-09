const mongoose = require('mongoose');
const moment = require('moment-timezone');
const PluviometerData = require('./src/models/PluviometerData');

require('dotenv').config();
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Database connected');
        seedData();
    })
    .catch(err => {
        console.error('Database connection error:', err);
        process.exit(1);
    });

const seedData = async () => {
    try {
        await PluviometerData.deleteMany({}); // Limpar dados existentes

        const userId = new mongoose.Types.ObjectId(); // Simular um ID de usuário

        // Dados para um dia específico
        const dataDia = moment().tz('America/Sao_Paulo').startOf('day');
        for (let i = 0; i < 24; i += 2) {
            const quantidade = (i % 4 === 0) ? Math.floor(Math.random() * (16 - 12 + 1)) + 12 : Math.floor(Math.random() * (5 - 4 + 1)) + 4;
            await PluviometerData.create({
                user: userId,
                estado: 'Santa Catarina',
                municipio: 'Araranguá',
                bairro: 'Centro',
                quantidade: quantidade,
                dataHora: dataDia.clone().add(i, 'hours').toDate()
            });
        }

        // Dados para a última semana
        for (let i = 0; i < 7; i++) {
            const dataSemana = moment().tz('America/Sao_Paulo').subtract(i, 'days').startOf('day');
            await PluviometerData.create({
                user: userId,
                estado: 'Santa Catarina',
                municipio: 'Araranguá',
                bairro: 'Centro',
                quantidade: Math.floor(Math.random() * 100), // Quantidade aleatória
                dataHora: dataSemana.toDate()
            });
        }

        console.log('Dados de exemplo inseridos');
    } catch (err) {
        console.error('Erro ao inserir dados:', err);
    } finally {
        mongoose.connection.close();
    }
};