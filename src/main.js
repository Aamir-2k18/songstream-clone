import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import moment from 'moment'
//routes
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes';
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
    routes: Routes,
    // console.log('new router');
});



Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
    if (!value) return ''
    return moment(value.toString()).format('MM/DD/YYYY hh:mm')
});

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')