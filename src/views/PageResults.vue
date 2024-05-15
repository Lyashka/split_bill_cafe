<template>
  <v-card
    class="mx-auto text-center mt-5 card-container"
    max-width="600px"
    min-height="100px"
  > 
    <v-row 
      no-gutters 
      align="center" 
      justify="center"
      >
      <v-col cols="1">
        <BackBtn :url="'/products'" />
      </v-col>
      <v-col cols="2"/>
      <v-col >
        <label >Результаты</label>
      </v-col>
      <v-col >
        <v-btn 
        block
        variant="outlined"
        size="large" 
        @click="resetForms"
        > 
        Начать занаво
      </v-btn>
      </v-col>
      
    </v-row>

    <TableResults :arrDebtors="arrDebtors" />
  </v-card>
</template>

<script setup>
import TableResults from '../components/TableResults.vue'
import BackBtn from '@/components/UI/BackBtn.vue'

import { useProductsStore } from '../stores/products'
import { useUsersStore } from '../stores/users'

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const productsStore = useProductsStore()
const { products, clearProducts } = productsStore

const usersStore = useUsersStore()
const { users, clearUsers } = usersStore

let arrDebtors = reactive([])

const expenses = reactive([])
function calculationResults() {
  products.forEach((e) => {
    //Перебор по списку кушающих и добавление тех, кто должен в список expenses
    e.usersAte.forEach((item) => {
      if (item.name != e.userPayer) {
        expenses.push({
          id: expenses[expenses.length - 1] == undefined ? 1 : expenses[expenses.length - 1].id + 1,
          name: item.name,
          debt: {
            name: e.userPayer,
            price: e.price / e.usersAte.length
          }
        })
      }
    })
  })
  calculationExpenses()
}

function calculationExpenses() {
  //Сумирование дубликатов при соответсвии свойствам имени name и имени кому должен item.debt.name
  const arrSummDuplicate = expenses.reduce((acc, curr) => {
    const existingDuplicate = acc.find(
      (item) => item.name === curr.name && item.debt.name === curr.debt.name
    )

    if (existingDuplicate) {
      existingDuplicate.debt.price += curr.debt.price
    } else {
      acc.push(curr)
    }

    return acc
  }, [])
  // Вычисление кто кому должен при разных счетах
  const differentAccounts = arrSummDuplicate.map((item, index) => {
      if (item.debt.price > 0) {
        const oppositeDebtIndex = arrSummDuplicate.findIndex((debt) => debt.name === item.debt.name && debt.debt.name === item.name && debt.debt.price > 0)
        
        if (oppositeDebtIndex !== -1) {
          if (arrSummDuplicate[oppositeDebtIndex].debt.price >= item.debt.price) {
            arrSummDuplicate[oppositeDebtIndex].debt.price -= item.debt.price
            item.debt.price = 0
          } else {
            item.debt.price -= arrSummDuplicate[oppositeDebtIndex].debt.price
            arrSummDuplicate[oppositeDebtIndex].debt.price = 0
          }
        }
      }
      return item
    }
  )

  arrDebtors = differentAccounts
}

calculationResults()

const router = useRouter()
function resetForms() {
  localStorage.clear()
  clearProducts()
  clearUsers()

  router.push('/')
}
</script>

<style scoped lang="scss">
@import '../assets//main.scss';
.btn-back-container {
  @include flexble;
  justify-content: space-between;
}

.card-container {
  font-size: 20px;
}
</style>
