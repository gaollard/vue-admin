import fetch from './fetch'

const devBaseUrl = '/api/'
const prodBaseUrl = 'https://api.airtlab.com/'
const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? prodBaseUrl : devBaseUrl

export default {
  getProducts () {
    return fetch.get(`${baseUrl}product`)
  },
  getBrands () {
    return fetch.get(`${baseUrl}brand`)
  },
  getCategorys () {
    return fetch.get(`${baseUrl}category`)
  },
  getUsers () {
    return fetch.get(`${baseUrl}user`)
  },
  addProduct (params) {
    return fetch.post(`${baseUrl}product`, params)
  },
  uploadProductLogo (params) {
    return fetch.post(`${baseUrl}product/upload`, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
