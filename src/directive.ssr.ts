import type { VNode, VNodeDirective } from 'vue'

export function directive(node: VNode, dir: VNodeDirective) {
  const visibility = dir.value ? undefined : 'hidden'

  /* istanbul ignore next */
  if (node.data === undefined) {
    node.data = { style: { visibility } }
  } else if (node.data.style === undefined) {
    node.data.style = { visibility }
  } else if (Array.isArray(node.data.style)) {
    node.data.style.push({ visibility })
  } else if (typeof node.data.style === 'string') {
    /* istanbul ignore next */
    node.data.style += `visibility: ${visibility};`
  } else {
    // @ts-expect-error
    node.data.style.visibility = visibility
  }
}
