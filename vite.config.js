import builtins from 'rollup-plugin-node-builtins'
/** @type {import('vite/src/node/config').UserConfig} */
module.exports = {
  rollupInputOptions: {
    pluginsOptimizer: [
      builtins({ crypto: true })
    ]
  }
}