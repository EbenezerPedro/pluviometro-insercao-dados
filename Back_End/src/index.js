// Carrega as variáveis de ambiente
require('dotenv').config();

// Importa o servidor principal e o banco de dados
const app = require('./server');
require('./database');

// Inicializa o servidor
const PORT = app.get('port') || 3000; // Define uma porta padrão caso não esteja no arquivo .env

app.listen(PORT, () => {
    console.log('Server on port', PORT);
});
