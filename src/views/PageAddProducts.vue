<template>
  <v-form @submit.prevent class="mt-16">
    <v-card class="mx-auto text-center" max-width="600px" min-height="100px">
      <div class="btns-container">
        <BackBtn :url="'/'" />
        <v-btn
          block
          density="comfortable"
          @click="addProductInList()"
          class="btn-add-product"
          variant="text"
          >Добавить позицию</v-btn
        >
      </div>

      <v-list>
        <ListItemProduct v-for="item in products" :key="item.id" :item="item" />
      </v-list>

      <div>Общий счет: {{ summPrice() }}</div>
      <v-btn
        v-if="products.length != 0"
        block
        density="comfortable"
        class="mt-2"
        type="submit"
        @click="saveProductsForm()"
        >Результаты</v-btn
      >
    </v-card>
  </v-form>
</template>

<script setup>
import ListItemProduct from '@/components/ListItemProduct.vue'
import BackBtn from '@/components/UI/BackBtn.vue'

import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()
const { products, addProductInList, saveProductsForm, summPrice, getProductsFromLocaleStorage } =
  productsStore

const rules = [
  (value) => {
    if (value.trim()) return true
    return 'Обязательное поле'
  }
]

if (getProductsFromLocaleStorage() != null) {
  getProductsFromLocaleStorage().forEach((e) => {
    const existingIndex = products.findIndex((p) => p.id === e.id)
    if (existingIndex === -1) {
      products.push(e)
    }
  })
}
</script>

<style scoped lang="scss">
@import '../assets//main.scss';
.btns-container {
  @include flexble;

  .btn-add-product {
    padding-right: 100px;
  }
}
</style>
