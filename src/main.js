import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import PullToRefresh from 'pulltorefreshjs';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  methods: {
    reloadPage(){
      window.location.reload()
    }
  }
}).$mount('#app')




