<template>
  <div class="view-product-edit">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="机型名称">
        <el-input v-model="form.productName"></el-input>
      </el-form-item>
      <el-form-item label="所属品牌">
        <el-input v-model="form.brandName"></el-input>
      </el-form-item>
      <el-form-item label="品牌ID">
        <el-input v-model="form.brandId"></el-input>
      </el-form-item>
      <el-form-item label="所属类目">
        <el-input v-model="form.categoryName"></el-input>
      </el-form-item>
      <el-form-item label="类目ID">
        <el-input v-model="form.categoryId"></el-input>
      </el-form-item>
      <el-form-item label="机型价格">
        <el-input v-model="form.productPrice"></el-input>
      </el-form-item>
      <el-form-item label="机型图片">
        <el-upload
          name="file"
          :auto-upload="false"
          drag
          :on-change="handleChange"
          :before-upload="handleBeforeUpload"
          :on-success="handleAvatarSuccess"
          action="http://127.0.0.1:3003/product/upload"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <img v-if="form.productLogo" :src="imgBaseUrl + form.productLogo">
        </el-upload>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </div>
</template>

<script type="text/javascript">
import api from '@/api/index'
export default {
  data () {
    return {
      imgBaseUrl: 'http://img.airtlab.com',
      form: {
        productName: 'IPhone 9',
        brandName: '苹果',
        brandId: '1',
        categoryId: '1',
        categoryName: '手机',
        productLogo: '',
        productDescription: '心机发售 限时高价'
      }
    }
  },
  methods: {
    async handleChange (file, fileList) {
      let formData = new FormData()
      formData.append('file', file['raw'])
      // https://api.airtlab.com/product/upload
      let ret = await this.$http.post('http://127.0.0.1:3003/product/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      this.form.productLogo = ret.data.url
    },
    handleBeforeUpload (file) {
      console.log(file)
      // return false
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
        this.$message({message: '操作成功', type: 'success'})
      }
    }
  }
}
</script>
