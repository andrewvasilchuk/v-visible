const path = require('path')

const { directive } = require('../../src/index.ssr')

/**
 * @type {import('@nuxt/types').NuxtConfig} config
 */
const config = {
  srcDir: path.resolve(__dirname),
  rootDir: path.resolve(__dirname, '../..'),
  head: {
    title: 'v-visible',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  render: {
    bundleRenderer: {
      directives: {
        visible: directive,
      },
    },
  },
}

module.exports = config
