<template>
  <div class="admin">
    <el-container>
      <!-- 公共左侧 -->
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <!-- 公共头部 -->
        <el-header>
          <app-header></app-header>
        </el-header>
        <!-- 主体内容 -->
        <el-main>
          <!-- 主体 -->
          <!-- 变化的后台管理子页面 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
import Header from "./subcom/Header.vue";
import Aside from "./subcom/Aside.vue";

export default {
  //注册子组件
  components: {
    appHeader: Header,
    appAside: Aside,
  },
  data() {
    return {
     
    }
  },
};
</script>

<style scoped lang="less">
.admin {
  height: 100%;
  .el-container{
    height: 100%;
  }
  .el-header {
    background-color: #fafafa;
    color: #fff;
    line-height: 40px;
    border-bottom: 1px solid #e5e5e5;
  }

  .el-aside {
    background-color: #267cb7;
    color: #fff;
    text-align: center;
    // height: 100%;
  }

  .el-main {
    background-color: #ffffff;
    color: #000;
    height: 100%;
  }
}
</style>