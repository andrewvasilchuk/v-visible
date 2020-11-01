import { TestManager } from './util'

describe('v-visible', () => {
  it('should correctly set visibility', () => {
    const wrapper = TestManager.createWrapper({
      propsData: { visible: false },
    })
    expect(wrapper.vm.$refs.root.style.visibility).toBe('hidden')
  })

  it('should correctly set visibility when value is updated', (done) => {
    const wrapper = TestManager.createWrapper({
      propsData: { visible: false },
    })
    expect(wrapper.vm.$refs.root.style.visibility).toBe('hidden')
    wrapper.vm.value = true
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.$refs.root.style.visibility).toBe('')
      done()
    })
  })
})
