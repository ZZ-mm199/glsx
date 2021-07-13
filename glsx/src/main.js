import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' //首次引入 会缓存 单例模式
import Shoppingcard from './views/Shoppingcard.vue'
//axios公共地址 使用了http代理跨域就不用引入公共地址 在vue-config中有设置

// 需要引入axios 保存到Vue的原型对象中 在new Vue之前引入
Vue.prototype.axios=axios;
//axios.defaults.baseURL="http://127.0.0.1:4000";
Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app')
