<template>
  <div class="view-brands">
    <el-table :data="brands" border style="width: 100%">
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
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      brands: state => state.brand.brands
    })
  },
  created () {
    if (this.brands.length === 0) {
      this.$store.dispatch('getBrands')
    }
  }
}
</script>

<style type="text/css" media="screen">

</style>
