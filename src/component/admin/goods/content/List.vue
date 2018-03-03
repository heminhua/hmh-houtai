<template>
  <div class="list">
    <!--面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '>' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 按钮 -->
    <div class="listBtn">
      <el-button plain size="mini" icon="el-icon-plus">新增</el-button>
      <el-button plain size="mini" icon="el-icon-check" @click="allChecked">全选</el-button>
      <el-button plain size="mini" icon="el-icon-delete" @click="del">删除</el-button>
      <el-input class="floatRight" placeholder="请输入内容" prefix-icon="el-icon-search" size="mini" v-model="searchQuery.searchvalue" @blur="search">
      </el-input>
    </div>
    <!-- 商品列表 -->
    <template>
      <!-- ref="multipleTable" -->
      <el-table :data="tableData3" style="width: 100%" @selection-change="handleSelectionChange">
        <!-- 选择框  -->
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!-- 第2列 -->
        <el-table-column label="标题" width="320">
          <template slot-scope="scope">
            <router-link :to="{ path: `detail/${scope.row.id}`}" class="colorBlue">{{ scope.row.title }}</router-link>
          </template>
        </el-table-column>

        <el-table-column prop="categoryname" label="所属类别" width="120">
        </el-table-column>

        <el-table-column prop="add_time" label="发布时/人" show-overflow-tooltip>
        </el-table-column>

        <el-table-column label="属性">
          <!-- 3个属性 -->
          <template slot-scope="scope">
            <i :class="['el-icon-picture', scope.row.is_side==1?'active':'']"></i>
            <i :class="['el-icon-upload', scope.row.is_top==1?'active':'']"></i>
            <i :class="['el-icon-star-on', scope.row.is_hot==1?'active':'']"></i>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link :to="{name:'goodsDetail'}">操作</router-link>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <!-- 分页 -->
    <el-pagination :current-page="searchQuery.pageIndex" :page-size="searchQuery.pageSize"         :total="searchQuery.total"
    :page-sizes="[4, 6, 8, 40]" 
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [],
      multipleSelection: [],
      searchQuery: {
        pageIndex: 1,
        pageSize: 4,
        searchvalue: "",
        total: 300
      }
    };
  },

  methods: {
    handleSizeChange(size) {
      // console.log(`每页 ${val} 条`);
      this.searchQuery.pageSize = size;
      this.getGoodsData();
    },
    handleCurrentChange(page) {
      // console.log(`当前页: ${val}`);
      this.searchQuery.pageIndex = page;
      this.getGoodsData();
    },
    //当选择项发生改变时触发的事件
    handleSelectionChange(val) {
      // console.log(val);
      this.multipleSelection = val;
    },
    /* 调商品列表接口 */
    getGoodsData() {
      // &searchvalue
      let api = `${this.$api.gsList}?pageIndex=${
        this.searchQuery.pageIndex
      }&pageSize=${this.searchQuery.pageSize}&searchvalue=${
        this.searchQuery.searchvalue
      }`;
      this.$http.get(api).then(res => {
        console.log(res.data);
        //把请求回来数据覆盖原来data数据，表格就会自动刷新
        this.tableData3 = res.data.message;
        //把后端接口返回的数量总量赋值给分布组件使用
        this.searchQuery.total = res.data.totalcount;
      });
    },
    //搜索方法
    search() {
      this.getGoodsData();
    },

    //删除
    del() {
      let delIds = this.multipleSelection.map(v => v.id);
      this.$http.get(this.$api.gsDel + delIds).then(res => {
        if (res.data.status == 0) {
          this.getGoodsData();
        }
      });
    },
    //全选
    allChecked() {
      document.querySelector(".el-checkbox__original").click();
    }
  },
  //生命周期函数 、页面一上来就自动调用接口获取表格数据进行展示
  //当组件初始化完毕，并且数据可用时，被 自动 调用
  created() {
    // console.log(11);
    // console.log(this);
    this.getGoodsData();
  }
  // created:()=>this.getGoodsData()//这个是错误的
};
</script>

<style scoped lang="less">
.list {
  .listBtn {
    margin-top: 20px;
    border: 1px solid rgb(236, 236, 236);
    padding: 10px 5px;
    border-radius: 5px;
    .floatRight {
      float: right;
      width: 200px;
    }
  }
  .colorBlue {
    color: blue;
  }
  [class^="el-icon"] {
    font-size: 18px;
  }
  [class^="el-icon"].active {
    color: #000;
    font-weight: bold;
  }
}
</style>