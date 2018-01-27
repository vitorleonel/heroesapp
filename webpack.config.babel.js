import path from 'path'

export default {

    entry: path.resolve(__dirname, 'src'),

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js'
    },

    module: {
        rules: []
    },

    resolve: {}

}