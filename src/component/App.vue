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
export default {
  data() {
    return {
      val: "首页"
    };
  }
};
</script>

<style scoped>

</style>