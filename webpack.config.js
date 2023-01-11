const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');

//primeiro passo:ponto de entrada-> modulo para inciar a contrução do grafico interno de dependencias
module.exports = {
   // mode:'development' , devido ao warning
    entry: './src/index.js', //pode haver multiplos pontos de entrada
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },

    module:{
        rules:[
            {
                test:/\.(sa|c|sc)ss$/i, //Expressão Regex
                use:[
                    'style-loader',
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins:[new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html',//se nao especificar, webpack gera um novo file
        inject:'body'//code will be more performant in production if we put srcipt tags in the bpody
    }),
    new MiniCssExtract({
        filename: 'style.css'
    })
    ],
};