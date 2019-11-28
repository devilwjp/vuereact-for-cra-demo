const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = function override(config, env) {
    config.module.rules[2].oneOf[7].exclude.push(/\.vue$/)
    config.module.rules.unshift({ // add vue-loader
        test: /\.vue$/,
        loader: 'vue-loader',
    })
    config.plugins.unshift(new VueLoaderPlugin())
    return config;
};
