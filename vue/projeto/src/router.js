 import Vue from 'vue';
import VueRouter from 'vue-router';

import Hospitais from './components/Hospitais.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'main',
        component: Home
    }, 
    {
        path: '/hospitais',
        name: 'hospitais',
        component: Hospitais
    }
  ]
})
