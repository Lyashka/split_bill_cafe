<template>
  <v-list-item>
    <v-table class="table-container">
      <thead>
        <tr>
          <th class="text-center">Кто</th>
          <th class="text-center">Кому</th>
          <th class="text-center">Сколько</th>
        </tr>
        <tr v-if="arrDebtors.length == 0">
          <th></th>
          <th class="text-message">Никто ничего не должен</th>
          <th></th>
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

<style scoped lang="scss">
@import '../assets//main.scss';
.table-container {
  font-size: 15px;
  .text-message {
    @include flexble;
    justify-content: center;
  }
}
</style>
