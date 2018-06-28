<template>
  <div class="view-product-edit">
    <el-form ref="form" :model="form" label-width="80px">
      <el-input v-model="form.title" placeholder="标题"></el-input>
      <mavon-editor class="mt20" v-model="form.markdown"/>
      <div class="mt20">
        <el-button @click="cancelForm">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import api from '@/api/index'
import { mapState } from 'vuex'

Vue.use(mavonEditor)

export default {
  data () {
    return {
      postId: '',
      imgBaseUrl: 'http://img.airtlab.com',
      form: {
        title: new Date().toString().split('GMT')[0],
        markdown: ''
      }
    }
  },
  computed: {
    ...mapState({
      item: state => state.post.post
    })
  },
  watch: {
    item (val) {
      this.form = {
        ...val
      }
    },
    postId (postId) {
      this.$store.dispatch('getPostItem', {
        postId
      })
    }
  },
  methods: {
    async submitForm () {
      let result
      if (this.postId) {
        result = await api.updatePost(this.form)
      } else {
        result = await api.addPost(this.form)
      }
      if (result.code === '0') {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      } else {
        this.$message({
          message: result._errStr,
          type: 'error'
        })
      }
    },
    cancelForm () {
      console.log(11)
    }
  },
  mounted () {
    const { postId } = this.$route.params
    postId && (this.postId = postId)
  }
}
</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
