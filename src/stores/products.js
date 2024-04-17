import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useProductsStore = defineStore('products', () => {
  let products = reactive([])

  const newProduct = function () {
    products.push({
      id: products[products.length - 1] == undefined ? 1 : products[products.length - 1].id + 1,
      name: '',
      price: '',
      userPayer: '',
      usersAte: []
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

  let summPrice = () => {
    return products.reduce((acc, curr) => (acc += Number(curr.price)), 0)
  }

  const router = useRouter()
  function saveProductsForm() {
    if (!isEmptyProduct()) {
      router.push('/results')
    }
  }

  return { products, addProductInList, removeProduct, saveProductsForm, summPrice }
})