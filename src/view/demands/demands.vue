<template>
  <div class="view-users">
    <el-row class="table-hd">
      <el-button size="small" type="primary" plain @click="addItem">添加</el-button>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="postId" label="帖子索引"></el-table-column>
      <el-table-column prop="title" label="帖子标题"></el-table-column>
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
      <el-table-column prop="postId" label="相关操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" plain @click="toItem(scope.row)">查看</el-button>
          <el-button size="small" type="primary" plain @click="editItem(scope.row)">编辑</el-button>
          <el-button size="small" type="primary" plain @click="delItem">删除</el-button>
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
      tableData: state => state.post.posts
    })
  },
  methods: {
    addItem () {
      this.$router.push({
        name: 'postEdit'
      })
    },
    toItem ({ postId }) {
      this.$router.push(`/addDemand/${postId}`)
    },
    editItem ({ postId }) {
      this.$router.push({
        name: 'postEdit',
        params: {
          postId
        }
      })
    },
    delItem () {
      this.$router.push('/addDemand')
    }
  },
  async created () {
    if (this.tableData.length === 0) {
      this.$store.dispatch('getPosts')
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
