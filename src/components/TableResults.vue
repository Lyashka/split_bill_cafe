<template>
  <v-list-item>
    <v-table class="table-container">
      <thead>
        <tr>
          <th class="text-center">Кто</th>
          <th class="text-center">Кому</th>
          <th class="text-center">Сколько</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in arrDebtors">
          <td>{{ item.name }}</td>
          <td>{{ item.debt.name }}</td>
          <td>{{ Math.round(item.debt.price * 10) / 10 }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-list-item>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  arrDebtors: Array
})
</script>

<style scoped>
.table-container {
  font-size: 15px;
}
</style>
