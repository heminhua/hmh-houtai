// 导入Vue库
import Vue from 'Vue';

//导入根组件
import App from './component/App.vue'

//引入路由
import router from './router/vueRouter.js'
//引入初始化css
import 'normalize.css'

import axios from 'axios' //不是vue 插件，导入之后只能 在当前模块使用
import api, { domain } from './js/api.js'
//配置默认域名，这样请求的时候就不用在url里每次手动添加域名了
axios.defaults.baseURL = domain;
//因为我们调用的接口跨域了，默认情况下接口给我们设置cookei无效，为了让它有效，我们必须添加此配置
axios.defaults.withCredentials = true
//为了使用方便，把axios和api 添加到Vue原型，将来vue组件就可以直接使用
Vue.prototype.$http = axios;
Vue.prototype.$api = api

// axios.get(domain+api.logout.then(()=>console.log('登出')))
//为了 使用方便，把axios和api添加到vue原型，将来嫺组件就可以直接使用


//使用element-ui插件 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vue中的插件使用方法 
Vue.use(ElementUI)

//渲染根组件到点位标签上
new Vue({
    el: '#app',
    router,//路由注入Vue的实例中
    render: h => h(App)
})
