const path = require('path');

//primeiro passo:ponto de entrada-> modulo para inciar a contrução do grafico interno de dependencias
module.exports = {
    mode:'development',
    entry: './src/index.js', //pode haver multiplos pontos de entrada
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
};