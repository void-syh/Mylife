import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import VueCropper from 'vue-cropper'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCropper);

new Vue({
    router,
    render: function(h) { return h(App) }
}).$mount('#app')