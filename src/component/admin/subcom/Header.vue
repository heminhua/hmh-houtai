<template>
    <div class="header">
        <i class="el-icon-menu el-icon--left"></i>
        <div class="header_admin">
            <p class="header_admin_name"> 你好{{uname}}</p>
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom "></i>
                    功能
                </span>
                <!-- <el-button type="text">点击打开 Message Box</el-button> -->
                
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">修改密码</el-dropdown-item>
                    <el-dropdown-item command="b">注销登录</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      uname: localStorage.getItem("uname"),
      isShow: false,
       ruleForm2: {
        uname: "",
        upwd: ""
      },
      rules2: {
        uname: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        upwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
        //  uname: [
        //   { validator: validateUserName, trigger: 'blur' }
        // ],
        //  upwd: [
        //   { validator: validatePwd, trigger: 'blur' }
        // ],
      }
    };
  },
  methods: {
    /* 拿出的逻辑 */
    logout() {
      this.$http.get(this.$api.logout).then(res => {
        if (res.data.status == 0) {
          this.$router.push({ name: "login" });
        }
      });
    },
   
    /* 执行 */
    handleCommand(command) {
      if (command == "b") {
        // console.log('登出');
        this.logout();
      }
     
    }
  }
};
</script>

<style scoped lang="less">
.header {
  color: #000;
  height: 100%;
  .el-icon-menu {
    font-size: 20px;
    line-height: 60px;
  }
  &_admin {
    float: right;
    height: 100%;
    &_name {
      margin: 0;
      height: 100%;
      line-height: 60px;
      padding-right: 10px;
      display: inline-block;
      border-right: 1px solid #e5e5e5;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #0000ff;
      font-weight: bold;
      font-size: 14px;
      .el-icon-caret-bottom {
        font-size: 20px;
      }
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>