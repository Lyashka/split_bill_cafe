<template>
  <v-list-item>
    <v-row>
      <v-col>
        <v-text-field
          variant="underlined"
          :rules="rules"
          placeholder="Название позиции"
          v-model="item.name"
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          variant="underlined"
          :rules="rules"
          type="number"
          placeholder="Стоимость"
          v-model="item.price"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <template v-slot:append>
      <v-btn
        color="grey-lighten-1"
        icon="mdi-information"
        variant="text"
        @click="removeProduct(item.id)"
      >
        <img :src="iconClose"
      /></v-btn>
    </template>
    <v-row>
      <v-checkbox
        class="pl-1"
        v-for="item in users"
        :label="item.name"
        :value="item.name"
      ></v-checkbox>
    </v-row>
  </v-list-item>
</template>

<script setup>
import iconClose from '../assets/svg/close.svg'
import { defineProps } from 'vue'
import { useProductsStore } from '../stores/products'
import { useUsersStore } from '../stores/users'

const productsStore = useProductsStore()
const usersStore = useUsersStore()

const { removeProduct } = productsStore
const { users } = usersStore
console.log(users)

const props = defineProps({
  item: Object
})

const rules = [
  (value) => {
    if (value.trim()) return true
    return 'Обязательное поле'
  }
]
</script>

<style></style>
