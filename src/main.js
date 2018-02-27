// 导入Vue库
import Vue from 'Vue';

//导入根组件
import App from './component/App.vue'

//引入路由
import router from './router/vueRouter.js'

//使用element-ui插件 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vue中的插件使用方法 
Vue.use(ElementUI)

//渲染根组件到点位标签上
new Vue({
    el:'#app',
    router,//路由注入Vue的实例中
    render:h=>h(App)
})
