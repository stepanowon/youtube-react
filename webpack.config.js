const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname);

const WebpackConfig = {
    mode : "development",
    entry: APP_DIR + '/YoutubeReact.js',
    output: {
        path: BUILD_DIR,
        filename: 'youtube-react.js',
        libraryTarget: 'umd',
        library: 'YoutubeReact'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ],
    },

}


// webpack production config.
if ( process.env.NODE_ENV === 'production' ) {

    WebpackConfig.externals = {
        'react': 'react',
        'react-dom': 'react-dom'
    };

    WebpackConfig.plugins = [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
    ];

}


module.exports = WebpackConfig;