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
              <v-btn 
              icon="$close"
              density="compact"
              variant="text"
              @click="removeProduct(item.id)"
              >
              </v-btn>
            </v-col>
            <v-col  cols="1">
              <v-btn  @click="toggleExpansion"
              :icon="toggleNameIcon"
              density="compact"
              variant="text"
              > 
              </v-btn>
            </v-col>
        </v-row>
        
        <v-row class="mb-1 ml-1" align="center" justify="start" style="display: flex;">
          <v-chip density="comfortable"  v-for="item in checkInfo"> {{ item.name }} </v-chip> 
        </v-row>
        
    
    <v-row v-if="expanded">
          <v-checkbox
          class="pl-1"
          v-for="item in users"
          :label="item.name"
          :value="item"
          v-model="checkInfo"
        ></v-checkbox> 
    </v-row>

  </v-list-item>
</template>

<script setup>
import {ref, defineProps, watch } from 'vue'
import { useProductsStore } from '../stores/products'
import { useUsersStore } from '../stores/users'

const productsStore = useProductsStore()
const { removeProduct } = productsStore

const usersStore = useUsersStore()
const { users } = usersStore


const props = defineProps({
  item: Object 
})

const rules = [
  (value) => {
    if (value.trim()) return true
    return 'Обязательное поле'
  } 
] 


let expanded = ref(false)
let toggleNameIcon = ref('$expand')
function toggleExpansion() {
      expanded.value = !expanded.value;
      if(toggleNameIcon.value == '$expand'){
        toggleNameIcon.value = '$collapse'
      }else{
        toggleNameIcon.value = '$expand'
      }
    }

// add users ate in product
let checkInfo = ref([])
watch(checkInfo, async () => {
  props.item.usersAte = checkInfo.value
  console.log(typeof(props.item));
})
</script>

<style scoped>

</style>
