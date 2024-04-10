import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  let products = reactive([])

  const newProduct = function () {
    products.push({
      name: '',
      price: '',
      id: products[products.length - 1] == undefined ? 1 : products[products.length - 1].id + 1
    })
  }

  const isEmptyProduct = () => {
    return products.some((e) => e.name.trim() == '' || e.price.trim() == '')
  }

  function addProductInList() {
    if (products.length == 0) {
      newProduct()
    } else {
      if (!isEmptyProduct()) {
        newProduct()
      }
    }
  }

  function removeProduct(id) {
    const index = products.findIndex((item) => item.id === id)
    if (index !== -1) {
      products.splice(index, 1)
    }
  }

  return { products, addProductInList, removeProduct, isEmptyProduct }
})
