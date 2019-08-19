// "require" basic js module, "path" node js module
const path = require('path')

module.exports = {
   // Path leads out of "client" into "root" folder. 
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/api/v1': {
                target: 'http://localhost:5000'
            }
        }
    }
};