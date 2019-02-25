/**
 * Mocking client-server processing
 */
import _products from './products.json'
import Importproducts from './products'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
// const fetchData = () => {
//   return fetch('/api/get/products')
//    .then(results =>results.json())
//     )
//    }

const TIMEOUT = 100
const file = Importproducts()

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
