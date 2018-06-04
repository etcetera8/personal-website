import Vue from 'vue'
import Home from '../../../src/components/Home/Home.vue'
describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.text').textContent)
      .toEqual("I am an energetic front-end developer with a passion for learning and a drive for creating beautiful, functional and accessible apps. I've developed numerous web and mobile apps, have a background in cartography and GIS, and am a fan of all things cycling. My favorite part about software development is seeing how passionate individuals working together create applications that are greater than any individual. It's so cool.")
  })
})
