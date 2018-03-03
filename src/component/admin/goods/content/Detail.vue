<template>
    <div>
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '>' }">返回上一层</el-breadcrumb-item>
            <el-breadcrumb-item>购物商城</el-breadcrumb-item>
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>编辑商品</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 表单 -->
        <el-form class="detailForm" ref="form" :model="form" label-width="80px">
            <el-form-item label="内容标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="副标题">
                <el-input v-model="form.sub_title"></el-input>
            </el-form-item>
            <el-form-item label="所属类别">
                <el-select v-model="form.category_id" placeholder="请选择">
                    <!-- <el-option label="区域一" value="shanghai"></el-option> -->
                    <!-- <el-option label="区域二" value="beijing"></el-option> -->
                    <el-option v-for="item in category" :key="item.category_id" :label="item.title" :value="item.category_id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否发布">
                <el-switch v-model="form.status"></el-switch>
            </el-form-item>
            <el-form-item label="推荐类型">
                <el-switch v-model="form.is_slide"></el-switch>轮播图
                <el-switch v-model="form.is_top"></el-switch>置顶
                <el-switch v-model="form.is_hot"></el-switch>推荐
            </el-form-item>

            <el-form-item label="上传封面">
                <!-- <el-input v-model="form.a">form.imgList</el-input> -->
                <!-- action 用来设置上传接口，list-type用来设置文件列表样式 -->
                <!-- file-list用来设置文件列表的数据，我们每上传成功一个文件，就要给这个列表数据push上传后的信息，然后列表就会展示出来 -->
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="form.imgList" list-type="picture" :on-success="uploadList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="上传附件">
                <!-- <el-input v-model="form.b">form.imgList</el-input> -->
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="form.fileList" list-type="picture" :on-success="uploadFile">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="商品货号">
                <el-input type="text" v-model="form.goods_no"></el-input>
            </el-form-item>
            <el-form-item label="库存数量">
                <el-input type="text" v-model="form.stock_quantity"></el-input>
            </el-form-item>
            <el-form-item label="市场价格">
                <el-input type="text" v-model="form.market_price"></el-input>
            </el-form-item>
            <el-form-item label="销售价格">
                <el-input type="text" v-model="form.sell_price"></el-input>
            </el-form-item>
            <el-form-item label="内容摘要">
                <el-input type="textarea" v-model="form.zhaiyao"></el-input>
            </el-form-item>

            <el-form-item label="详细内容">
                <!-- <div v-html="form.content"></div> -->
                <quill-editor v-model="form.content"></quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交保存</el-button>
                <el-button type="warning" @click="$router.go(-1)">返回上一层</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      form: {},
      id: this.$route.params.id,
   
      category: []
    };
  },
  methods: {
    //   删除
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    //上传封面=》咱们的后端接口，只能接收一张封面
    uploadList(data) {
      this.form.imgList = [data];
    },
    //上传附件
    uploadFile(data) {
      this.form.fileList.push(data); //把接口返回 的数据保存起来，供将来保存使用
    },
    onSubmit() {
      //   console.log("submit!");
      this.$http.post(this.$api.gsEdit + this.id, this.form).then(res => {
        //   console.log(res);
        if (res.data.status == 0) {
          console.log(this.form);
          this.$alert("数据修改成功");
        }
      });
    },
    /* 商品详情 */
    getGoodsDetail() {
      this.$http.get(this.$api.gsDetail + this.id).then(res => {
        // console.log(res);
        this.form = res.data.message;
        //为了让分类列表默认正确显示，把商品category_id的数据类型改为number
        this.form.category_id = +this.form.category_id;
      });
    },
    /* 获取商品分类数据 */
    getCategory() {
      this.$http.get(this.$api.ctList + "goods").then(res => {
        if (res.data.status == 0) {
          this.category = res.data.message;
        }
      });
    }
  },
  created() {
    this.getGoodsDetail();
    this.getCategory();
  }
};
</script>

<style scoped lang="less">
.detailForm {
  width: 600px;
  margin-top: 20px;
}
</style>