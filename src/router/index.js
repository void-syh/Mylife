import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Advertisement from '../views/Advertisement.vue'
import Login from '../views/Login.vue'
import mainLogin from '../views/mainLogin.vue'
import nineLogin from '../views/nineLogin.vue'
import register from '../views/register.vue'
import calender from '../views/calender.vue'
import compute from '../views/compute.vue'
import pic from '../views/pic.vue'
import inf from '../views/inf.vue'
import changePassword from '../views/changePassword.vue'
import money from '../views/money.vue'
import crop from '../views/cropperPic.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Advertisement',
    component: Advertisement
}, {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
        path: 'calender',
        name: 'calender',
        component: calender
    }, {
        path: 'compute',
        name: 'compute',
        component: compute
    }, {
        path: 'pic',
        name: 'pic',
        component: pic
    }, {
        path: 'crop',
        name: 'crop',
        component: crop
    }, {
        path: 'inf',
        name: 'inf',
        component: inf,
        children: [{
            path: 'changePassword',
            name: 'changePassword',
            component: changePassword
        }, {
            path: 'money',
            name: 'money',
            component: money
        }]
    }]
}, {
    path: '/mainLogin',
    name: 'mainLogin',
    component: mainLogin,
    children: [{
        path: 'Login',
        name: 'Login',
        component: Login
    }, {
        path: 'nineLogin',
        name: 'nineLogin',
        component: nineLogin
    }]
}, {
    path: '/register',
    name: 'register',
    component: register
}]

const router = new VueRouter({
    routes
})

export default router