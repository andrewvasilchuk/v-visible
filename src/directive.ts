import type { DirectiveFunction } from 'vue'

export const directive: DirectiveFunction = function ({ style }, { value }) {
  style.visibility = value ? '' : 'hidden'
}
