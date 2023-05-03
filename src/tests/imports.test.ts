import { expect ,describe,test } from 'vitest'



describe('import vue components', () => {
    test('normal imports as expected', async () => {
      const cmp = await import('../components/MyHello.vue')
      expect(cmp).toBeDefined()
    })
  
    test('template string imports as expected', async () => {
      const cmp = await import(`../components/MyHello.vue`)
      expect(cmp).toBeDefined()
    })
  
    test('dynamic imports as expected', async () => {
      const name = 'MyHello'
      const cmp = await import(`../components/${name}.vue`)
      expect(cmp).toBeDefined()
    })
  })
  