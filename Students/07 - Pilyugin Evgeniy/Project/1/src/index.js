import './assets/style/normalize.css';
import './assets/style/style.css';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import app from './views/Shop.vue';

//Object.assign

new Vue({
    render: h => h(app)
}).$mount('#app');
