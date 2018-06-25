<template>
  <div class="view-product-edit">
    <el-form ref="form" :model="form" label-width="80px">
      <el-input v-model="form.title" placeholder="标题"></el-input>
      <mavon-editor class="mt20" v-model="form.content"/>
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
Vue.use(mavonEditor)
export default {
  data () {
    return {
      value: '',
      imgBaseUrl: 'http://img.airtlab.com',
      form: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    async handleChange (file, fileList) {
      let formData = new FormData()
      formData.append('file', file['raw'])
      let ret = await this.$http.post(
        'https://api.airtlab.com/product/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      this.form.productLogo = ret.data.url
    },
    handleBeforeUpload (file) {
      console.log(file)
    },
    cancelForm () {
      console.log(1)
    },
    handleAvatarSuccess (res, file, fileList) {
      let url = res.data.url
      if (url) {
        this.form.productLogo = this.imgBaseUrl + url
      }
    },
    async submitForm () {
      let result = await api.addProduct(this.form)
      if (result.code === '0') {
        this.$message({ message: '操作成功', type: 'success' })
      }
    }
  }
}
</script>

<style scoped>
.mt20 {
  margin-top: 20px;
}
</style>
