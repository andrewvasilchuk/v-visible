import { setupTest, createPage } from '@nuxtjs/module-test-utils'

describe('v-visible.ssr', () => {
  setupTest({
    testDir: __dirname,
    fixture: __dirname,
    browser: true,
  })

  it('should correctly set visibility', async (done) => {
    const page = await createPage('/')
    const element = await page.$('#target #simple')
    if (element) {
      expect(await element.getAttribute('style')).toBe('visibility:hidden;')
    } else {
      done.fail()
    }
    const elements = await page.$$('#target div')
    for (const element of elements) {
      const style = await element.getAttribute('style')
      expect(style).toBe('color:red;visibility:hidden;')
    }
    done()
  })
})
