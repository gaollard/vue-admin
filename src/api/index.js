import fetch from './fetch'
// const baseUrl = 'https://api.airtlab.com/'
const baseUrl = '//127.0.0.1:3003/'
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
  }
}
