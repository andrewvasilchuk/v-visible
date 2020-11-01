import type { VNode } from 'vue'
import Vue from 'vue'
import type { WithRefs } from 'vue-typed-refs'

type Refs = {
  root: HTMLDivElement
}

export default (Vue as WithRefs<Refs>).extend({
  name: 'TestComponent',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: this.visible,
    }
  },
  render(h): VNode {
    return h('div', {
      ref: 'root',
      directives: [{ name: 'visible', value: this.value }],
    })
  },
})
