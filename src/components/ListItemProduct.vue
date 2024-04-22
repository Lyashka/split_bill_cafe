<template>
  <v-list-item>
    <v-row align="center" justify="center">
      <v-col cols="5">
        <v-text-field
          variant="underlined"
          :rules="rules"
          placeholder="Название позиции"
          v-model="item.name"
        >
        </v-text-field>
      </v-col>
      <v-col cols="5">
        <v-text-field
          variant="underlined"
          :rules="rules"
          type="number"
          placeholder="Стоимость"
          v-model="item.price"
        >
        </v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn icon="$close" density="compact" variant="text" @click="removeProduct(item.id)">
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="toggleExpansion" :icon="toggleNameIcon" density="compact" variant="text">
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mb-5 ml-1" v-if="userPayer != ''">
      <v-chip density="comfortable" size="small" color="green">
        {{ userPayer }}
      </v-chip>
      <v-chip density="comfortable" size="small" v-for="item in checkInfo">
        {{ item.name }}
      </v-chip>
    </v-row>

    <div v-show="expanded" class="ml-3">
      <v-row>
        <v-select 
        variant="solo-inverted" 
          style="width: 100%"
          label="Платит"
          :items="arrListNameUsers"
          v-model="userPayer"
        ></v-select>
        <div style="width: 100%; text-align: start">Кто ел:</div>
        <v-checkbox
          class="pl-1 checkbox"
          v-for="item in users"
          :label="item.name"
          :value="item"
          v-model="checkInfo"
        ></v-checkbox>
      </v-row>
    </div>
  </v-list-item>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { useProductsStore } from '../stores/products'
import { useUsersStore } from '../stores/users'


const productsStore = useProductsStore()
const { removeProduct } = productsStore

const usersStore = useUsersStore()
const { users } = usersStore

const props = defineProps({
  item: Object
})

console.log(props.item);



const rules = [
  (value) => {
    if (value.trim()) return true
    return 'Обязательное поле'
  }
]

let expanded = ref(false)
let toggleNameIcon = ref('$expand')
function toggleExpansion() {
  expanded.value = !expanded.value
  if (toggleNameIcon.value == '$expand') {
    toggleNameIcon.value = '$collapse'
  } else {
    toggleNameIcon.value = '$expand'
  }
}

// add users ate in product
let checkInfo = ref([])
watch(checkInfo, async () => {
  props.item.usersAte = checkInfo.value
})

//add userPayer in product
let arrListNameUsers = users.map((user) => user.name)
let userPayer = ref('')
watch(userPayer, async () => {
  props.item.userPayer = userPayer.value
})
</script>

<style scoped lang="scss">
@import '../assets//main.scss';
.checkbox{
  @include flexble
}
</style>
