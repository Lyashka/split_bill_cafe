import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUsersStore = defineStore('users', () => {
  let users = reactive([])

  const newUser = function () {
    users.push({
      name: '',
      id: users[users.length - 1] == undefined ? 1 : users[users.length - 1].id + 1
    })
  }

  const isEmptyName = () => {
    return users.some((e) => e.name.trim() == '')
  }

  function addUserInList() {
    if (users.length == 0) {
      newUser()
    } else {
      if (!isEmptyName()) {
        newUser()
      }
    }
  }

  function removeUser(id) {
    const index = users.findIndex((item) => item.id === id)
    if (index !== -1) {
      users.splice(index, 1)
    }
  }

const router = useRouter()
  function saveUsersForm() {
    if (!isEmptyName()) {
      router.push('/products')
    }
  }

  return { users, addUserInList, removeUser, saveUsersForm }
})
