const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, './index.tsx'),
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            use: ['ts-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                }
            ]
        }]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            'node_modules',
            './src'
        ],
        alias: {
            '@components': [path.resolve(__dirname, './src/components')],
            '@contexts': [path.resolve(__dirname, './src/contexts')],
            '@containers': [path.resolve(__dirname, './src/containers')],
            '@hooks': [path.resolve(__dirname, './src/hooks')],
            '@store': [path.resolve(__dirname, './src/store')],
            '@types': [path.resolve(__dirname, './src/types/types')],
        }
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        port: 4003,
        server: {
            type: 'https'
        },
        client: {
            overlay: false
        },
        compress: true,
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        })
    ]
}