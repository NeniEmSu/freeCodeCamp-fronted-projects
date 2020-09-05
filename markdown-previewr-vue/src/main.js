import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import VueMarkdown from 'vue-markdown'

Vue.config.productionTip = false

new Vue({
  components: {
    VueMarkdown
  },
  render: h => h(App),
}).$mount('#app')
