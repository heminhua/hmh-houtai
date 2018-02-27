// 导入Vue库
import Vue from 'Vue';

//导入根组件
import App from './component/App.vue'

//渲染根组件到点位标签上
new Vue({
    el:'#app',
    render:h=>h(App)
})
