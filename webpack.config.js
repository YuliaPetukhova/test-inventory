const path = require('path');

module.exports = {
    entry: './src/main.ts', // точка входа (ваш TypeScript файл)
    output: {
        filename: 'bundle.js', // имя выходного файла
        path: path.resolve(__dirname, 'dist') // путь к папке сборки
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|ttf|woff?2)$/i,
                type: 'asset'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
};
