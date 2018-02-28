<template>
  <div class="login">
    <section>
      <el-form label-position="top" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="10px" class="demo-ruleForm" size="medium">
        <el-form-item label="用户名" prop="uname">
          <el-input type="text" v-model="ruleForm2.uname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
          <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
    <!-- 提示 -->

  </div>
</template>

<script>
export default {
  data() {
    //   /* ***  */
    //  var validateUserName = (rule, value, callback) => {
    //       if (value === '') {
    //         // callback(new Error('请输入密码'));
    //         alert('请输入用户名')
    //       } else {
    //         callback();
    //       }
    //     };
    //  var validatePwd = (rule, value, callback) => {
    //       if (value === '') {
    //         callback(new Error('请输入密码'));
    //       } else {
    //         callback();
    //       }
    //     };

    //   /* *** */

    return {
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
    //登录验证
    login() {
      this.$http.post(this.$api.login, this.ruleForm2).then(res => {
        // this.$alert("登录成功");
        console.log(res);
        if (res.data.status == 0) {
          this.$alert("登录成功", "提示", {
            callback: () => {
              localStorage.setItem("uname", res.data.message.uname);
              this.$router.push({ name: "admin" });
            }
          });

        
        } else {
          this.$alert(res.data.message);
        }
      });
    },
    //提交并验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!');
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login {
  background: #0000ff;
  height: 100%;
  section {
    width: 400px;
    height: 300px;
    padding: 20px;
    margin: 0 auto;
    position: relative;
    // position: absolute;;
    border-radius: 5px;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid rgb(55, 225, 255);
    .el-form-item__label {
      margin: 0;
    }
  }
}
</style>