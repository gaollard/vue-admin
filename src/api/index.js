import fetch from './fetch'

const devBaseUrl = '/api/'
const prodBaseUrl = 'https://api.airtlab.com/'
const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? prodBaseUrl : devBaseUrl

export default {
  // 商品列表
  getProducts () {
    return fetch.get(`${baseUrl}product`)
  },
  // 品牌列表
  getBrands () {
    return fetch.get(`${baseUrl}brand`)
  },
  // 类目列表
  getCategorys () {
    return fetch.get(`${baseUrl}category`)
  },
  // 用户列表
  getUsers () {
    return fetch.get(`${baseUrl}users`)
  },
  // 添加商品
  addProduct (params) {
    return fetch.post(`${baseUrl}product`, params)
  },
  // 上传商品logo
  uploadProductLogo (params) {
    return fetch.post(`${baseUrl}product/upload`, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  // 帖子列表
  getPosts () {
    return fetch.get(`${baseUrl}post`)
  },
  // 文章详情
  getPostItem ({ postId }) {
    return fetch.get(`${baseUrl}post/${postId}`)
  },
  // 添加文章
  addPost (params) {
    return fetch.post(`${baseUrl}post`, params)
  },
  // 更新文章
  updatePost ({ postId, markdown, title }) {
    return fetch.post(`${baseUrl}post/${postId}`, {
      title,
      markdown
    })
  }
}
