import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
//配置路由
export default new VueRouter({
    routes: [
        { path: '/home', component: Home, meta: { show: true } },
        { path: '/search/:keyword', component: Search, meta: { show: true }, name: 'search' },
        { path: '/login', component: Login, meta: { show: false } },
        { path: '/register', component: Register, meta: { show: false } },
        //路由重定向
        { path: '/', redirect: '/home' }
    ]
})