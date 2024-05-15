<template>
  <v-list-item class="ma-0 pa-0">
    <v-text-field
      class="pl-5"
      v-model="item.name"
      label="Имя"
      placeholder="Введите имя"
      variant="underlined"
      :rules="[rules.checkStringName]"
    />
    <template v-slot:append>
      <v-btn
        icon="mdi-window-close"
        density="compact"
        variant="text"
        @click="removeUser(item.id)"
      />
    </template>
  </v-list-item>
</template>

<script setup>
import { useUsersStore } from '../stores/users'
import rules  from '../composables/commonValidators'


const usersStore = useUsersStore()
const { removeUser } = usersStore

defineProps({
  item: Object
})


</script>


