<template>
  <v-list-item>
    <v-row  align="center" justify="center">
      <v-col cols="5">
        <v-text-field
          v-model="item.name"
          label="Название"
          placeholder="Введите название позиции"
          variant="underlined"
          :rules="[rules.checkStringProduct]"
        />  
      </v-col>
      <v-col cols="5">
        <v-text-field
          v-model="item.price"
          label="Цена"
          placeholder="Введите цену продукта"
          variant="underlined"
          type="number"
          :rules="[rules.checkNumber]"
        />
      </v-col>
      <v-col cols="1">
        <v-btn
          icon="mdi-window-close"
          density="compact"
          variant="text"
          @click="removeProduct(item.id)"
        />
      </v-col>
      <v-col cols="1">
        <v-btn 
          size="x-large"
          density="compact"
          variant="text"
          @click="toggleExpansion"
          :icon="toggleNameIcon"
        />
      </v-col>
    </v-row>

    <v-row v-if="userPayer != ''" class="mb-5 ml-1">
      <v-chip
        density="comfortable"
        size="small"
        color="green"
      >
        {{ userPayer }}
      </v-chip>
      <v-chip
        v-for="item in checkInfo"
        :key="item.id"
        density="comfortable"
        size="small"
      >
        {{ item.name }}
      </v-chip>
    </v-row>

    <div v-if="expanded" class="ml-3">
      <v-row>
        <v-select
          v-model="userPayer"
          variant="solo-inverted"
          style="width: 100%"
          label="Платит"
          :items="arrListNameUsers"
          @update:modelValue="updateUserPayer"
        />
        <div style="width: 100%; text-align: start">
          Кто ел:
        </div>
        <v-checkbox
          v-for="item in users" 
          :key="item.id"
          class="pl-1 checkbox"
          v-model="checkInfo"
          :label="item.name"
          :value="item"
          @update:modelValue="updateUsersAte"
        />
      </v-row>
    </div>
  </v-list-item>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProductsStore } from '../stores/products'
import { useUsersStore } from '../stores/users'

import rules  from '../composables/commonValidators'

const productsStore = useProductsStore()
const { removeProduct, getProductsFromLocaleStorage, updateProduct } = productsStore

const usersStore = useUsersStore()
const { users, getUsersFromLocaleStorage } = usersStore

const props = defineProps({
  item: Object
})

const expanded = ref(false)
const toggleNameIcon = ref('mdi-chevron-down')
function toggleExpansion() {
  expanded.value = !expanded.value
  toggleNameIcon.value = expanded.value ? 'mdi-chevron-up' : 'mdi-chevron-down'
}

// add users ate in product
const checkInfo = ref([])
const updateUsersAte = (newUsersAte) => {
  updateProduct({...props.item, usersAte: newUsersAte})
}

//add userPayer in product
const arrListNameUsers = users.map((user) => user.name)
const userPayer = ref('')
const updateUserPayer = (newUserPayer) => {
  updateProduct({...props.item, userPayer: newUserPayer})
}

//get users and products from localeStorage
onMounted(() => {
  getUsersFromLocaleStorage()
  if (getProductsFromLocaleStorage() != null) {
    getProductsFromLocaleStorage().forEach((e) => {
      if (e.id == props.item.id) {
        userPayer.value = e.userPayer
        checkInfo.value = e.usersAte
      }
    })
  }
})

</script>

<style scoped lang="scss">
@import '../assets//main.scss';
.checkbox {
  @include flexble;
}
</style>
