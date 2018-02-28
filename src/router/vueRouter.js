// 导入Vue库
import Vue from 'Vue'
//导入vue-router插件
import router from 'vue-router'
//导入登录组件
import Login from '../component/login/Login.vue'
//导入注册组件
import Admin from '../component/admin/Admin.vue'
import Shopcart from '../component/admin/shopcart/Shopcart.vue'

Vue.use(router)//Vue的插件必须要启用才可以用的

//购物车页面路由配置
const shopcart=[
    {name:'shopcart',path:'shopcart',component:Shopcart}
]


//导出路由实例
export default new router({
    routes:[
        //登录
        {name:'login',path:'/login',component:Login},
        //后台管理
        {name:'admin',path:'/admin',component:Admin,children:[...shopcart]},
    ]
    
})