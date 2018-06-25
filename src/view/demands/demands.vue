<template>
  <div class="view-users">
    <el-row class="table-hd">
      <el-button size="small" type="primary" plain @click="addProduct">添加</el-button>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="productId" label="商品索引"></el-table-column>
      <el-table-column prop="productName" label="商品名称"></el-table-column>
      <el-table-column prop="categoryId" label="所属类目"></el-table-column>
      <el-table-column prop="brandId" label="所属品牌"></el-table-column>
      <el-table-column prop="productPrice" label="商品价格"></el-table-column>
      <el-table-column prop="productSales" label="商品销量"></el-table-column>
      <el-table-column prop="productStock" label="商品库存"></el-table-column>
      <el-table-column prop="createTime" label="创建时间">
        <template slot-scope="scope">
          <div>{{ scope.row.createTime.split('T')[0] }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="updateTime" label="更新时间">
        <template slot-scope="scope">
          <div>{{ scope.row.updateTime.split('T')[0] }}</div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" :visible.sync="editProductDialogVisible" width="60%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="机型名称">
          <el-input v-model="form.productName"></el-input>
        </el-form-item>
        <el-form-item label="所属品牌">
          <el-input v-model="form.brandName"></el-input>
        </el-form-item>
        <el-form-item label="品牌ID">
          <el-input v-model="form.brandId"></el-input>
        </el-form-item>
        <el-form-item label="所属类目">
          <el-input v-model="form.categoryName"></el-input>
        </el-form-item>
        <el-form-item label="类目ID">
          <el-input v-model="form.categoryId"></el-input>
        </el-form-item>
        <el-form-item label="机型价格">
          <el-input v-model="form.productPrice"></el-input>
        </el-form-item>
        <el-form-item label="机型库存">
          <el-input v-model="form.productStock"></el-input>
        </el-form-item>
        <el-form-item label="机型销量">
          <el-input v-model="form.productSales"></el-input>
        </el-form-item>
        <el-form-item label="机型描述">
          <el-input v-model="form.productDescription"></el-input>
        </el-form-item>
        <el-form-item label="机型图片">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editProductDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEditForm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      tableData: [],
      editProductDialogVisible: false,
      form: {
        productName: 'IPhone 9',
        brandName: '苹果',
        brandId: '1',
        categoryId: '1',
        categoryName: '手机',
        productDescription: '心机发售 限时高价'
      }
    }
  },
  methods: {
    handleClose (e) {
      console.log(e)
    },
    addProduct () {
      this.$router.push('/addDemand')
    },
    async submitEditForm () {
      console.log(this.form)
      let ret = await api.addProduct(this.form)
      console.log(ret)
    }
  },
  async created () {
    console.log(this.$store.state.brand)
    if (this.tableData.length === 0) {
      let ret = await api.getProducts()
      this.tableData = ret.data.products
    }
  }
}
</script>

<style scoped>
.table-hd {
  margin-bottom: 20px;
  text-align: right;
}
</style>
