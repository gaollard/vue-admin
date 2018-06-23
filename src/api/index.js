import fetch from './fetch'
const baseUrl = 'https://api.airtlab.com/'

export default {
  getProducts () {
    return fetch.get(`${baseUrl}product`)
  },
  getBrands () {
    return fetch.get(`${baseUrl}brand`)
  },
  getCategorys () {
    return fetch.get(`${baseUrl}category`)
  }
}
