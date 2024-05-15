import { reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUsersStore = defineStore('users', () => {
  const users = reactive([])

   const addNewUser = function () {
    users.push({
      name: '',
      id: users[users.length - 1] == undefined ? 1 : users[users.length - 1].id + 1
    })
  }

  const isEmptyName = () => {
    return users.some((e) => e.name.trim() == '')
  }

  function addUserInList() {
      if (!isEmptyName()) {
        addNewUser()
      }
  }

  function removeUser(id) {
    const index = users.findIndex((item) => item.id === id)
    if (index !== -1) {
      users.splice(index, 1)
    }
  }

  watch(users, async () => {
    localStorage.setItem('users', JSON.stringify(users))
  })

  function getUsersFromLocaleStorage() {
    const usersFromLocaleStorage = JSON.parse(localStorage.getItem('users'))

    if (usersFromLocaleStorage != null) {
      usersFromLocaleStorage.forEach((e) => {
        const existingIndex = users.findIndex((p) => p.id === e.id)
        if (existingIndex === -1) {
          users.push(e)
        }
      })
    }
  }

  const router = useRouter()
  function saveUsersForm() {
    if (!isEmptyName()) {
      router.push('/products')
    }
  }

  function clearUsers() {
    users.splice(0, users.length)
  }

  function searchDuplicates(){
    const lastUserName = users[users.length - 1].name.toLowerCase();
    for (let i = 0; i < users.length - 1; i++) {
      if (users[i].name.toLowerCase() == lastUserName){
        return true
      }
    }    
  }

  return { 
    users,
    addUserInList, 
    removeUser, 
    saveUsersForm, 
    getUsersFromLocaleStorage, 
    clearUsers,
    searchDuplicates
    }
})
