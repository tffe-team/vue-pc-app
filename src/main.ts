import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

const {LoadingBar} = iView;

Vue.use(iView);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
});
router.afterEach(route => {
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
