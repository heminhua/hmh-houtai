<template>
    <div>
        <p>{{val}}</p>
        <!-- element-ui -->
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