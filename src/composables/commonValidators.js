import { useUsersStore } from '../stores/users'
const usersStore = useUsersStore()
const { searchDuplicates } = usersStore
import { useProductsStore } from '../stores/products'
const productsStore = useProductsStore()
const { searchDuplicatesProducts } = productsStore

const rules = {
    checkStringName: (value) => {
        if (!value.trim() ) {
            return  'Обязательное поле' 
        }
        if (searchDuplicates()){
            return 'Этот пользователь уже существует'
        }
    },
    checkStringProduct: (value) => {
        if (!value.trim() ) {
            return  'Обязательное поле' 
        }
        if (searchDuplicatesProducts()){
            return 'Этот продукт уже существует'
        }
    },
    checkNumber: (value) => {
      if (!value) {
        return 'Это поле обязательно';
      }
      if (value >= 0) {
        return true;
      }
      return 'Стоимость должна быть больше 0';
    }
}

export default rules