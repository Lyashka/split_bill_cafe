<template>
  <v-card class="mx-auto text-center mt-10 card-container" max-width="600px" min-height="100px">
    <label>Результаты</label>
    <TableResults :arrDebtors="arrDebtors" />
  </v-card>
</template>

<script setup>
import TableResults from '../components/TableResults.vue'
import { reactive } from 'vue'
import { useProductsStore } from '../stores/products'

const productsStore = useProductsStore()
const { products } = productsStore

let arrDebtors = reactive([])

let expenses = reactive([])
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
  // Вычисление кто кому должен при разных считах
  const differentAccounts = arrSummDuplicate.map((item, index) => {
    if (item.debt.price > 0) {
      const oppositeDebtIndex = arrSummDuplicate.findIndex(
        (debt) =>
          debt.name === item.debt.name && debt.debt.name === item.name && debt.debt.price > 0
      )
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
  })

  arrDebtors = differentAccounts
}

calculationResults()
</script>

<style scoped lang="scss">
.card-container {
  font-size: 20px;
}
</style>
