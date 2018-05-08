import Vue from 'vue'
import Home from '../../../src/components/Home/Home.vue'
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hi').textContent)
      .toEqual("I am an energetic front-end developer with a passion for learning and a drive for creating beautiful, functional and accessible apps. I have developed numerous web and mobile apps and have a background in cartography and GIS.")
  })
})
