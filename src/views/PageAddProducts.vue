<template>
  <v-form @submit.prevent class="mt-10">
    <v-card class="mx-auto text-center" max-width="600px" min-height="100px">
      <v-btn block density="comfortable" @click="addProductInList()">Добавить позицию</v-btn>
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

import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()
const { products, addProductInList, saveProductsForm, summPrice } = productsStore

const rules = [
  (value) => {
    if (value.trim()) return true
    return 'Обязательное поле'
  }
]
</script>

<style scoped></style>
