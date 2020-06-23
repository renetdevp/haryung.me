const { rootDir } = require('./common-path');

module.exports = {
    entry: {
        vendor: ['semantic-ui-react'],
        app: `${rootDir}/src/index.js`
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    }
};