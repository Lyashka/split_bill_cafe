<template>
  <v-list-item class="ma-0 pa-0">
    <v-text-field
      :rules="rules"
      placeholder="Введите имя"
      v-model="item.name"
      variant="underlined"
      class="pl-5"
    ></v-text-field>
    <template v-slot:append>
      <v-btn icon="$close" density="compact" variant="text" @Click="removeUser(item.id)"></v-btn>
    </template>
  </v-list-item>
</template>

<script setup>
import { defineProps } from 'vue'
import { useUsersStore } from '../stores/users'

const usersStore = useUsersStore()
const { removeUser } = usersStore

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
