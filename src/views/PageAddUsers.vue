
<template> 
    <v-form @submit.prevent class="mt-10">
    <v-card class="mx-auto text-center" max-width="500px" min-height="100px"> 
      <v-btn block density="comfortable" @Click="addUserInList" >Добавить</v-btn>
      <div v-if="items.length == 0">Список пуст...</div>
      <v-list>
        <v-list-item class="ma-0 pa-0" v-for="item in items" :key="item.id">
            <v-text-field :rules="rules" clearable placeholder="Введите имя" v-model="item.name" variant="underlined" class="pl-5"></v-text-field> 
            <template v-slot:append>
              <v-btn 
              color="grey-lighten-1"
              icon="mdi-information"
              variant="text"
              @Click="removeItem(item.id)"> 
              <img :src="iconClose"></v-btn> 
            </template>
        </v-list-item>
      </v-list>
      <v-btn v-if="items.length != 0" block density="comfortable" class="mt-2" type="submit" @click="saveUsersForm">Сохранить</v-btn>
  </v-card> 
  </v-form>
</template>

<script setup> 
import { reactive, computed, watch } from "vue";
import iconClose from '../assets/svg/close.svg'

let items = reactive([])
const rules = [
        value => {
          if (value.trim()) return true

          return 'Обязательное поле'
        },
      ]

const newUser = function(){
  items.push({
          name: '',
          id: items[items.length-1] == undefined ? 1 : items[items.length-1].id + 1,
      })
}

function addUserInList() {
  if(items.length == 0){
    newUser()
  }
  else{
    const isEmptyName = items.some(e => e.name.trim() == '');
    if(!isEmptyName) {
      newUser()
    }
  }
}

function removeItem(id) {
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
}

function saveUsersForm() {
  console.log('s');
}

watch(items, async (newQuestion, oldQuestion) => {
  console.log(items);
})


</script>

<style scoped>
img{
  border: none;
  background: none;
}
</style>