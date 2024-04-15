<template>
  <v-form @submit.prevent class="mt-10">
    <v-card class="mx-auto text-center" max-width="600px" min-height="100px">
      <v-btn block density="comfortable" @Click="addUserInList()">Добавить</v-btn>
      <div v-if="users.length == 0">Список пуст...</div>
      <v-list>
        <ListItemUser v-for="item in users" :key="item.id" :item="item" />
      </v-list>
      <v-btn
        v-if="users.length != 0"
        block
        density="comfortable"
        class="mt-2"
        type="submit"
        @click="saveUsersForm()"
        >Сохранить</v-btn
      >
    </v-card>
  </v-form>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'

import { useUsersStore } from '../stores/users'

import ListItemUser from '@/components/ListItemUser.vue'



const usersStore = useUsersStore()
const { users, addUserInList, saveUsersForm } = usersStore



watch(users, async (newQuestion, oldQuestion) => {
  console.log(users)
})
</script>

<style scoped>
img {
  border: none;
  background: none;
}
</style>
