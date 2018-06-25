<template>
  <div class="view-categorys">
    <el-table :data="categorys" border style="width: 100%">
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
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      categorys: state => state.category.categorys
    })
  },
  created () {
    if (this.categorys.length === 0) {
      this.$store.dispatch('getCategorys')
    }
  }
}
</script>

<style type="text/css" media="screen">

</style>
