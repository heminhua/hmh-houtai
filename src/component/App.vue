<template>
  <div>
    <p>{{val}}</p>
    <!--测试 element-ui集成element-ui -->
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <!-- element-ui集成element-ui -->
    <!-- 路由中的内容展现在页面上 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from "axios"; //不是vue 插件，导入之后只能 在当前模块使用
// import api, { domain } from "../js/api.js";

export default {
  data() {
    return {
      val: "首页"
    };
  },
  //生命周期函数，vue会自动调用
  created() {
    // axios.get(domain+api.logout.then(()=>console.log('登出')))
    this.$http.get(this.$api.logout).then(() => console.log("登出"));
  }
};
</script>

<style scoped>

</style>