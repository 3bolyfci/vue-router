import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
import {routes} from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode:'history'
})
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
