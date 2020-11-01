import type { PluginObject } from 'vue'

import { directive } from './directive'

export const Plugin: PluginObject<never> = {
  install(Vue) {
    Vue.directive('visible', directive)
  },
}
