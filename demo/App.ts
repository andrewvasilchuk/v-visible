import type { VNode } from 'vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
  },
  render(h): VNode {
    return h('section', undefined, [
      h('h1', undefined, [h('code', undefined, 'v-visible')]),
      h(
        'div',
        { directives: [{ name: 'visible', value: this.visible }] },
        '🎉'
      ),
      h(
        'button',
        { attrs: { type: 'button' }, on: { click: this.toggle } },
        'Toggle'
      ),
    ])
  },
})
