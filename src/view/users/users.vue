<template>
  <div class="view-users">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="_id" label="用户索引"></el-table-column>
      <el-table-column prop="username" label="用户昵称"></el-table-column>
      <el-table-column prop="mobile" label="手机号码"></el-table-column>
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
      let ret = await api.getUsers()
      this.tableData = ret.data.data.list
    }
  }
}
</script>

<style type="text/css" media="screen">

</style>
