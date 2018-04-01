import Vue from 'vue'
import Home from '../../../src/components/Home/Home.vue'
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hi').textContent)
      .toEqual('Hi,')
  })
})
