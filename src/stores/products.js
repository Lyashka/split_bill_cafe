import { ref, reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useProductsStore = defineStore('products', () => {
  const products = reactive([])

  const addNewProduct = function () {
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
      if (!isEmptyProduct()) {
        addNewProduct()
      }
  }

  function removeProduct(id) {
    const index = products.findIndex((item) => item.id === id)
    if (index !== -1) {
      products.splice(index, 1)
    }
  }

  const summPrice = () => {
    return products.reduce((acc, curr) => (acc += Number(curr.price)), 0)
  }

  watch(products, async () => {
    localStorage.setItem('products', JSON.stringify(products))
  })

  function getProductsFromLocaleStorage() {
    return JSON.parse(localStorage.getItem('products'))
  }

  const router = useRouter()
  function saveProductsForm() {
    if (!isEmptyProduct()) {
      router.push('/results')
    }
  }

  function clearProducts() {
    products.splice(0, products.length)
  }

  function updateProduct(newProductItem) {
    console.log(newProductItem);
    products.forEach(e => {
      if (e.id == newProductItem.id){
        e.userPayer = newProductItem.userPayer
        e.usersAte = newProductItem.usersAte
      }
    })
  }

  function searchDuplicatesProducts() {
    const lastProductName = products[products.length - 1].name.toLowerCase();
    for (let i = 0; i < products.length - 1; i++) {
      if (products[i].name.toLowerCase() == lastProductName){
        return true
      }
    }   
  }

  return {
    products,
    addProductInList,
    removeProduct,
    saveProductsForm,
    summPrice,
    getProductsFromLocaleStorage,
    clearProducts,
    updateProduct,
    searchDuplicatesProducts
  }
})
