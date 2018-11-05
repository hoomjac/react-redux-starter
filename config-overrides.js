const { injectBabelPlugin } = require('react-app-rewired')
const rewireEslint = require('react-app-rewire-eslint')
const path = require('path')

function overrideEslintOptions(options) {
  options.rules = {
    'no-undef': 'warn'
  }
  return options
}

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd-mobile', style: 'css' }],
    config
  )
  config = injectBabelPlugin(
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    config
  )
  config = rewireEslint(config, env, overrideEslintOptions)

  config.resolve = {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~actions': path.resolve(__dirname, './src/actions'),
      '~reducers': path.resolve(__dirname, './src/reducers'),
      '~components': path.resolve(__dirname, './src/components'),
      '~views': path.resolve(__dirname, './src/views'),
      '~layouts': path.resolve(__dirname, './src/layouts'),
      '~style': path.resolve(__dirname, './src/style'),
      '~service': path.resolve(__dirname, './src/service'),
      '~common': path.resolve(__dirname, './src/common'),
      '@connect': path.resolve(__dirname, './src/framework/connect'),
      '@reduxForm': path.resolve(__dirname, './src/framework/reduxForm'),
      '@history': path.resolve(__dirname, './src/framework/history'),
      '@request': path.resolve(__dirname, './src/framework/request')
    }
  }

  return config
}
