<template>
  <div class="view-users">
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
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      tableData: []
    }
  },
  async created () {
    if (this.tableData.length === 0) {
      let ret = await api.getProducts()
      this.tableData = ret.data.data.products
    }
  }
}
</script>

<style type="text/css" media="screen">

</style>
