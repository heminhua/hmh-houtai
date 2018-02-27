<template>
    <div>
        <p>************</p>
        <div>{{title}}</div>
        <div class="block">
            <!-- <span class="demonstration">自定义初始值</span> -->
            <el-slider v-model="value2"></el-slider>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "登录页面",
        value2: 50,
    };
  },
   methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
};
</script>

<style scoped>

</style>