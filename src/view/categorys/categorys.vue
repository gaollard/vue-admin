<template>
  <div class="view-categorys">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="categoryId" label="类目索引"></el-table-column>
      <el-table-column prop="categoryName" label="类目名称"></el-table-column>
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
      let ret = await api.getCategorys()
      let list = ret.data.categorys
      list.forEach(item => {
        item.createTime = item.updateTime = '2018-06-07T14:54:37.880Z'
      })
      this.tableData = list
    }
  }
}
</script>

<style type="text/css" media="screen">

</style>
