<template>
   <v-app>
      <v-app-bar>  
      <v-app-bar-title>Делим счет в кафе</v-app-bar-title>
    
      <template v-slot:append>
        <div >
          <v-menu 
            max-width="500px"
            v-model="menu"
            :close-on-content-click="false"
            location="center"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                prepend-icon="mdi-help-circle-outline" 
                v-bind="props"
              >  
              <span>Справка</span>
              </v-btn>
            </template>
      
            <v-card min-height="200px">
              <v-card-title>О приложении</v-card-title>
              <v-card-text>
                Простое и удобное приложение для разделения счета в кафе или ресторане. 
                Позволяет легко рассчитать, сколько должен заплатить каждый участник, с учетом заказанной или купленной еды, и количества человек. 
                Идеально подходит для компаний, желающих справедливо разделить расходы. 
                Экономит время и избавляет от неловких ситуаций при расчете. 
                Доступо на мобильных устройствах для быстрого использования.      
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  variant="text" 
                  @click="menu = false"
                >
                  OK
                </v-btn> 
              </v-card-actions>
            </v-card>
          </v-menu>
      </div>
      </template>
    </v-app-bar>
    
    <v-main style="  background-color:aliceblue">
      <RouterView />
    </v-main>
  </v-app>  
</template>

<script setup>
import { ref } from 'vue'     

let menu = ref(false)
</script>

<style>

</style>