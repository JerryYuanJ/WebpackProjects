在webpack4.0中使用“extract-text-webpack-plugin”之后，生产环境下报错，如何解决

 (node:4728) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
(node:4728) DeprecationWarning: Tapable.apply is deprecated. Call apply on the plugin directly instead
/Users/x-kxem/myWorkSpace/vue-ssr-tech/node_modules/webpack/lib/Chunk.js:460
throw new Error...

解决：npm install extract-text-webpack-plugin@next 
问题分析: 当前webpack的版本是4.0+所以...