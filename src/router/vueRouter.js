// 导入Vue库
import Vue from 'Vue'
//导入vue-router插件
import router from 'vue-router'
//导入登录组件
import Login from '../component/login/Login.vue'
//导入注册组件
import Regiter from '../component/register/Regiter.vue'

Vue.use(router)//Vue的插件必须要启用才可以用的


//导出路由实例
export default new router({
    routes:[
        {name:'login',path:'/login',component:Login},
        {name:'regiter',path:'/regiter',component:Regiter},
    ]
})