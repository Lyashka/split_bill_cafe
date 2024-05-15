<template>
  <v-form @submit.prevent class="mt-5">
    <v-card
      class="mx-auto text-center"
      max-width="600px"
      min-height="100px"
      >
      <v-btn
        block
        prepend-icon="mdi-plus"
        density="comfortable"
        variant="outlined"
        size="large"
        @click="addUserInList"
        >
        Добавить пользователя
      </v-btn>
      <div v-if="users.length == 0">Список пуст...</div>
      <v-list>
        <ListItemUser
          v-for="item in users"
          :key="item.id"
          :item="item"
        />
      </v-list>
      <v-btn
        v-if="users.length != 0"
        class="mt-2"
        block
        density="comfortable"
        type="submit"
        size="large"
        @click="saveUsersForm"
        :disabled="disableStatusUsers"
        >
        Сохранить
      </v-btn>
    </v-card>
  </v-form>
</template>

<script setup>
import { useUsersStore } from '../stores/users'

import ListItemUser from '@/components/ListItemUser.vue'
import { computed } from 'vue'

const usersStore = useUsersStore()
const { users, addUserInList, saveUsersForm, getUsersFromLocaleStorage, searchDuplicates } = usersStore

const disableStatusUsers = computed(() => {
  const hasEmptyName = users.some((e) => e.name.trim() == '')
  const hasDuplicate = searchDuplicates()
  return hasEmptyName || hasDuplicate
}) 

getUsersFromLocaleStorage()
</script>
