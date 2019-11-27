import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: '主页', to: '/', icon:'home'},
      { text: '活动', to: '/events', icon: 'rounded_corner'},
      { text: '我们', to: '/team', icon:'group'},
      { text: '关于', to: '/about', icon: 'toc'},
      { text: '联系', to: '/contact', icon:'person'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
