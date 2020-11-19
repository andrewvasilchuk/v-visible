# v-visible

> Vue.js directive for setting visibility of an element

[![BuildStatus](https://img.shields.io/github/workflow/status/andrewvasilchuk/v-visible/Integration)](https://github.com/andrewvasilchuk/v-visible/actions?query=workflow%3AIntegration)
[![Version](https://img.shields.io/npm/v/v-visible)](https://www.npmjs.com/package/v-visible)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/v-visible)](https://bundlephobia.com/result?p=v-visible)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0a12c2d8dbd44f028aacddb254df983d)](https://www.codacy.com/gh/andrewvasilchuk/v-visible/dashboard?utm_source=github.com&utm_medium=referral&utm_content=andrewvasilchuk/v-visible&utm_campaign=Badge_Grade)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/andrewvasilchuk/v-visible.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrewvasilchuk/v-visible/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrewvasilchuk/v-visible.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrewvasilchuk/v-visible/context:javascript)
[![codecov](https://codecov.io/gh/andrewvasilchuk/v-visible/branch/master/graph/badge.svg)](https://codecov.io/gh/andrewvasilchuk/v-visible)
[![Downloads](https://img.shields.io/npm/dt/v-visible)](https://www.npmjs.com/package/v-visible)
[![LastCommit](https://img.shields.io/github/last-commit/andrewvasilchuk/v-visible)](https://github.com/andrewvasilchuk/v-visible/commits/master)
[![License](https://img.shields.io/npm/l/v-visible)](https://github.com/andrewvasilchuk/v-visible/blob/master/LICENSE)

- [v-visible](#v-visible)
  - [Installation](#installation)
    - [Via NPM](#via-npm)
    - [Via Yarn](#via-yarn)
    - [Directly in browser](#directly-in-browser)
  - [Initialization](#initialization)
    - [As a global plugin](#as-a-global-plugin)
    - [As a global directive](#as-a-global-directive)
    - [As a local directive](#as-a-local-directive)
    - [As a Nuxt.js SSR directive](#as-a-nuxtjs-ssr-directive)
    - [Directly in a browser](#directly-in-a-browser)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Development](#development)
  - [Build](#build)
  - [License](#license)

## Installation

### Via NPM

```bash
$ npm install v-visible --save
```

### Via Yarn

```bash
$ yarn add v-visible
```

### Directly in browser

```html
<script src="https://unpkg.com/v-visible"></script>
```

## Initialization

### As a global plugin

It must be called before `new Vue()`

```js
import Vue from 'vue'
import VVisible from 'v-visible'

Vue.use(VVisible)
```

### As a global directive

```js
import Vue from 'vue'
import { directive } from 'v-visible'

Vue.directive('visible', directive)
```

### As a local directive

```js
import { directive } from 'v-visible'

export default {
  name: 'YourAwesomeComponent',
  directives: {
    visible: directive,
  },
}
```

### As a Nuxt.js SSR directive

```js
// nuxt.config.js

const { directive } = require('v-visible/dist/v-visible.ssr.common.js')

module.exports = {
  // ...
  render: {
    bundleRenderer: {
      directives: {
        visible: directive,
      },
    },
  },
  // ...
}
```

### Directly in a browser

```html
<!-- As a global directive -->
<script>
  Vue.use(VVisible.default)
  new Vue({
    // ...
  })
</script>
<!-- As a local directive -->
<script>
  new Vue({
    // ...
    directives: { visible: VVisible.directive },
    // ...
  })
</script>
```

## Usage

```html
<template>
  <div>
    <div v-visible="visible"></div>
  </div>
</template>
```

```js
import Vue from 'vuex'

export default Vue.extend({
  // ...
  data() {
    return {
      visible: false,
    }
  },
  // ...
})
```

## Tests

[`jest`](https://jestjs.io) and [`@vue/test-utils`](https://vue-test-utils.vuejs.org) are used for unit tests.

You can run unit tests by running the next command:

```bash
npm run test
```

## Development

1. Clone this repository
2. Install the dependencies running `yarn install` or `npm install` command
3. Start a development server running `npm run dev` command

## Build

To build a production ready bundle simply run `npm run build` or `make build` command:

After a successful build the following files will be generated in the `dist` folder:

```
├── directive.d.ts
├── index.d.ts
├── plugin.d.ts
├── v-visible.common.js
├── v-visible.esm.js
├── v-visible.js
├── v-visible.min.js
├── v-visible.ssr.common.js
├── v-visible.ssr.esm.js
├── v-visible.ssr.js
├── v-visible.ssr.min.js
```

## License

[MIT](http://opensource.org/licenses/MIT)
