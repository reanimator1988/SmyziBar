const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'App-[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // publicPath: './',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles-[fullhash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.webp$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[contenthash][ext]',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['node_modules'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[contenthash][ext]',
                },
            },
        ],
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
    },
    devServer: {
        port: 9998,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        devMiddleware: {
            mimeTypes: {
                'text/css': ['css'],
                'image/jpeg': ['jpg', 'jpeg'],
                'image/png': ['png'],
                'image/svg+xml': ['svg'],
                'image/webp': ['webp'],
            },
        },
    },
};
