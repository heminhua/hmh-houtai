<template>
    <div class="aside">

       <div class="logo">
           <img src="../../../images/share.png" alt="">
       </div>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#267cb7" text-color="#fff" active-text-color="#f00">
            <!-- index 1 -->
            <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span class="navigation">{{item.title}}</span>
                    <!-- <i class=el-icon-arrow-down></i> -->
                </template>
                <el-menu-item v-for="subItem in item.submenu" :key="subItem.text" :index="subItem.text">

                    <!-- 每个子title都是一个a链接，可以点击，所以使用router-link,设置to属性 -->
                    <router-link :to="subItem.path">
                        <i class="el-icon-document"></i>
                        <span>{{subItem.text}}</span>
                    </router-link>

                </el-menu-item>

            </el-submenu>

        </el-menu>

    </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "学员问题",
          submenu: [
            { text: "内容管理", path: "/admin/goods/content/list" },
            { text: "类别管理", path: "/admin/goods/content/category" },
            { text: "评论管理", path: "/admin" }
          ]
        },
        {
          title: "前端技术",
          submenu: [
            { text: "内容管理", path: "/admin" },
            { text: "类别管理", path: "/admin" },
            { text: "评论管理", path: "/admin" }
          ]
        },
        {
          title: "难点答疑",
          submenu: [
            { text: "内容管理", path: "/admin" },
            { text: "类别管理", path: "/admin" },
            { text: "评论管理", path: "/admin" }
          ]
        },
        {
          title: "资源下载",
          submenu: [
            { text: "内容管理", path: "/admin" },
            { text: "类别管理", path: "/admin" },
            { text: "评论管理", path: "/admin" }
          ]
        },
        {
          title: "商品管理",
          submenu: [
            { text: "内容管理", path: "/admin" },
            { text: "类别管理", path: "/admin" },
            { text: "评论管理", path: "/admin" }
          ]
        },
        {
          title: "订单管理",
          submenu: [{ text: "订单列表", path: "/admin" }]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //   console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
 // 让导航列表撑满屏幕
    .aside {
        height: 100%;
        text-align: left;

        // logo居中显示
        .logo {
            text-align: center;
        }

        // 去掉导航展开时右边的1像素边框
        .el-menu {
            border-right: 0;

            // 去掉导航列表的最小宽度限制
            &-item {
                min-width: 0;
            }
            .el-icon-menu{
                color:#fff;
            }
        }
    }
</style>