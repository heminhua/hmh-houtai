<template>
    <div class="aside">

        <el-col :span="24">
            <h5>知识分享系统</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#267cb7" text-color="#fff" active-text-color="#ffd04b">
                <!-- index 1 -->
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>
                        <span class="navigation">导航一</span>
                        <!-- <i class=el-icon-arrow-down></i> -->
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4">选项1</el-menu-item>
                    </el-menu-item-group>

                </el-submenu>
                <!-- index 2 -->
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-message"></i>
                        <span class="navigation">导航二</span>
                        <!-- <i class=el-icon-arrow-down></i> -->
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-2">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-menu-item index="2-4">选项4</el-menu-item>
                    </el-menu-item-group>

                </el-submenu>
            </el-menu>
        </el-col>

    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
.aside {
  text-align: center;
  .el-menu {
    border-right: none;
    .el-icon-message,
    .el-icon-arrow-down {
      color: #fff;
    }
  }
}
</style>