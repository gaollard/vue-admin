<template>
  <div class="view-home">
    <h2 class="top-slogan">增量统计</h2>
    <div class="card-item">
      <el-card class="box-card" shadow>
        <div slot="header" class="clearfix">
          <span>错误日志</span>
        </div>
      </el-card>
    </div>
    <div class="card-item">
      <el-card class="box-card" shadow>
        <div slot="header" class="clearfix">
          <span>用户留存</span>
        </div>
      </el-card>
    </div>
    <div class="card-item">
      <el-card class="box-card" shadow>
        <div slot="header" class="clearfix">
          <span>销售总量</span>
        </div>
      </el-card>
    </div>
    <div class="card-item">
      <el-card class="box-card" shadow>
        <div slot="header" class="clearfix">
          <span>单品访问</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1]
    }
  }
}
</script>

<style scoped>
.top-slogan {
  padding-bottom: 20px;
}
.card-item {
  display: inline-block;
}
</style>
