<template>
  <v-form @submit.prevent class="mt-5">
    <v-card
      class="mx-auto text-center"
      max-width="600px"
      min-height="100px"
    >
      <v-row  
        no-gutters 
        align="center" 
        justify="center">
        <v-col cols="auto">
          <BackBtn :url="'/'" />
        </v-col>
        <v-col >
          <v-btn
          block
          prepend-icon="mdi-plus"
          density="comfortable"
          variant="outlined"
          size="large"
          @click="addProductInList"
          >
          Добавить позицию
        </v-btn>
        </v-col>
      </v-row>

      <v-list>
        <ListItemProduct
          v-for="item in products"
          :key="item.id"
          :item="item"
        />
      </v-list>

      <div>Общий счет: {{ summPrice() }}</div>
      <v-btn
        v-if="products.length != 0"
        class="mt-2"
        block
        density="comfortable"
        type="submit"
        size="large"
        @click="saveProductsForm"
        :disabled="disableStatusProducts"
        >
        Перейти к результатам
      </v-btn>
    </v-card>
  </v-form>
</template>

<script setup>
import ListItemProduct from '@/components/ListItemProduct.vue'
import BackBtn from '@/components/UI/BackBtn.vue'

import { useProductsStore } from '../stores/products'
import { computed } from 'vue'

const productsStore = useProductsStore()
const { products, addProductInList, saveProductsForm, summPrice, getProductsFromLocaleStorage, searchDuplicatesProducts } = productsStore

const disableStatusProducts = computed(() => {
  const hasEmptyproductName = products.some((e) => e.name.trim() == '' || e.price.trim() == '' || e.price <= 0)
  const hasDuplicateProducts = searchDuplicatesProducts()
  return hasEmptyproductName || hasDuplicateProducts
}) 

if (getProductsFromLocaleStorage() != null) {
  getProductsFromLocaleStorage().forEach((e) => {
    const existingIndex = products.findIndex(
      (p) => p.id === e.id
    )
    if (existingIndex === -1) {
      products.push(e)
    }
  })
}
</script>
