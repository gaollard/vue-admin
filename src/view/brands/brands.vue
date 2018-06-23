<template>
  <div class="view-brands">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="brandId" label="品牌索引"></el-table-column>
      <el-table-column prop="brandName" label="品牌名称"></el-table-column>
      <el-table-column prop="categoryId" label="所属类目"></el-table-column>
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
      let ret = await api.getBrands()
      this.tableData = ret.data.data.brands
    }
  }
}
</script>

<style type="text/css" media="screen">

</style>
